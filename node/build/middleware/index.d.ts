/// <reference types="node" />
import jwt from "./jwt";
declare const mw: ((request: import("http").IncomingMessage, response: import("http").ServerResponse, callback: (err: any) => void) => any)[];
export { mw, jwt };
