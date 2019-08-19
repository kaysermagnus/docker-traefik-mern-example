import restify from "restify";
import mw from "../middleware";
import api from "../api";

const webServer = () => {
  console.info("Starting Restify server");
  const app = restify.createServer();

  app.use(mw);

  api(app);

  return app;
};

export default webServer;
