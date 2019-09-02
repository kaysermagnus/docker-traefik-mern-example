import { mw } from "../middleware";
import auth from "../auth";
import api from "../api";
import DBInstance from "../db";
import security from "./security";
/**
 * Add configurations to server
 *
 * @param {*} app
 */
const serverConfiguration = async (app: any) => {
  if (process.env.SERVER_USE_CONFIG) {
    console.info("Starting server configuration");
    security(app);
    await DBInstance.initDB();
    auth();
    app.use(mw);
    api(app);
  }
};

export default serverConfiguration;
