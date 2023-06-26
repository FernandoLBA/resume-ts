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
exports.deleteRoleService = exports.updateRoleService = exports.createRoleService = exports.getUsersByRoleService = exports.getRoleService = exports.getRolesService = void 0;
const models_1 = require("../models");
/**
 *
 * @returns
 */
const getRolesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Role.findAll();
    return items;
});
exports.getRolesService = getRolesService;
/**
 *
 * @param id
 * @returns
 */
const getRoleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Role.findByPk(id);
    return item;
});
exports.getRoleService = getRoleService;
/**
 *
 * @param id
 * @returns
 */
const getUsersByRoleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Role.findAll({
        where: { id },
        attributes: [],
        include: {
            model: models_1.User,
            attributes: {
                exclude: [
                    "password",
                    "roleId",
                    "phone_number",
                    "createdAt",
                    "updatedAt",
                ],
            },
        },
    });
    return items;
});
exports.getUsersByRoleService = getUsersByRoleService;
/**
 *
 * @param body
 * @returns
 */
const createRoleService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { role } = body;
    const [item, created] = yield models_1.Role.findOrCreate({
        where: { role },
        defaults: Object.assign({}, body),
    });
    return { item, created };
});
exports.createRoleService = createRoleService;
/**
 *
 * @param id
 * @param body
 * @returns
 */
const updateRoleService = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Role.findByPk(id);
    item && (yield item.update(body));
    return item;
});
exports.updateRoleService = updateRoleService;
/**
 *
 * @param id
 * @returns
 */
const deleteRoleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Role.findByPk(id);
    item && (yield item.destroy());
    return item;
});
exports.deleteRoleService = deleteRoleService;
