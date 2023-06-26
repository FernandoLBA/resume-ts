"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
exports.Role = config_1.sequelize.define("roles", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    role: {
        type: sequelize_1.DataTypes.ENUM,
        values: ["admin", "user"],
        defaultValue: "user",
        allowNull: false,
    },
}, {
    timestamps: true,
});
