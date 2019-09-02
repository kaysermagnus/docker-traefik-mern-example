import os from "os";
import { getRepository } from "typeorm";
import { User } from "../db/models";
import auth from "./auth";
/**
 * Creates server endpoints
 *
 * @param {*} app
 */
const route = (app: any) => {
  app.get("/", (_req: any, res: any, next: any) => {
    const interfaces = os.networkInterfaces();

    res.send({
      host: {
        hostname: os.hostname(),
        network: interfaces["eth0"]
          ? interfaces["eth0"][0].address
          : interfaces["lo"][0].address
      }
    });
    next();
  });

  app.get("/users", async (_req: any, res: any, next: any) => {
    const users = await getRepository(User).find({ relations: ["accounts"] });
    res.send({ users });
    next();
  });

  auth(app);
};

export default route;
