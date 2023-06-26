import { DataTypes } from "sequelize";
import { sequelize } from "../config";

export const Role = sequelize.define(
  "roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["admin", "user"],
      defaultValue: "user",
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
