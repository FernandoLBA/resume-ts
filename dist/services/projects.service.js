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
exports.deleteProjectService = exports.updateProjectService = exports.createProjectService = exports.getEnterprisesByProjectService = exports.getProjectService = exports.getAllProjectService = void 0;
const models_1 = require("../models");
/**
 *
 * @returns
 */
const getAllProjectService = () => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Project.findAll();
    return items;
});
exports.getAllProjectService = getAllProjectService;
/**
 *
 * @param id
 * @returns
 */
const getProjectService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Project.findByPk(id);
    return item;
});
exports.getProjectService = getProjectService;
/**
 *
 * @param id
 * @returns
 */
const getEnterprisesByProjectService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Project.findAll({
        where: { id },
        attributes: [],
        include: {
            model: models_1.Enterprise,
            attributes: {
                exclude: [
                    "createdAt",
                    "updatedAt",
                ],
            },
        },
    });
    return items;
});
exports.getEnterprisesByProjectService = getEnterprisesByProjectService;
/**
 *
 * @param body
 * @returns
 */
const createProjectService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = body;
    const [item, created] = yield models_1.Project.findOrCreate({
        where: { name },
        defaults: Object.assign({}, body),
    });
    return { item, created };
});
exports.createProjectService = createProjectService;
/**
 *
 * @param id
 * @param body
 * @returns
 */
const updateProjectService = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Project.findByPk(id);
    item && (yield item.update(body));
    return item;
});
exports.updateProjectService = updateProjectService;
/**
 *
 * @param id
 * @returns
 */
const deleteProjectService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Project.findByPk(id);
    item && (yield item.destroy());
    return item;
});
exports.deleteProjectService = deleteProjectService;
