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
exports.deleteSoftSkillService = exports.updateSoftSkillService = exports.createSoftSkillService = exports.getUsersBySoftSkillService = exports.getSoftSkillService = exports.getAllSoftSkillsService = void 0;
const models_1 = require("../models");
/**
 *
 * @returns
 */
const getAllSoftSkillsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.SoftSkill.findAll();
    return items;
});
exports.getAllSoftSkillsService = getAllSoftSkillsService;
/**
 *
 * @param id
 * @returns
 */
const getSoftSkillService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.SoftSkill.findByPk(id);
    return item;
});
exports.getSoftSkillService = getSoftSkillService;
/**
 *
 * @param id
 * @returns
 */
const getUsersBySoftSkillService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.SoftSkill.findAll({
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
exports.getUsersBySoftSkillService = getUsersBySoftSkillService;
/**
 *
 * @param body
 * @returns
 */
const createSoftSkillService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = body;
    const [item, created] = yield models_1.SoftSkill.findOrCreate({
        where: { name },
        defaults: Object.assign({}, body),
    });
    return { item, created };
});
exports.createSoftSkillService = createSoftSkillService;
/**
 *
 * @param id
 * @param body
 * @returns
 */
const updateSoftSkillService = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.SoftSkill.findByPk(id);
    item && (yield item.update(body));
    return item;
});
exports.updateSoftSkillService = updateSoftSkillService;
/**
 *
 * @param id
 * @returns
 */
const deleteSoftSkillService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.SoftSkill.findByPk(id);
    item && (yield item.destroy());
    return item;
});
exports.deleteSoftSkillService = deleteSoftSkillService;
