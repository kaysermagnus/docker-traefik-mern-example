import "mocha";
import { expect } from "chai";

import { startExpressServer, startRestifyServer } from "../src/server";
import { Server } from "http";

describe("Server tests", () => {
  it("Express server should a Server instance", async () => {
    const ExpressServer = await startExpressServer();
    const serve = ExpressServer.listen(8080);
    expect(serve).to.be.instanceOf(Server);
    serve.close();
  });

  it("Restify server should a Server instance", async () => {
    const RestifyServer = await startRestifyServer();
    const serve = RestifyServer.listen(8081);
    expect(serve).to.be.instanceOf(Server);
    serve.close();
  });
});
