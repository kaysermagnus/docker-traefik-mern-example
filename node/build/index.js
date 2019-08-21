"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
switch (process.env.SERVER_TYPE) {
    case "express":
        server_1.startExpressServer().then(function (expressServer) {
            var serve = expressServer.listen(8080);
            expressServer.on("listening", function () {
                return console.log("listening on:", serve.address());
            });
        });
        break;
    case "restify":
        server_1.startRestifyServer().then(function (restifyServer) {
            restifyServer.listen(8080);
            restifyServer.on("listening", function () {
                return console.log("listening on:", restifyServer.address());
            });
        });
        break;
    default:
        console.error("SERVER_TYPE environment variable not found");
        process.exit(0);
        break;
}
//# sourceMappingURL=index.js.map