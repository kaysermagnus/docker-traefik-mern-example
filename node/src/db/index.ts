import { createConnection, Connection, ConnectionOptions } from "typeorm";
import getDbConfig from "./configuration";
import { setUsers } from "./seedTables";
import { v4 as uuid } from "uuid";

class DBInstance {
  static retryConnection = 5;
  static connection: Connection;

  private constructor() {}

  static async initDB(): Promise<Error | null> {
    return new Promise(async (resolve, reject) => {
      try {
        console.info("Start db connection");

        const name = uuid();
        console.log("connection name", name);

        if (this.connection && this.connection.name === name) {
          // Already an active connection
          resolve(null);
        }

        const config = getDbConfig(name);

        console.info("DB Configuration:", config);

        this.connection = await createConnection(config);

        console.info("Db connection:", this.connection.isConnected);
        await this.startSeeding();
        resolve(null);
      } catch (error) {
        console.error("Failed db connection", error);
        if (this.retryConnection > 0) {
          this.retryConnection--;
          // Wait 5 seconds and try again
          setTimeout(() => {
            console.info(
              `Retrying connection to DB - count: ${5 - this.retryConnection}/5`
            );
            return this.initDB();
          }, 5000);
        } else {
          console.info("No more retries");
          reject(error);
        }
      }
    });
  }

  static getConnection() {
    return this.connection;
  }
  /**
   * Start seeding data to DB
   *
   */
  private static startSeeding = async () => {
    await setUsers();
  };
}

export default DBInstance;
