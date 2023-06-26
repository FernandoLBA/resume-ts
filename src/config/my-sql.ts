import "dotenv/config";
import { Sequelize } from "sequelize";

const DB_NAME: string = process.env.DB_NAME || "db_name";
const DB_USER: string = process.env.DB_USER || "db_user";
const DB_PASSWORD: string = process.env.DB_PASSWORD || "db_pass12/4*52sikdn";
const DB_HOST: string = process.env.DB_HOST || "localhost";
const DB_PORT: string = process.env.DB_PORT || "7070";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  port: +DB_PORT,
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
});

export default sequelize;

/* mysql://ufppviyaxbp85cex:7SeOGjeujQw2rEqxe50J@b8ccd0nevnxsoavuymcz-mysql.services.clever-cloud.com:3306/b8ccd0nevnxsoavuymcz */