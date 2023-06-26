import { DataTypes } from "sequelize";
import { sequelize } from "../config";

export const Education = sequelize.define(
  "education",
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
    degree: {
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
    link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);
