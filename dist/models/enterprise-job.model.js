"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseJob = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
exports.EnterpriseJob = config_1.sequelize.define("enterprises_x_jobs", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    jobId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    enterpriseId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    timestamps: false,
});
