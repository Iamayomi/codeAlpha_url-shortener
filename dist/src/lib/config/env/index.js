"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customEnvs = void 0;
exports.customEnvs = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongo_Url: process.env.MONGO_URL,
    baseUrlProd: process.env.BASEURLPROD,
    baseUrlDev: `http://localhost:${process.env.PORT}`,
    baseUrl: (process.env.NODE_ENV === "development" ? `http://localhost:${process.env.PORT}` : process.env.BASEURLPROD),
};
//# sourceMappingURL=index.js.map