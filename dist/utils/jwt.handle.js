"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenSignedChecker = exports.tokenSignedGenerator = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
/**
 * Firma el token
 * @param email
 * @returns
 */
const tokenSignedGenerator = (email) => {
    const accessToken = (0, jsonwebtoken_1.sign)({ email }, JWT_SECRET, { expiresIn: "2h" });
    return accessToken;
};
exports.tokenSignedGenerator = tokenSignedGenerator;
/**
 * Verifica que el token esté firmado
 * @param token
 * @returns
 */
const tokenSignedChecker = (token) => {
    return (0, jsonwebtoken_1.verify)(token, JWT_SECRET);
};
exports.tokenSignedChecker = tokenSignedChecker;
