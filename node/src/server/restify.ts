import restify from "restify";
import { mw, jwt } from "../middleware";
import api from "../api";
import db from "../db";

const webServer = async () => {
  console.info("Starting Restify server");
  const app = restify.createServer();
  await db();
  jwt.initialize();
  app.use(mw);

  api(app);

  return app;
};

export default webServer;
