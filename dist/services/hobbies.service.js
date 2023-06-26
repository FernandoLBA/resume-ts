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
exports.deleteHobbieService = exports.updateHobbieService = exports.createHobbieService = exports.getUsersByHobbieService = exports.getHobbieService = exports.getAllHobbiesService = void 0;
const models_1 = require("../models");
/**
 *
 * @returns
 */
const getAllHobbiesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Hobbie.findAll();
    return items;
});
exports.getAllHobbiesService = getAllHobbiesService;
/**
 *
 * @param id
 * @returns
 */
const getHobbieService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Hobbie.findByPk(id);
    return item;
});
exports.getHobbieService = getHobbieService;
/**
 *
 * @param id
 * @returns
 */
const getUsersByHobbieService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Hobbie.findAll({
        where: { id },
        attributes: [],
        include: {
            model: models_1.User,
            attributes: {
                exclude: ["password", "roleId", "phone_number", "createdAt", "updatedAt"],
            },
        },
    });
    return items;
});
exports.getUsersByHobbieService = getUsersByHobbieService;
/**
 *
 * @param body
 * @returns
 */
const createHobbieService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = body;
    const [item, created] = yield models_1.Hobbie.findOrCreate({
        where: { name },
        defaults: Object.assign({}, body),
    });
    return { item, created };
});
exports.createHobbieService = createHobbieService;
/**
 *
 * @param id
 * @param body
 * @returns
 */
const updateHobbieService = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Hobbie.findByPk(id);
    item && (yield item.update(body));
    return item;
});
exports.updateHobbieService = updateHobbieService;
/**
 *
 * @param id
 * @returns
 */
const deleteHobbieService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Hobbie.findByPk(id);
    item && (yield item.destroy());
    return item;
});
exports.deleteHobbieService = deleteHobbieService;
