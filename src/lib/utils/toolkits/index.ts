import { isWebUri } from "valid-url";

import { blue, yellow, red, rainbow, magenta } from "colors";

import { LogStatus } from "../types";

export const colorStatus = (status: LogStatus): string => {
  switch (status) {
    case "INFO":
      return `[INFO].${blue.bold}`;
    case "WARN":
      return `[WARN].${yellow.bold}`;
    case "ERROR":
      return `[ERROR].${red.bold}`;
    case "SUCCESS":
      return `[SUCCESS].${rainbow.bold}`;
    case "DEBUG":
      return `[DEBUG].${magenta.bold}`;
    default:
      return status;
  }
};

export function validateUrl(url: string): boolean {
  return isWebUri(url) !== null;
}
