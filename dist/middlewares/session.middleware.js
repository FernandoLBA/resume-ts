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
exports.sessionMiddleware = void 0;
const models_1 = require("../models");
const utils_1 = require("../utils");
/**
 *
 * @param req
 * @param res
 * @param next
 */
const sessionMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        if (!authorization)
            return (0, utils_1.handleErrorHttpController)(res, "LOGIN_REQUIRED", 401);
        const token = (authorization === null || authorization === void 0 ? void 0 : authorization.replace("Bearer", "").trim()) || "";
        const { email } = (0, utils_1.tokenSignedChecker)(token);
        if (!email)
            return (0, utils_1.handleErrorHttpController)(res, "AUTHENTICATION_ERROR", 401);
        const item = yield models_1.User.findOne({
            where: { email },
            attributes: {
                exclude: ["password", "createdAt", "updatedAt", "phone_number"],
            },
            include: {
                model: models_1.Role,
                attributes: ["role"],
            },
        });
        if (!item)
            return (0, utils_1.handleErrorHttpController)(res, "UNAUTHORIZED", 403);
        req.user = item === null || item === void 0 ? void 0 : item.dataValues;
        next();
    }
    catch (error) {
        const message = JSON.stringify(error);
        if (message.toLowerCase().includes("expired")) {
            return (0, utils_1.handleErrorHttpController)(res, "EXPIRED_TOKEN", 401);
        }
        else {
            (0, utils_1.handleErrorHttpController)(res, "AUTHORIZATION_ERROR", 500, JSON.stringify(message));
        }
    }
});
exports.sessionMiddleware = sessionMiddleware;
