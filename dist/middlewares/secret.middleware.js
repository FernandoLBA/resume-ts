"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secretMiddleware = void 0;
const utils_1 = require("../utils");
const SECRET_KEY = process.env.SECRET_KEY;
const secretMiddleware = ({ headers: { secretkey } }, res, next) => {
    try {
        if (!secretkey) {
            (0, utils_1.handleErrorHttpController)(res, "AUTHORIZATION_HEADER_MISSING", 401);
            return;
        }
        if (secretkey !== SECRET_KEY) {
            (0, utils_1.handleErrorHttpController)(res, "NOT_AUTHORIZED_FRONTEND", 401);
            return;
        }
        next();
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "NOT_AUTHORIZED", 403);
    }
};
exports.secretMiddleware = secretMiddleware;
