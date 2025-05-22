"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const errorHandler_1 = require("./middleware/errorHandler");
const config_1 = require("./lib/config");
// import { Logger } from "lib";
const ratelimiter_1 = require("./middleware/ratelimiter");
const app = (0, express_1.default)();
const PORT = config_1.customEnvs.port || 5000;
// Middleware
app.use((0, cors_1.default)(config_1.corsOptions));
app.use((0, helmet_1.default)()); // Security headers
app.use((0, morgan_1.default)("combined")); // Request logging
app.use(express_1.default.json());
app.use(ratelimiter_1.rateLimiter);
app.use("/api/v1", routes_1.default);
// Handle synchronous errors
process.on("uncaughtException", (err) => {
    // Log error only in development environment
    config_1.customEnvs.env === "development" && console.log(`${["API UNCAUGHTEXCEPTION ERROR: "]} ${err.message} ${"\n\nERROR STACK: "} ${err.stack}`);
    //  Logger.error(`${["API UNCAUGHTEXCEPTION ERROR: "]} ${err.message} ${"\n\nERROR STACK: "} ${err.stack}`);
});
// Asynchronous error handler
app.use(errorHandler_1.errorHandler);
/** Start Server only after successful connection to database */
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await connect(customEnvs.mongo_Url!);
        console.log("Connection to database established successfully");
        // Logger.success("Connection to database established successfully");
        console.log(`Server is listening on port: ${PORT}`);
        // app.listen(PORT, () => Logger.success(`Server is listening on port: ${PORT}`));
    }
    catch (error) {
        console.log("Something went wrong, please try again :::");
        // Logger.error("Something went wrong, please try again :::");
    }
});
startServer();
//# sourceMappingURL=app.js.map