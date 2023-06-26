"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStorage = exports.updateStorage = exports.createStorage = exports.getProjectByStorage = exports.getStorage = exports.getAllStorage = void 0;
const services_1 = require("../services");
const utils_1 = require("../utils");
/**
 *
 * @param req
 * @param res
 */
const getAllStorage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.getAllStorageService)();
        (0, utils_1.handleHttpResponses)(res, "Items listed", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_GETTING_ITEMS", 500);
    }
});
exports.getAllStorage = getAllStorage;
/**
 *
 * @param param0
 * @param res
 * @returns
 */
const getStorage = ({ params: { id } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.getStorageService)(id);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Item listed", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_GETTING_ITEM", 500, JSON.stringify(error));
    }
});
exports.getStorage = getStorage;
/**
 * Obtiene los proyectos por el StorageId
 * @param param0
 * @param res
 * @returns
 */
const getProjectByStorage = ({ params: { id } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.getProjectByStorageService)(id);
        if (!data.length)
            return (0, utils_1.handleErrorHttpController)(res, "ITEMS_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Project listed by Storage", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_GET_MIXING_ITEMS", 500, JSON.stringify(error));
    }
});
exports.getProjectByStorage = getProjectByStorage;
/**
 *
 * @param param0
 * @param res
 * @returns
 */
const createStorage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { file } = req;
        const PUBLIC_URL = process.env.PUBLIC_URL;
        const PORT = process.env.PORT;
        const body = {
            filename: file === null || file === void 0 ? void 0 : file.filename,
            url: `${PUBLIC_URL}:${PORT}/${file === null || file === void 0 ? void 0 : file.filename}`,
        };
        const { item: data, created } = yield (0, services_1.createStorageService)(body);
        if (!created)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_ALREADY_EXISTS", 400);
        (0, utils_1.handleHttpResponses)(res, "Item created", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_CREATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.createStorage = createStorage;
/**
 *
 * @param req
 * @param res
 */
const updateStorage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, file, } = req;
        const PUBLIC_URL = process.env.PUBLIC_URL;
        const PORT = process.env.PORT;
        const body = {
            filename: file === null || file === void 0 ? void 0 : file.filename,
            url: `${PUBLIC_URL}:${PORT}/${file === null || file === void 0 ? void 0 : file.filename}`,
        };
        const data = yield (0, services_1.updateStorageService)(id, body);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Item updated", data);
    }
    catch (error) {
        console.log(error);
        (0, utils_1.handleErrorHttpController)(res, "ERROR_UPDATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.updateStorage = updateStorage;
/**
 *
 * @param req
 * @param res
 */
const deleteStorage = ({ params: { id } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.deleteStorageService)(id);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Item deleted", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_UPDATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.deleteStorage = deleteStorage;
