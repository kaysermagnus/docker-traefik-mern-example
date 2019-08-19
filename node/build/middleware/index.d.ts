/// <reference types="node" />
declare const mw: ((request: import("http").IncomingMessage, response: import("http").ServerResponse, callback: (err: any) => void) => any)[];
export default mw;
