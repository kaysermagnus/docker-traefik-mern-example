import { mw, jwt } from "../middleware";
import api from "../api";
import db from "../db";

const serverConfiguration = async (app: any) => {
  if (process.env.SERVER_USE_CONFIG) {
    await db();
    jwt.initialize();
    app.use(mw);
    api(app);
  }
};

export default serverConfiguration;
