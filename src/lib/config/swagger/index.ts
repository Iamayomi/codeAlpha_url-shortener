import fs from "fs";
import swaggerJsDoc, { Options } from "swagger-jsdoc";
import { version } from "../../../../package.json";
import { customEnvs } from "../env";

const description = fs.readFileSync("src/library/docs/description.md").toString();

const swagger: Options = {
  swaggerDefinition: {
    info: {
      version,
      description: description,
      title: ``,
      contact: { name: "Amodu Ayomide", email: "ayomidesherif2019@gmail.com" },
      servers: [{ url: `http://localhost:${customEnvs.port}/api/v1` }],
      license: {
        name: " Apache 2.0",
        url: "http://www.apache.org/licenses/LICENSE-2.0.html",
      },
    },
  },
  apis: ["./src/library/docs/*/*.yml", "./src/library/docs/*.yml"],
};

export const config = swaggerJsDoc(swagger);
