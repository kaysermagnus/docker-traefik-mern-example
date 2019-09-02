import express from "express";
import serverConfig from "./config";
/**
 * Creates Express Server
 *
 * @returns
 */
const webServer = async () => {
  console.info("Starting Express server");
  const app = express();
  await serverConfig(app);
  return app;
};

export default webServer;
