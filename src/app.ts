import express from "express";
import morgan from "morgan";
import cors from "cors";
import { corsOptions } from "./config/cors.config";
import { json, urlencoded } from "express";

export function bootstrapApplication() {
  const app = express();

  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(morgan("dev"));
  app.use(cors(corsOptions));

  return app;
}
