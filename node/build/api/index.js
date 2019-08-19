"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = __importDefault(require("os"));
var route = function (app) {
    return app.get("/", function (_req, res, next) {
        var interfaces = os_1.default.networkInterfaces();
        res.send({
            host: {
                hostname: os_1.default.hostname(),
                network: interfaces["eth0"]
                    ? interfaces["eth0"][0].address
                    : interfaces["en0"][0].address
            }
        });
        next();
    });
};
exports.default = route;
//# sourceMappingURL=index.js.map