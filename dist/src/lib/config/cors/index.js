"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const env_1 = require("../env");
/** Production origins */
const prodOrigin = ["http://localhost:4173", "http://localhost:5173", "http://localhost:5174"];
/** Development origins */
const devOrigin = ["http://localhost:3000", `http://localhost:${env_1.customEnvs.port}`, "http://localhost:4173", "http://localhost:5173", "http://localhost:5174", "[::1]:3000", "[::1]:4173", "[::1]:5173"];
const allowedOrigins = process.env.NODE_ENV === "production" ? prodOrigin : devOrigin;
/** CORS options */
exports.corsOptions = {
    allowedHeaders: ["Content-Type", "Authorization", "authorization", "Origin", "X-Requested-With", "Accept"],
    credentials: true,
    optionsSuccessStatus: 200,
    exposedHeaders: ["Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};
//# sourceMappingURL=index.js.map