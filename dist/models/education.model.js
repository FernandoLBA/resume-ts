"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Education = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
exports.Education = config_1.sequelize.define("education", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    degree: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    from: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    to: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    link: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: true,
});
