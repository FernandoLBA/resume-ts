"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrorHttpController = void 0;
/**
 *
 * @param res
 * @param error
 * @param statusCode
 * @param rawError
 */
const handleErrorHttpController = (res, error, statusCode = 500, rawError) => {
    console.log({ Error: JSON.stringify(rawError) });
    res.status(statusCode);
    return res.send({
        msg: error,
        data: [],
    });
};
exports.handleErrorHttpController = handleErrorHttpController;
