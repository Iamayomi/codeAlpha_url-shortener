import { StatusCodes as status } from "http-status-codes";

import { ErrorData } from "../utils/types";

/**
 * Custom Error that extends the global Error object
 * @constructor {ErrorData} data
 * @constructor {number} statusCode
 * @constructor {string} message
 */
export class CustomError extends Error {
  constructor(message?: string, public data?: ErrorData, public statusCode: number = status.BAD_REQUEST, public code?: string | number) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.statusCode = statusCode;
    this.code = code;

    Object.setPrototypeOf(this, CustomError.prototype);
    this.data = data;
  }
}

/**
 * This error means that server could not understand the request due to invalid syntax.
 */
export class BadRequestError extends CustomError {
  constructor(message?: string, data?: ErrorData, code?: number | string) {
    super(message, data, status.BAD_REQUEST, code);
  }
}

/**
 * The server encountered an unexpected condition that prevented it from fulfilling the request.
 */
export class ServerError extends CustomError {
  constructor(message: string = "Something went wrong, please try again later.", data?: ErrorData) {
    super(message, data, status.INTERNAL_SERVER_ERROR);
  }
}

/**
 * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
 */
export class NotFoundError extends CustomError {
  constructor(message: string = "Resource not found, try again later.", data?: ErrorData) {
    super(message, data, status.NOT_FOUND);
  }
}
