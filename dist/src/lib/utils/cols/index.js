"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorStatus = void 0;
const colors_1 = require("colors");
const colorStatus = (status) => {
    switch (status) {
        case "INFO":
            return `[INFO].${colors_1.blue.bold}`;
        case "WARN":
            return `[WARN].${colors_1.yellow.bold}`;
        case "ERROR":
            return `[ERROR].${colors_1.red.bold}`;
        case "SUCCESS":
            return `[SUCCESS].${colors_1.rainbow.bold}`;
        case "DEBUG":
            return `[DEBUG].${colors_1.magenta.bold}`;
        default:
            return status;
    }
};
exports.colorStatus = colorStatus;
//# sourceMappingURL=index.js.map