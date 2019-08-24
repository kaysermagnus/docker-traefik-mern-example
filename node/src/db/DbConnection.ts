import { createConnection, Connection } from "typeorm";
import config from "./configuration";

/**
 * DB Connection Singleton
 * Creates DB connection once
 * @class DbConnection
 */
class DbConnection {
  private static connection: Connection;

  private constructor() {}

  static async startConnection() {
    console.info("DB Configuration:", config);
    this.connection = await createConnection(config);
  }

  static async getConnection(): Promise<Connection> {
    if (!this.connection) {
      console.log("creating connection");
      await this.startConnection();
    }
    return this.connection;
  }
}

export default DbConnection;
