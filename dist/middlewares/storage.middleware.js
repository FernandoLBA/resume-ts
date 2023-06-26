"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const utils_1 = require("../utils");
exports.storageMiddleware = (0, multer_1.default)({ storage: utils_1.fileStorage, fileFilter: utils_1.fileFilter });
