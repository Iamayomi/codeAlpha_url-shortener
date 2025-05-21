"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badGatewayError = exports.duplicateRequestError = exports.BadRequestError = exports.notfoundError = exports.maintenanceError = exports.serverError = exports.unauthorizationError = exports.unauthenticatedError = void 0;
const _1 = require(".");
/**
 * This status code indicates that the request has not been applied because it lacks valid authentication  credentials for the target resource. This is typically used when the request requires user authentication, and the user has not provided proper authentication credentials (such as a token).
 * @param message
 * @param data
 * @statusCode 401 Unauthorized
 */
const unauthenticatedError = (message, data) => {
    throw new _1.error.AuthenticationError(message, data);
};
exports.unauthenticatedError = unauthenticatedError;
/** Informs the client that authentication was successful but access to the resource is not allowed due to insufficient permissions or an invalid token.
 * @param message
 * @param data
 * @statusCode 403 Forbidden
 */
const unauthorizationError = (message, data) => {
    throw new _1.error.AuthorizationError(message, data);
};
exports.unauthorizationError = unauthorizationError;
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
 * Server is under maintenance
 * @param message
 * @param data
 * @statusCode 503 Service not available
 */
const maintenanceError = (message, data) => {
    throw new _1.error.ServerDown(message, data);
};
exports.maintenanceError = maintenanceError;
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
/**
 * This response is sent when a request conflicts with the current state of the server
 * @param message
 * @param data
 * @statusCode 409 Conflict
 */
const duplicateRequestError = (message, data) => {
    throw new _1.error.DuplicateRequestError(message, data);
};
exports.duplicateRequestError = duplicateRequestError;
/**
 * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
 * @param message
 * @param data
 * @statusCode 502 Bad gateway
 */
const badGatewayError = (message, data) => {
    throw new _1.error.BadGatewayError(message, data);
};
exports.badGatewayError = badGatewayError;
//# sourceMappingURL=utils.js.map