"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = __importDefault(require("os"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var mw = function (req, res, next) {
    console.log(req.headers);
    if (req.headers.isallowed) {
        return next();
    }
    return res.json({ error: "Not allowed" });
};
app.use(mw);
app.get("/", function (_req, res) {
    return res.json({
        host: {
            hostname: os_1.default.hostname(),
            network: os_1.default.networkInterfaces()["eth0"][0].address
        }
    });
});
var server = app.listen(8080);
server.on("listening", function () {
    return console.log("Server started at:", server.address());
});
//# sourceMappingURL=index.js.map