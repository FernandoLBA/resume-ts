"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const sequelize_1 = require("sequelize");
const NODE_ENV = process.env.NODE_ENV;
const DB_NAME = NODE_ENV === "production" ? process.env.DB_NAME : "resume";
const DB_USER = NODE_ENV === "production" ? process.env.DB_USER : "root";
const DB_PASSWORD = NODE_ENV === "production" ? process.env.DB_PASSWORD : "admin";
const DB_HOST = NODE_ENV === "production" ? process.env.DB_HOST : "localhost";
const DB_PORT = NODE_ENV === "production" ? process.env.DB_PORT : "3306";
const sequelize = new sequelize_1.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    port: Number(DB_PORT),
    host: DB_HOST,
    dialect: "mysql",
    logging: false,
});
exports.default = sequelize;
