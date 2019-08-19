"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var restify_1 = __importDefault(require("restify"));
var middleware_1 = __importDefault(require("../middleware"));
var api_1 = __importDefault(require("../api"));
var webServer = function () {
    console.info("Starting Restify server");
    var app = restify_1.default.createServer();
    app.use(middleware_1.default);
    api_1.default(app);
    return app;
};
exports.default = webServer;
//# sourceMappingURL=restify.js.map