import cors from "cors";
import express, { Application, Request, Response } from "express";
import {
  Certification,
  Education,
  Enterprise,
  Hobbie,
  Job,
  Project,
  Role,
  SoftSkill,
  Storage,
  Technology,
  User,
} from "../models";
import { router } from "../routes";
import { encryptPassword } from "../utils";
import { default as db, default as sequelize } from "./my-sql";
import morganBody from "morgan-body";

export class Server {
  private app: Application;
  private PORT: string;

  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || "8080";
    this.listen();
    this.middleWares();
    this.router();
    this.dbConnect();
    this.relations();
  }

  async listen() {
    await sequelize.sync({ force: false }).then(async () => {
      await this.insertDefaultData();

      console.log("Data loaded");
    });

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
  }

  middleWares() {
    this.app.use(express.json());
    this.app.use(express.static(`${__dirname}/../storage`));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    morganBody(this.app);
  }

  router() {
    this.app.use("/api", router);
  }

  async dbConnect() {
    try {
      await db.authenticate();

      console.log("Connection to the DB succesfull");
    } catch (error) {
      console.log("error");
      console.log("Connection to the DB failed");
    }
  }

  relations() {
    // Roles & Users (1:N);
    Role.hasMany(User, { foreignKey: "roleId", sourceKey: "id" });
    User.belongsTo(Role);

    // Education & Users (N:1);
    Education.belongsTo(User, { foreignKey: "userId" });
    User.hasMany(Education);

    // Certification & Users (N:1);
    Certification.belongsTo(User, { foreignKey: "userId" });
    User.hasMany(Certification);

    // Soft Skills & Users (N:1);
    SoftSkill.belongsTo(User, { foreignKey: "userId" });
    User.hasMany(SoftSkill);

    // Technologies & Users (N:1);
    Technology.belongsTo(User, { foreignKey: "userId" });
    User.hasMany(Technology);

    // Hobbies & Users (N:1);
    Hobbie.belongsTo(User, { foreignKey: "userId" });
    User.hasMany(Hobbie);

    // Users & Enterprises (1:N);
    Enterprise.belongsTo(User, { foreignKey: "userId" });
    User.hasMany(Enterprise);

    // Enterprises & Jobs (N:N);
    Job.belongsToMany(Enterprise, {
      through: "enterprises_x_jobs",
      timestamps: false,
    });
    Enterprise.belongsToMany(Job, {
      through: "enterprises_x_jobs",
      timestamps: false,
    });

    // Enterprises & Projects (1:N);
    Project.belongsTo(Enterprise, { foreignKey: "enterpriseId" });
    Enterprise.hasMany(Project);

    // Projects & Storage (1:1);
    Project.belongsTo(Storage, {foreignKey: "storageId", as: "storagio"});
  }

  async insertDefaultData() {
    // crear rol
    const roles = [{ role: "admin" }, { role: "user" }];

    await Role.bulkCreate(roles);

    // crear usuario
    const user = {
      name: "Fernando",
      last_name: "Barrios",
      email: "fbarrios.pyc@gmail.com",
      pro_objective:
        "I am a Full-Stack Developer, with 3 years of experience in the Development of Web APPs, Prototyping, Designing User Interfaces and coding for the Front-End and Back-End. I am looking for a job opportunity where I could share and increase my knowledge. I regard myself as a problem solving person, collaborative, creative and passionate about coding and life, ready to face new challenges.",
      current_degree: "Full Stack Web Developer",
      phone_number: "+51917077890",
      password: await encryptPassword("12345678"),
      roleId: 1,
    };

    await User.findOrCreate({ where: { email: user.email }, defaults: user });
  }
}
