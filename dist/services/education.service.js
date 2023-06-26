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
exports.deleteEducationService = exports.updateEducationService = exports.createEducationService = exports.getUsersByEducationService = exports.getEducationService = exports.getAllEducationService = void 0;
const models_1 = require("../models");
/**
 *
 * @returns
 */
const getAllEducationService = () => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Education.findAll();
    return items;
});
exports.getAllEducationService = getAllEducationService;
/**
 *
 * @param id
 * @returns
 */
const getEducationService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Education.findByPk(id);
    return item;
});
exports.getEducationService = getEducationService;
/**
 *
 * @param id
 * @returns
 */
const getUsersByEducationService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Education.findAll({
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
exports.getUsersByEducationService = getUsersByEducationService;
/**
 *
 * @param body
 * @returns
 */
const createEducationService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { degree } = body;
    const [item, created] = yield models_1.Education.findOrCreate({
        where: { degree },
        defaults: Object.assign({}, body),
    });
    return { item, created };
});
exports.createEducationService = createEducationService;
/**
 *
 * @param id
 * @param body
 * @returns
 */
const updateEducationService = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Education.findByPk(id);
    item && (yield item.update(body));
    return item;
});
exports.updateEducationService = updateEducationService;
/**
 *
 * @param id
 * @returns
 */
const deleteEducationService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Education.findByPk(id);
    item && (yield item.destroy());
    return item;
});
exports.deleteEducationService = deleteEducationService;
