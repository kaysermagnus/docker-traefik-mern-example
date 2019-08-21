import os from "os";
import passport from "passport";

const route = (app: any) => {
  app.get("/", (_req: any, res: any, next: any) => {
    const interfaces = os.networkInterfaces();

    res.send({
      host: {
        hostname: os.hostname(),
        network: interfaces["eth0"]
          ? interfaces["eth0"][0].address
          : interfaces["en0"][0].address
      }
    });
    next();
  });

  app.post("/login", passport.authenticate("jwt"), (req: any, res: any) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect("/users/" + req.user.username);
  });
};

export default route;
