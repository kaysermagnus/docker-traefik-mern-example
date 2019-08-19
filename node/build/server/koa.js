"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_router_1 = __importDefault(require("koa-router"));
var api_1 = __importDefault(require("../api"));
var mw = function (ctx, next) {
    if (ctx.req.headers.isallowed) {
        next();
    }
    ctx.res.end({ error: "Not allowed" });
};
var webServer = function () {
    console.info("Starting Koa server");
    var app = new koa_1.default();
    var router = new koa_router_1.default();
    api_1.default(router);
    app.use(router.routes()).use(router.allowedMethods());
    return app.callback();
};
exports.default = webServer;
//# sourceMappingURL=koa.js.map