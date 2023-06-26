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
exports.loginUser = exports.registerUser = void 0;
const services_1 = require("../services");
const utils_1 = require("../utils");
/**
 *
 * @param param0
 * @param res
 * @returns
 */
const registerUser = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rest: data, created } = yield (0, services_1.registerUserService)(body);
        if (!data.length && !created)
            return (0, utils_1.handleErrorHttpController)(res, "ROLE_NEEDED", 500);
        if (!created)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_ALREADY_EXISTS", 400);
        (0, utils_1.handleHttpResponses)(res, "Item created", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_CREATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.registerUser = registerUser;
/**
 *
 * @param req
 * @param res
 * @returns
 */
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const data = yield (0, services_1.loginUserService)(body);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "USER_NOT_FOUND", 404);
        if (data.error)
            return (0, utils_1.handleErrorHttpController)(res, data.msg, 403);
        (0, utils_1.handleHttpResponses)(res, "Welcome", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_REGISTERING_USER", 500, JSON.stringify(error));
    }
});
exports.loginUser = loginUser;
