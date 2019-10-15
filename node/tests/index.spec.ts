require("source-map-support").install();
import "mocha";
import { expect } from "chai";

import { startExpressServer, startRestifyServer } from "../src/server";
import { Server } from "http";

describe("Server tests", () => {
  let serve: Server;

  afterEach(() => {
    if (serve) serve.close();
  });

  it("Express server should be a Server instance", async () => {
    const ExpressServer = await startExpressServer();
    serve = ExpressServer.listen(8080);
    expect(serve).to.be.instanceOf(Server);
  });

  it("Restify server should be a Server instance", async () => {
    const RestifyServer = await startRestifyServer();
    serve = RestifyServer.listen(8081);
    expect(serve).to.be.instanceOf(Server);
  });
});
