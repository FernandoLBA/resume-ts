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
exports.deleteCertificate = exports.updateCertificate = exports.createCertificate = exports.getUsersByCertificate = exports.getCertificate = exports.getAllCertifications = void 0;
const services_1 = require("../services");
const utils_1 = require("../utils");
/**
 *
 * @param req
 * @param res
 */
const getAllCertifications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.getAllCertificationsService)();
        (0, utils_1.handleHttpResponses)(res, "Items listed", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_GETTING_ITEMS", 500);
    }
});
exports.getAllCertifications = getAllCertifications;
/**
 *
 * @param param0
 * @param res
 * @returns
 */
const getCertificate = ({ params: { id } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.getCertificateService)(id);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Item listed", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_GETTING_ITEM", 500, JSON.stringify(error));
    }
});
exports.getCertificate = getCertificate;
/**
 * Obtiene los usuarios por el certificateId
 * @param param0
 * @param res
 * @returns
 */
const getUsersByCertificate = ({ params: { id } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.getUsersByCertificateService)(id);
        if (!data.length)
            return (0, utils_1.handleErrorHttpController)(res, "ITEMS_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Users listed by certificate", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_GET_MIXING_ITEMS", 500, JSON.stringify(error));
    }
});
exports.getUsersByCertificate = getUsersByCertificate;
/**
 *
 * @param param0
 * @param res
 * @returns
 */
const createCertificate = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { item: data, created } = yield (0, services_1.createCertificateService)(body);
        if (!created)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_ALREADY_EXISTS", 400);
        (0, utils_1.handleHttpResponses)(res, "Item created", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_CREATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.createCertificate = createCertificate;
/**
 *
 * @param req
 * @param res
 */
const updateCertificate = ({ params: { id }, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.updateCertificateService)(id, body);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Item updated", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_UPDATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.updateCertificate = updateCertificate;
/**
 *
 * @param req
 * @param res
 */
const deleteCertificate = ({ params: { id } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, services_1.deleteCertificateService)(id);
        if (!data)
            return (0, utils_1.handleErrorHttpController)(res, "ITEM_NOT_FOUND", 404);
        (0, utils_1.handleHttpResponses)(res, "Item deleted", data);
    }
    catch (error) {
        (0, utils_1.handleErrorHttpController)(res, "ERROR_UPDATING_ITEM", 500, JSON.stringify(error));
    }
});
exports.deleteCertificate = deleteCertificate;
