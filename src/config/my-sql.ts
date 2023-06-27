import "dotenv/config";
import { Sequelize } from "sequelize";

const NODE_ENV: string = process.env.NODE_ENV!;
const DB_NAME: string  = NODE_ENV === "production" ? process.env.DB_NAME! : "resume";
const DB_USER: string = NODE_ENV === "production" ? process.env.DB_USER! : "root";
const DB_PASSWORD: string = NODE_ENV === "production" ? process.env.DB_PASSWORD! : "admin";
const DB_HOST: string = NODE_ENV === "production" ? process.env.DB_HOST! : "localhost";
const DB_PORT: string = NODE_ENV === "production" ? process.env.DB_PORT! : "3306";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  port: Number(DB_PORT),
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
});

export default sequelize;
