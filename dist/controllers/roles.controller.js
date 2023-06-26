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
exports.deleteRole = exports.updateRole = exports.createRole = exports.getRole = exports.getUsersByRole = exports.getRoles = void 0;
const services_1 = require("../services");
const utils_1 = require("../utils");
/**
 *
 * @param req
 * @param res
 */
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.getRolesService)();
        (0, utils_1.handleHttpResponses)(res, "Items listed", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_GETTING_ITEMS", 500, JSON.stringify(error));
    }
});
exports.getRoles = getRoles;
/**
 *
 * @param param0
 * @param res
 * @returns
 */
const getUsersByRole = ({ params: { id } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.getUsersByRoleService)(id);
        if (!data.length)
            return (0, utils_1.handleErrorHttpController)(res, "ITEMS_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Users listed by role", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_GET_MIXING_ITEMS", 500, JSON.stringify(error));
    }
});
exports.getUsersByRole = getUsersByRole;
/**
 *
 * @param param0
 * @param res
 */
const getRole = ({ params: { id } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.getRoleService)(id);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Item listed", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_GETTING_ITEM", 500, JSON.stringify(error));
    }
});
exports.getRole = getRole;
/**
 *
 * @param param0
 * @param res
 */
const createRole = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { item: data, created } = yield (0, services_1.createRoleService)(body);
        if (!created)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_ALREADY_EXISTS", 400);
        (0, utils_1.handleHttpResponses)(res, "Item created", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_CREATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.createRole = createRole;
/**
 *
 * @param req
 * @param res
 */
const updateRole = ({ params: { id }, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.updateRoleService)(id, body);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Item updated", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_UPDATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.updateRole = updateRole;
/**
 *
 * @param req
 * @param res
 */
const deleteRole = ({ params: { id } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.deleteRoleService)(id);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Item deleted", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_UPDATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.deleteRole = deleteRole;
