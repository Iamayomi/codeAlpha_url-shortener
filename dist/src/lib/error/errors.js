"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = exports.ServerError = exports.BadRequestError = exports.CustomError = void 0;
const http_status_codes_1 = require("http-status-codes");
/**
 * Custom Error that extends the global Error object
 * @constructor {ErrorData} data
 * @constructor {number} statusCode
 * @constructor {string} message
 */
class CustomError extends Error {
    constructor(message, data, statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST, code) {
        super(message);
        this.data = data;
        this.statusCode = statusCode;
        this.code = code;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
        this.statusCode = statusCode;
        this.code = code;
        Object.setPrototypeOf(this, CustomError.prototype);
        this.data = data;
    }
}
exports.CustomError = CustomError;
/**
 * This error means that server could not understand the request due to invalid syntax.
 */
class BadRequestError extends CustomError {
    constructor(message, data, code) {
        super(message, data, http_status_codes_1.StatusCodes.BAD_REQUEST, code);
    }
}
exports.BadRequestError = BadRequestError;
/**
 * The server encountered an unexpected condition that prevented it from fulfilling the request.
 */
class ServerError extends CustomError {
    constructor(message = "Something went wrong, please try again later.", data) {
        super(message, data, http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
exports.ServerError = ServerError;
/**
 * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
 */
class NotFoundError extends CustomError {
    constructor(message = "Resource not found, try again later.", data) {
        super(message, data, http_status_codes_1.StatusCodes.NOT_FOUND);
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=errors.js.map