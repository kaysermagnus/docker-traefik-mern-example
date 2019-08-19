import os from "os";

const route = (app: any) =>
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

export default route;
