import DbConnection from "./DbConnection";
import { setUsers } from "./seedTables";

let retryConnection = 5;

/**
 * Starts DB Instance
 *
 */
const initDB = async () => {
  try {
    console.info("Start db connection");
    await DbConnection.startConnection();
    const conn = await DbConnection.getConnection();
    console.info("Db connection:", conn.isConnected);
    startSeeding();
  } catch (error) {
    console.error("Failed db connection", error);
    if (retryConnection) {
      retryConnection--;
      // Wait 5 seconds
      setTimeout(() => {
        console.info(
          `Retrying connection to DB - count: ${5 - retryConnection}/5`
        );
        initDB();
      }, 5000);
    }
  }
};

const startSeeding = () => {
  setUsers();
};

export default initDB;
