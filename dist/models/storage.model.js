"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
exports.Storage = config_1.sequelize.define("storage", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    filename: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});
