"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const cols_1 = require("lib/utils/cols");
const getTimestamp = () => {
    return new Date().toISOString();
};
class Logger {
    static log(status, message) {
        const timestamp = getTimestamp().gray;
        const levelTag = (0, cols_1.colorStatus)(status);
        console.log(`${timestamp} ${levelTag} ${message}`);
    }
    static info(message) {
        this.log("INFO", message);
    }
    static warn(message) {
        this.log("WARN", message);
    }
    static error(message) {
        this.log("ERROR", message);
    }
    static success(message) {
        this.log("SUCCESS", message);
    }
    static debug(message) {
        if (process.env.NODE_ENV === "development") {
            this.log("DEBUG", message);
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=index.js.map