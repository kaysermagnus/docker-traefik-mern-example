import { createConnection, Connection } from "typeorm";
import config from "./configuration";

class DbConnection {
  conn!: Connection;

  async startConnection() {
    console.info("DB Configuration:", config);
    this.conn = await createConnection(config);
  }
}

export default DbConnection;
