import "mocha";
import { expect } from "chai";
import axios from "axios";
import { Server } from "http";

import { startExpressServer, startRestifyServer } from "../src/server";

describe("Authentication and Register", () => {
  let server: Server;

  describe("Auth at Express Server", () => {
    const port: number = 8080;
    const user = {
      firstName: "Cesar",
      lastName: "Pinto",
      email: "test1@mail.com",
      password: "1234"
    };

    before(async () => {
      const ExpressServer = await startExpressServer();
      server = ExpressServer.listen(port);
    });

    after(() => {
      if (server) server.close();
    });

    it("User should register at Express Server", async () => {
      await register(port, user);
    });

    it("User should login at Express Server", async () => {
      await login(port, user);
    });
  });

  describe("Auth at Restify Server", () => {
    const port: number = 8081;
    const user = {
      firstName: "Cesar",
      lastName: "Pinto",
      email: "test2@mail.com",
      password: "5678"
    };

    before(async () => {
      const RestifyServer = await startRestifyServer();
      server = RestifyServer.listen(port);
    });

    after(() => {
      if (server) server.close();
    });

    it("User should register at Restify Server", async () => {
      await register(port, user);
    });

    it("User should login at Restify Server", async () => {
      await login(port, user);
    });
  });
});

const register = async (
  port: number,
  user: { firstName: string; lastName: string; email: string; password: string }
) => {
  const register = await axios.post(
    `http://localhost:${port}/auth/register`,
    user
  );

  const registered = register.data;
  expect(registered).to.be.contain({ message: "User was registered" });
};

const login = async (
  port: number,
  user: { firstName?: string; lastName?: string; email: any; password: any }
) => {
  const login = await axios.post(`http://localhost:${port}/auth/login`, {
    username: user.email,
    password: user.password
  });

  const loged = login.data;
  expect(loged).to.have.property("token");
};
