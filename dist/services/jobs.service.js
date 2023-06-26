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
exports.deleteJobService = exports.updateJobService = exports.createJobService = exports.getUsersByJobService = exports.getJobService = exports.getAllJobsService = void 0;
const models_1 = require("../models");
/**
 *
 * @returns
 */
const getAllJobsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Job.findAll();
    return items;
});
exports.getAllJobsService = getAllJobsService;
/**
 *
 * @param id
 * @returns
 */
const getJobService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Job.findByPk(id, {
        include: [{
                model: models_1.Enterprise,
                through: {
                    attributes: []
                }
            }]
    });
    return item;
});
exports.getJobService = getJobService;
/**
 *
 * @param id
 * @returns
 */
const getUsersByJobService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield models_1.Job.findAll({
        where: { id },
        attributes: [],
        include: {
            model: models_1.User,
            attributes: {
                exclude: [
                    "password",
                    "roleId",
                    "phone_number",
                    "createdAt",
                    "updatedAt",
                ],
            },
        },
    });
    return items;
});
exports.getUsersByJobService = getUsersByJobService;
/**
 *
 * @param body
 * @returns
 */
const createJobService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { enterpriseId } = body, rest = __rest(body, ["enterpriseId"]);
    const enterprise = yield models_1.Enterprise.findByPk(enterpriseId);
    const [job, created] = yield models_1.Job.findCreateFind({
        where: { name: rest.name },
        defaults: Object.assign({}, rest),
    });
    job &&
        enterprise &&
        (yield models_1.EnterpriseJob.create({
            jobId: job.dataValues.id,
            enterpriseId: (_a = enterprise === null || enterprise === void 0 ? void 0 : enterprise.dataValues) === null || _a === void 0 ? void 0 : _a.id,
        }));
    return { job, created };
});
exports.createJobService = createJobService;
/**
 *
 * @param id
 * @param body
 * @returns
 */
const updateJobService = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Job.findByPk(id);
    yield (item === null || item === void 0 ? void 0 : item.update(body));
    return item;
});
exports.updateJobService = updateJobService;
/**
 *
 * @param id
 * @returns
 */
const deleteJobService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield models_1.Job.findByPk(id);
    yield (item === null || item === void 0 ? void 0 : item.destroy());
    return item;
});
exports.deleteJobService = deleteJobService;
