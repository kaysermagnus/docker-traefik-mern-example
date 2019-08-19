"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var response_time_1 = __importDefault(require("response-time"));
var request = function (req, res, next) {
    if (req.headers.isallowed) {
        return next();
    }
    res.send(400, { error: "Not allowed" });
};
var timer = response_time_1.default();
var mw = [request, timer];
exports.default = mw;
//# sourceMappingURL=index.js.map