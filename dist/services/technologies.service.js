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
exports.deleteTechnologyService = exports.updateTechnologyService = exports.createTechnologyService = exports.getUsersByTechnologyService = exports.getTechnologyService = exports.getAllTechnologiesService = void 0;
const models_1 = require("../models");
/**
 *
 * @returns
 */
const getAllTechnologiesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Technology.findAll();
    return items;
});
exports.getAllTechnologiesService = getAllTechnologiesService;
/**
 *
 * @param id
 * @returns
 */
const getTechnologyService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Technology.findByPk(id);
    return item;
});
exports.getTechnologyService = getTechnologyService;
/**
 *
 * @param id
 * @returns
 */
const getUsersByTechnologyService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Technology.findAll({
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
exports.getUsersByTechnologyService = getUsersByTechnologyService;
/**
 *
 * @param body
 * @returns
 */
const createTechnologyService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = body;
    const [item, created] = yield models_1.Technology.findOrCreate({
        where: { name },
        defaults: Object.assign({}, body),
    });
    return { item, created };
});
exports.createTechnologyService = createTechnologyService;
/**
 *
 * @param id
 * @param body
 * @returns
 */
const updateTechnologyService = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Technology.findByPk(id);
    item && (yield item.update(body));
    return item;
});
exports.updateTechnologyService = updateTechnologyService;
/**
 *
 * @param id
 * @returns
 */
const deleteTechnologyService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Technology.findByPk(id);
    item && (yield item.destroy());
    return item;
});
exports.deleteTechnologyService = deleteTechnologyService;
