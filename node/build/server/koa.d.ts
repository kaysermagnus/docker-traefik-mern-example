/// <reference types="node" />
declare const webServer: () => (req: import("http").IncomingMessage | import("http2").Http2ServerRequest, res: import("http").ServerResponse | import("http2").Http2ServerResponse) => void;
export default webServer;
