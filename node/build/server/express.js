"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var middleware_1 = __importDefault(require("../middleware"));
var api_1 = __importDefault(require("../api"));
var webServer = function () {
    console.info("Starting Express server");
    var app = express_1.default();
    app.use(middleware_1.default);
    api_1.default(app);
    return app;
};
exports.default = webServer;
//# sourceMappingURL=express.js.map