"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = exports.notfoundError = exports.serverError = void 0;
const _1 = require(".");
/**
 * Server encountered an unidentified error
 * @param message
 * @param data
 * @statusCode 500 Internal server error
 */
const serverError = (message, data) => {
    throw new _1.error.ServerError(message, data);
};
exports.serverError = serverError;
/**
 * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
 * @param message
 * @param data
 * @statusCode 404 Not found
 */
const notfoundError = (message, data) => {
    throw new _1.error.NotFoundError(message, data);
};
exports.notfoundError = notfoundError;
/**
 * This error means that server could not understand the request due to invalid syntax
 * @param message
 * @param data
 * @statusCode 400 Bad request
 */
const BadRequestError = (message, data) => {
    throw new _1.error.BadRequestError(message, data);
};
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=utils.js.map