"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadGatewayError = exports.NotFoundError = exports.ServerDown = exports.ServerError = exports.DuplicateRequestError = exports.BadRequestError = exports.AuthenticationError = exports.AuthorizationError = exports.CustomError = void 0;
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
 * The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.
 */
class AuthorizationError extends CustomError {
    constructor(message = "Unauthorized", data) {
        super(message, data, http_status_codes_1.StatusCodes.FORBIDDEN);
    }
}
exports.AuthorizationError = AuthorizationError;
/**
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 */
class AuthenticationError extends CustomError {
    constructor(message = "Unauthenticated", data) {
        super(message, data, http_status_codes_1.StatusCodes.UNAUTHORIZED);
    }
}
exports.AuthenticationError = AuthenticationError;
/**
 * This error means that server could not understand the request due to invalid syntax.
 */
class BadRequestError extends CustomError {
    constructor(message, data, code) {
        super(message, data, http_status_codes_1.StatusCodes.BAD_REQUEST, code);
    }
}
exports.BadRequestError = BadRequestError;
/** This response is sent when a request conflicts with the current state of the server */
class DuplicateRequestError extends CustomError {
    constructor(message = "Duplicate request. Try again.", data, code) {
        super(message, data, http_status_codes_1.StatusCodes.CONFLICT, code);
    }
}
exports.DuplicateRequestError = DuplicateRequestError;
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
 * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
 */
class ServerDown extends CustomError {
    constructor(message = "We are currently undergoing maintenance, please check back later.", data) {
        super(message, data, http_status_codes_1.StatusCodes.SERVICE_UNAVAILABLE);
    }
}
exports.ServerDown = ServerDown;
/**
 * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
 */
class NotFoundError extends CustomError {
    constructor(message = "Resource not found, try again later.", data) {
        super(message, data, http_status_codes_1.StatusCodes.NOT_FOUND);
    }
}
exports.NotFoundError = NotFoundError;
/**
 * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
 */
class BadGatewayError extends CustomError {
    constructor(message = "Something went wrong, try again later.", data, code) {
        super(message, data, http_status_codes_1.StatusCodes.BAD_GATEWAY, code);
    }
}
exports.BadGatewayError = BadGatewayError;
//# sourceMappingURL=errors.js.map