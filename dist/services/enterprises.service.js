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
exports.deleteEnterpriseService = exports.updateEnterpriseService = exports.createEnterpriseService = exports.getUsersByEnterpriseService = exports.getEnterpriseService = exports.getAllEnterprisesService = void 0;
const models_1 = require("../models");
/**
 *
 * @returns
 */
const getAllEnterprisesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Enterprise.findAll();
    return items;
});
exports.getAllEnterprisesService = getAllEnterprisesService;
/**
 *
 * @param id
 * @returns
 */
const getEnterpriseService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Enterprise.findByPk(id, {
        include: [{
                model: models_1.Job,
                through: {
                    attributes: []
                }
            }]
    });
    return item;
});
exports.getEnterpriseService = getEnterpriseService;
/**
 *
 * @param id
 * @returns
 */
const getUsersByEnterpriseService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Enterprise.findAll({
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
exports.getUsersByEnterpriseService = getUsersByEnterpriseService;
/**
 *
 * @param body
 * @returns
 */
const createEnterpriseService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = body;
    const [item, created] = yield models_1.Enterprise.findOrCreate({
        where: { name },
        defaults: Object.assign({}, body),
    });
    return { item, created };
});
exports.createEnterpriseService = createEnterpriseService;
/**
 *
 * @param id
 * @param body
 * @returns
 */
const updateEnterpriseService = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Enterprise.findByPk(id);
    item && (yield item.update(body));
    return item;
});
exports.updateEnterpriseService = updateEnterpriseService;
/**
 *
 * @param id
 * @returns
 */
const deleteEnterpriseService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Enterprise.findByPk(id);
    item && (yield item.destroy());
    return item;
});
exports.deleteEnterpriseService = deleteEnterpriseService;
