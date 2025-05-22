import { ErrorData } from "../utils/types";
import { error } from ".";

/**
 * Server encountered an unidentified error
 * @param message
 * @param data
 * @statusCode 500 Internal server error
 */
export const serverError = (message?: string, data?: ErrorData) => {
  throw new error.ServerError(message, data);
};

/**
 * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
 * @param message
 * @param data
 * @statusCode 404 Not found
 */
export const notfoundError = (message?: string, data?: ErrorData) => {
  throw new error.NotFoundError(message, data);
};

/**
 * This error means that server could not understand the request due to invalid syntax
 * @param message
 * @param data
 * @statusCode 400 Bad request
 */
export const BadRequestError = (message?: string, data?: ErrorData) => {
  throw new error.BadRequestError(message, data);
};
