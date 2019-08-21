import express from "express";
import { mw, jwt } from "../middleware";
import api from "../api";
import db from "../db";

const webServer = async () => {
  console.info("Starting Express server");
  const app = express();
  await db();

  jwt.initialize();
  app.use(mw);

  api(app);

  return app;
};

export default webServer;
