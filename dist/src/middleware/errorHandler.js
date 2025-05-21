"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const lib_1 = require("../lib");
/**
 * This is a custom middleware that handles all errors thrown within or outside an asynchronous function call.
 *
 * Note that throughout the app, there was no need to wrap most asynchronous function calls within a try-catch block due to the presence of 'express-async-error' module declared at the top of the app entry -- This module is equivalent to wrapping the entire app within a try-catch block as it automatically throws any error arising from all asynchronous actions which then gets caught up and handled by this errorHandler.
 *
 * @returns Server Response */
const errorHandler = (err, req, res, next) => {
    // Log error only in development environment
    process.env.NODE_ENV === "development" && console.log("[API ERROR]: ", err.message, "\n\nERROR STACK: ", err.stack, "\n\nTIMESTAMP: ", new Date().toLocaleTimeString());
    if (err instanceof lib_1.error.CustomError) {
        return res.status(err.statusCode).json({ success: false, message: err.message, data: err.data });
    }
    if (err.name === "ValidationError")
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ success: false, message: err.message });
    if (err instanceof lib_1.error.CustomError && (err === null || err === void 0 ? void 0 : err.code) === "EAUTH")
        return res.status(http_status_codes_1.StatusCodes.BAD_GATEWAY).json({
            success: false,
            message: err.message,
            data: err.data,
        });
    return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: Object.keys(err).length ? err : err.message || "Something unexpected happened, try again.",
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map