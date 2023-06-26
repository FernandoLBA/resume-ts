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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStorageService = exports.updateStorageService = exports.createStorageService = exports.getProjectByStorageService = exports.getStorageService = exports.getAllStorageService = void 0;
const fs_1 = __importDefault(require("fs"));
const models_1 = require("../models");
/**
 *
 * @returns
 */
const getAllStorageService = () => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Storage.findAll();
    return items;
});
exports.getAllStorageService = getAllStorageService;
/**
 *
 * @param id
 * @returns
 */
const getStorageService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Storage.findByPk(id);
    return item;
});
exports.getStorageService = getStorageService;
/**
 *
 * @param id
 * @returns
 */
const getProjectByStorageService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Storage.findAll({
        where: { id },
        attributes: [],
        include: {
            model: models_1.Project,
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        },
    });
    return items;
});
exports.getProjectByStorageService = getProjectByStorageService;
/**
 *
 * @param body
 * @returns
 */
const createStorageService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { filename } = body;
    const [item, created] = yield models_1.Storage.findOrCreate({
        where: { filename },
        defaults: Object.assign({}, body),
    });
    return { item, created };
});
exports.createStorageService = createStorageService;
/**
 *
 * @param id
 * @param body
 * @returns
 */
const updateStorageService = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const item = yield models_1.Storage.findByPk(id);
    const path = `${__dirname}/../storage`;
    // delete the previous image
    item && fs_1.default.unlink(`${path}/${(_a = item === null || item === void 0 ? void 0 : item.dataValues) === null || _a === void 0 ? void 0 : _a.filename}`, (err) => {
        if (err)
            throw err;
    });
    item && (yield item.update(body));
    return item;
});
exports.updateStorageService = updateStorageService;
/**
 *
 * @param id
 * @returns
 */
const deleteStorageService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const item = yield models_1.Storage.findByPk(id);
    const path = `${__dirname}/../storage`;
    // delete the previous image
    item && fs_1.default.unlink(`${path}/${(_b = item === null || item === void 0 ? void 0 : item.dataValues) === null || _b === void 0 ? void 0 : _b.filename}`, (err) => {
        if (err)
            throw err;
    });
    item && (yield item.destroy());
    return item;
});
exports.deleteStorageService = deleteStorageService;
