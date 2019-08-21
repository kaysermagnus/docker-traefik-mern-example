"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var example_1 = __importDefault(require("./example"));
var responseTime_1 = __importDefault(require("./responseTime"));
var jwt_1 = __importDefault(require("./jwt"));
exports.jwt = jwt_1.default;
var mw = [example_1.default, responseTime_1.default];
exports.mw = mw;
//# sourceMappingURL=index.js.map