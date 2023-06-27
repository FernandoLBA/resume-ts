"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const models_1 = require("../models");
const routes_1 = require("../routes");
const utils_1 = require("../utils");
const my_sql_1 = __importDefault(require("./my-sql"));
const morgan_body_1 = __importDefault(require("morgan-body"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.PORT = process.env.PORT || "8080";
        this.listen();
        this.middleWares();
        this.router();
        this.dbConnect();
        this.relations();
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield my_sql_1.default.sync({ force: false }).then(() => __awaiter(this, void 0, void 0, function* () {
                yield this.insertDefaultData();
                console.log("Data loaded");
            }));
            this.app.listen(this.PORT, () => {
                console.log(`
      #######################################################

      Server listenning on ${this.PORT} port

      #######################################################

      By: Fernando Barrios
      Stack: NodeJS, Express, TypeScript, Sequelize and MySQL
      Github: https://github.com/fernandolba
      #######################################################
      `);
            });
        });
    }
    middleWares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static(`${__dirname}/../storage`));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)());
        (0, morgan_body_1.default)(this.app);
    }
    router() {
        this.app.use("/api", routes_1.router);
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield my_sql_1.default.authenticate();
                console.log("Connection to the DB succesfull");
            }
            catch (error) {
                console.log("error");
                console.log("Connection to the DB failed");
            }
        });
    }
    relations() {
        // Roles & Users (1:N);
        models_1.Role.hasMany(models_1.User, { foreignKey: "roleId", sourceKey: "id" });
        models_1.User.belongsTo(models_1.Role);
        // Education & Users (N:1);
        models_1.Education.belongsTo(models_1.User, { foreignKey: "userId" });
        models_1.User.hasMany(models_1.Education);
        // Certification & Users (N:1);
        models_1.Certification.belongsTo(models_1.User, { foreignKey: "userId" });
        models_1.User.hasMany(models_1.Certification);
        // Soft Skills & Users (N:1);
        models_1.SoftSkill.belongsTo(models_1.User, { foreignKey: "userId" });
        models_1.User.hasMany(models_1.SoftSkill);
        // Technologies & Users (N:1);
        models_1.Technology.belongsTo(models_1.User, { foreignKey: "userId" });
        models_1.User.hasMany(models_1.Technology);
        // Hobbies & Users (N:1);
        models_1.Hobbie.belongsTo(models_1.User, { foreignKey: "userId" });
        models_1.User.hasMany(models_1.Hobbie);
        // Users & Enterprises (1:N);
        models_1.Enterprise.belongsTo(models_1.User, { foreignKey: "userId" });
        models_1.User.hasMany(models_1.Enterprise);
        // Enterprises & Jobs (N:N);
        models_1.Job.belongsToMany(models_1.Enterprise, {
            through: "enterprises_x_jobs",
            timestamps: false,
        });
        models_1.Enterprise.belongsToMany(models_1.Job, {
            through: "enterprises_x_jobs",
            timestamps: false,
        });
        // Enterprises & Projects (1:N);
        models_1.Project.belongsTo(models_1.Enterprise, { foreignKey: "enterpriseId" });
        models_1.Enterprise.hasMany(models_1.Project);
        // Projects & Storage (1:1);
        models_1.Project.belongsTo(models_1.Storage, { foreignKey: "storageId", as: "storagio" });
    }
    insertDefaultData() {
        return __awaiter(this, void 0, void 0, function* () {
            // crear rol
            const roles = [{ role: "admin" }, { role: "user" }];
            yield models_1.Role.bulkCreate(roles);
            // crear usuario
            const user = {
                name: "Fernando",
                last_name: "Barrios",
                email: "fbarrios.pyc@gmail.com",
                pro_objective: "I am a Full-Stack Developer, with 3 years of experience in the Development of Web APPs, Prototyping, Designing User Interfaces and coding for the Front-End and Back-End. I am looking for a job opportunity where I could share and increase my knowledge. I regard myself as a problem solving person, collaborative, creative and passionate about coding and life, ready to face new challenges.",
                current_degree: "Full Stack Web Developer",
                phone_number: "+51917077890",
                password: yield (0, utils_1.encryptPassword)("12345678"),
                roleId: 1,
            };
            yield models_1.User.findOrCreate({ where: { email: user.email }, defaults: user });
        });
    }
}
exports.Server = Server;
