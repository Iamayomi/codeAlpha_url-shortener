import express, { Express } from "express";
import cors from "cors";
import "dotenv/config";

import helmet from "helmet";
import morgan from "morgan";
import { connect } from "mongoose";

import router from "./routes";
import { errorHandler, rateLimiter } from "./middleware";
import { corsOptions, customEnvs, Logger, swagger } from "./lib";

const app = express();
const PORT = customEnvs.port || 5000;

// Middleware
app.use(cors(corsOptions));

app.use(helmet()); // Security headers
app.use(morgan("combined")); // Request logging
app.use(express.json());
app.use(rateLimiter);

app.use("/api/v1", router);

// Handle synchronous errors
process.on("uncaughtException", (err) => {
  // Log error only in development environment
  customEnvs.env === "development" && Logger.error(`${["API UNCAUGHTEXCEPTION ERROR: "]} ${err.message} ${"\n\nERROR STACK: "} ${err.stack}`);
});

// Asynchronous error handler
app.use(errorHandler);

/** Start Server only after successful connection to database */
const startServer = async () => {
  try {
    await connect(customEnvs.mongo_url!);

    Logger.success("Connection to database established successfully");

    app.listen(PORT, () => Logger.success(`Server is listening on port: ${PORT}`));
  } catch (error) {
    Logger.error("Something went wrong, please try again :::");
  }
};

startServer();
