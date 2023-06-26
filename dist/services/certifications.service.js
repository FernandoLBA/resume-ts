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
exports.deleteCertificateService = exports.updateCertificateService = exports.createCertificateService = exports.getUsersByCertificateService = exports.getCertificateService = exports.getAllCertificationsService = void 0;
const models_1 = require("../models");
/**
 *
 * @returns
 */
const getAllCertificationsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Certification.findAll();
    return items;
});
exports.getAllCertificationsService = getAllCertificationsService;
/**
 *
 * @param id
 * @returns
 */
const getCertificateService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Certification.findByPk(id);
    return item;
});
exports.getCertificateService = getCertificateService;
/**
 *
 * @param userId
 * @returns
 */
const getUsersByCertificateService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Certification.findAll({
        where: { id },
        attributes: [],
        include: {
            model: models_1.User,
            attributes: {
                exclude: ["password", "roleId", "phone_number", "createdAt", "updatedAt"]
            }
        }
    });
    return items;
});
exports.getUsersByCertificateService = getUsersByCertificateService;
/**
 *
 * @param body
 * @returns
 */
const createCertificateService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = body;
    const [item, created] = yield models_1.Certification.findOrCreate({
        where: { name },
        defaults: Object.assign({}, body),
    });
    return { item, created };
});
exports.createCertificateService = createCertificateService;
/**
 *
 * @param id
 * @param body
 * @returns
 */
const updateCertificateService = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Certification.findByPk(id);
    item && (yield item.update(body));
    return item;
});
exports.updateCertificateService = updateCertificateService;
/**
 *
 * @param id
 * @returns
 */
const deleteCertificateService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Certification.findByPk(id);
    item && (yield item.destroy());
    return item;
});
exports.deleteCertificateService = deleteCertificateService;
