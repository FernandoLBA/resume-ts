"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
exports.Auth = config_1.sequelize.define("auth", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});
