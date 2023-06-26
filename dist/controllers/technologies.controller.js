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
exports.deleteTechnology = exports.updateTechnology = exports.createTechnology = exports.getUsersByTechnology = exports.getTechnology = exports.getAllTechnologies = void 0;
const services_1 = require("../services");
const utils_1 = require("../utils");
/**
 *
 * @param req
 * @param res
 */
const getAllTechnologies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.getAllTechnologiesService)();
        (0, utils_1.handleHttpResponses)(res, "Items listed", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_GETTING_ITEMS", 500);
    }
});
exports.getAllTechnologies = getAllTechnologies;
/**
 *
 * @param param0
 * @param res
 * @returns
 */
const getTechnology = ({ params: { id } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.getTechnologyService)(id);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Item listed", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_GETTING_ITEM", 500, JSON.stringify(error));
    }
});
exports.getTechnology = getTechnology;
/**
 *
 * @param param0
 * @param res
 * @returns
 */
const getUsersByTechnology = ({ params: { id } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.getUsersByTechnologyService)(id);
        if (!data.length)
            return (0, utils_1.handleErrorHttpController)(res, "ITEMS_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Items listed by technology", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_GET_MIXING_ITEMS", 500, JSON.stringify(error));
    }
});
exports.getUsersByTechnology = getUsersByTechnology;
/**
 *
 * @param param0
 * @param res
 * @returns
 */
const createTechnology = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { item: data, created } = yield (0, services_1.createTechnologyService)(body);
        if (!created)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_ALREADY_EXISTS", 400);
        (0, utils_1.handleHttpResponses)(res, "Item created", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_CREATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.createTechnology = createTechnology;
/**
 *
 * @param req
 * @param res
 */
const updateTechnology = ({ params: { id }, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.updateTechnologyService)(id, body);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Item updated", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_UPDATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.updateTechnology = updateTechnology;
/**
 *
 * @param req
 * @param res
 */
const deleteTechnology = ({ params: { id } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.deleteTechnologyService)(id);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Item deleted", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_UPDATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.deleteTechnology = deleteTechnology;
