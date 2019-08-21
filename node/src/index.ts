import { startExpressServer, startRestifyServer } from "./server";

switch (process.env.SERVER_TYPE) {
  case "express":
    startExpressServer().then(expressServer => {
      const serve = expressServer.listen(8080);
      expressServer.on("listening", () =>
        console.log("listening on:", serve.address())
      );
    });
    break;
  case "restify":
    startRestifyServer().then(restifyServer => {
      restifyServer.listen(8080);
      restifyServer.on("listening", () =>
        console.log("listening on:", restifyServer.address())
      );
    });
    break;
  default:
    console.error("SERVER_TYPE environment variable not found");
    process.exit(0);
    break;
}
