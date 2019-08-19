import { startExpressServer, startRestifyServer } from "./server";

switch (process.env.SERVER_TYPE) {
  case "express":
    const expressServer = startExpressServer().listen(8080);
    expressServer.on("listening", () =>
      console.log("listening on:", expressServer.address())
    );
    break;
  case "restify":
    const restifyServer = startRestifyServer().listen(8080);
    restifyServer.on("listening", () =>
      console.log("listening on:", restifyServer.address())
    );
    break;
  default:
    console.error("SERVER_TYPE environment variable not found");
    process.exit(0);
    break;
}
