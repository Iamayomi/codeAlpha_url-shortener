import { isWebUri } from "valid-url";

import { blue, yellow, red, magenta, green } from "colors";

import { LogStatus } from "../types";

export const colorStatus = (status: LogStatus): string => {
  switch (status) {
    case "INFO":
      return blue.bold("[INFO]");
    case "WARN":
      return yellow.bold("[WARN]");
    case "ERROR":
      return red.bold("[ERROR]");
    case "SUCCESS":
      return green.bold("[SUCCESS]");
    case "DEBUG":
      return magenta.bold("[DEBUG]");
    default:
      return status;
  }
};

export function validateUrl(url: string): boolean {
  return isWebUri(url) !== null;
}
