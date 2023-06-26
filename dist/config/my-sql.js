"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const sequelize_1 = require("sequelize");
const DB_NAME = process.env.DB_NAME || "db_name";
const DB_USER = process.env.DB_USER || "db_user";
const DB_PASSWORD = process.env.DB_PASSWORD || "db_pass12/4*52sikdn";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || "7070";
const sequelize = new sequelize_1.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    port: +DB_PORT,
    host: DB_HOST,
    dialect: "mysql",
    logging: false,
});
exports.default = sequelize;
/* mysql://ufppviyaxbp85cex:7SeOGjeujQw2rEqxe50J@b8ccd0nevnxsoavuymcz-mysql.services.clever-cloud.com:3306/b8ccd0nevnxsoavuymcz */ 
