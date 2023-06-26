"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttpResponses = void 0;
/**
 *
 * @param res
 * @param msg
 * @param data
 * @param statusCode
 */
const handleHttpResponses = (res, msg, data, statusCode = 200) => {
    res.status(statusCode);
    return res.send({
        msg,
        data,
    });
};
exports.handleHttpResponses = handleHttpResponses;
