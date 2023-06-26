import { DataTypes } from "sequelize";
import { sequelize } from "../config";

export const Hobbie = sequelize.define(
  "hobbies",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
