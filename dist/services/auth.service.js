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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserService = exports.registerUserService = void 0;
const models_1 = require("../models");
const utils_1 = require("../utils");
/**
 *
 * @param user
 * @returns
 */
const registerUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, roleId } = user;
    const hashedPassword = yield (0, utils_1.encryptPassword)(password);
    // finds the role
    const role = yield models_1.Role.findByPk(roleId);
    // El rol debe existir en la bd para registrar un usuario
    if (!role)
        return { rest: [], created: false };
    const [item, created] = yield models_1.User.findOrCreate({
        where: { email },
        defaults: Object.assign(Object.assign({}, user), { password: hashedPassword }),
        attributes: ["name", "last_name", "email"],
    });
    // Extrae las propiedades password y phone_number y retorna el resto de las propiedades
    const _a = item.dataValues, { password: pass, phone_number } = _a, rest = __rest(_a, ["password", "phone_number"]);
    return { rest, created };
});
exports.registerUserService = registerUserService;
/**
 *
 * @param body
 * @returns
 */
const loginUserService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { email, password } = body;
    const item = yield models_1.User.findOne({
        where: {
            email,
        },
        attributes: ["password"],
    });
    if (!item)
        return;
    const passwordChecked = yield (0, utils_1.comparePassword)(password, ((_b = item === null || item === void 0 ? void 0 : item.dataValues) === null || _b === void 0 ? void 0 : _b.password) || "");
    if (!passwordChecked)
        return { msg: "EMAIL_OR_PASSWORD_INCORRECT", error: true };
    const token = (0, utils_1.tokenSignedGenerator)(email);
    return { token };
});
exports.loginUserService = loginUserService;
