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
exports.deleteSoftSkill = exports.updateSoftSkill = exports.createSoftSkill = exports.getUsersBySoftSkill = exports.getSoftSkill = exports.getAllSoftSkills = void 0;
const services_1 = require("../services");
const utils_1 = require("../utils");
/**
 *
 * @param req
 * @param res
 */
const getAllSoftSkills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.getAllSoftSkillsService)();
        (0, utils_1.handleHttpResponses)(res, "Items listed", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_GETTING_ITEMS", 500);
    }
});
exports.getAllSoftSkills = getAllSoftSkills;
/**
 *
 * @param param0
 * @param res
 * @returns
 */
const getSoftSkill = ({ params: { id } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.getSoftSkillService)(id);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Item listed", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_GETTING_ITEM", 500, JSON.stringify(error));
    }
});
exports.getSoftSkill = getSoftSkill;
/**
 *
 * @param param0
 * @param res
 * @returns
 */
const getUsersBySoftSkill = ({ params: { id } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.getUsersBySoftSkillService)(id);
        if (!data.length)
            return (0, utils_1.handleErrorHttpController)(res, "ITEMS_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Items listed by soft skill", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_GET_MIXING_ITEMS", 500, JSON.stringify(error));
    }
});
exports.getUsersBySoftSkill = getUsersBySoftSkill;
/**
 *
 * @param param0
 * @param res
 * @returns
 */
const createSoftSkill = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { item: data, created } = yield (0, services_1.createSoftSkillService)(body);
        if (!created)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_ALREADY_EXISTS", 400);
        (0, utils_1.handleHttpResponses)(res, "Item created", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_CREATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.createSoftSkill = createSoftSkill;
/**
 *
 * @param req
 * @param res
 */
const updateSoftSkill = ({ params: { id }, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.updateSoftSkillService)(id, body);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Item updated", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_UPDATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.updateSoftSkill = updateSoftSkill;
/**
 *
 * @param req
 * @param res
 */
const deleteSoftSkill = ({ params: { id } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.deleteSoftSkillService)(id);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Item deleted", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_UPDATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.deleteSoftSkill = deleteSoftSkill;
