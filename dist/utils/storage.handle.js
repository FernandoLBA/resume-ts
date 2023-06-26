"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = exports.fileStorage = void 0;
const multer_1 = __importDefault(require("multer"));
exports.fileStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage);
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split(".").pop();
        const fileName = `file-${Date.now()}.${ext}`;
        cb(null, fileName);
    },
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpeg") {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
exports.fileFilter = fileFilter;
