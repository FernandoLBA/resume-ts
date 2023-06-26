"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hobbie = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
exports.Hobbie = config_1.sequelize.define("hobbies", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});
