import restify from "restify";
import serverConfig from "./config";

const webServer = async () => {
  console.info("Starting Restify server");
  const app = restify.createServer();
  await serverConfig(app);
  return app;
};

export default webServer;
