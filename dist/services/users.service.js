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
exports.deleteUserService = exports.updateUserService = exports.getUserService = exports.getUsersService = void 0;
const models_1 = require("../models");
/**
 *
 * @returns
 */
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.User.findAll({
        attributes: { exclude: ["password", "phone_number"] },
    });
    return items;
});
exports.getUsersService = getUsersService;
/**
 *
 * @param id
 * @returns
 */
const getUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.User.findByPk(id, {
        attributes: {
            exclude: ["password", "roleId", "phone_number", "createdAt", "updatedAt"],
        },
        include: [
            {
                model: models_1.Education,
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
            },
            {
                model: models_1.Role,
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
            },
            {
                model: models_1.Certification,
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
            },
            {
                model: models_1.SoftSkill,
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
            },
            {
                model: models_1.Technology,
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
            },
            {
                model: models_1.Hobbie,
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
            },
            {
                model: models_1.Enterprise,
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
                include: [
                    {
                        model: models_1.Job,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"],
                        },
                        through: {
                            attributes: [],
                        },
                    },
                    {
                        model: models_1.Project,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"],
                        },
                        include: [
                            {
                                model: models_1.Storage,
                                as: "storagio",
                            },
                        ],
                    },
                ],
            },
        ],
    });
    return item;
});
exports.getUserService = getUserService;
/**
 *
 * @param id
 * @param body
 * @returns
 */
const updateUserService = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.User.findByPk(id, {
        attributes: { exclude: ["password", "phone_number"] },
    });
    item && (yield item.update(body));
    return item;
});
exports.updateUserService = updateUserService;
/**
 *
 * @param id
 * @returns
 */
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.User.findByPk(id);
    item && (yield item.destroy());
    return item;
});
exports.deleteUserService = deleteUserService;
