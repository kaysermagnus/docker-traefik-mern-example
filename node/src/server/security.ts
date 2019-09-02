import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import compression from "compression";
/**
 * Creates security layer
 *
 * @param {*} app
 */
const security = (app: any) => {
  app.use(helmet());
  app.use(helmet.hsts({ maxAge: 5184000 }));
  app.use(helmet.frameguard({ action: "sameorigin" }));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(compression());
};

export default security;
