"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enterprise = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
exports.Enterprise = config_1.sequelize.define("enterprises", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    web_page: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
}, {
    timestamps: true,
});
