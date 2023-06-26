"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certification = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
exports.Certification = config_1.sequelize.define("certifications", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    academy: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    certificate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    finish_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    link: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: true,
});
