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
exports.roleChecker = void 0;
const utils_1 = require("../utils");
const roleChecker = (roles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { user } = req;
            const { role } = user;
            const { role: rol } = role;
            if (!roles.some((r) => r === rol))
                return (0, utils_1.handleErrorHttpController)(res, "NOT_AUTHORIZED", 401);
            next();
        }
        catch (error) {
            (0, utils_1.handleErrorHttpController)(res, "", 500, JSON.stringify(error));
        }
    });
};
exports.roleChecker = roleChecker;
