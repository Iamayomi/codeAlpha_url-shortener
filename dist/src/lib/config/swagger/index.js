"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const package_json_1 = require("../../../../package.json");
const env_1 = require("../env");
// const description = fs.readFileSync("src/library/docs/description.md").toString();
const swagger = {
    swaggerDefinition: {
        info: {
            version: package_json_1.version,
            // description: description,
            title: ``,
            contact: { name: "Amodu Ayomide", email: "ayomidesherif2019@gmail.com" },
            servers: [{ url: `http://localhost:${env_1.customEnvs.port}/api/v1` }],
            license: {
                name: " Apache 2.0",
                url: "http://www.apache.org/licenses/LICENSE-2.0.html",
            },
        },
    },
    apis: ["./src/library/docs/*/*.yml", "./src/library/docs/*.yml"],
};
exports.config = (0, swagger_jsdoc_1.default)(swagger);
//# sourceMappingURL=index.js.map