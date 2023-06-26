import { DataTypes } from "sequelize";
import { sequelize } from "../config";

export const EnterpriseJob = sequelize.define(
  "enterprises_x_jobs",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jobId: {
      type: DataTypes.INTEGER,
    },
    enterpriseId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);
