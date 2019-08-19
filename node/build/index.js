"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
switch (process.env.SERVER_TYPE) {
    case "express":
        var expressServer_1 = server_1.startExpressServer().listen(8080);
        expressServer_1.on("listening", function () {
            return console.log("listening on:", expressServer_1.address());
        });
        break;
    case "restify":
        var restifyServer_1 = server_1.startRestifyServer().listen(8080);
        restifyServer_1.on("listening", function () {
            return console.log("listening on:", restifyServer_1.address());
        });
        break;
    default:
        console.error("SERVER_TYPE environment variable not found");
        process.exit(0);
        break;
}
//# sourceMappingURL=index.js.map