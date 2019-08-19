import express from "express";
import mw from "../middleware";
import api from "../api";

const webServer = () => {
  console.info("Starting Express server");
  const app = express();

  app.use(mw);

  api(app);

  return app;
};

export default webServer;
