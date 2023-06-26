import { DataTypes } from "sequelize";
import { sequelize } from "../config";

export const Job = sequelize.define(
  "jobs",
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
    activities: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    from: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    to: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stack: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);
