import DbConnection from "./connection";

const initDB = async () => {
  try {
    console.info("Start db connection");
    const db = new DbConnection();
    await db.startConnection();
    console.info("Db connection:", db.conn.isConnected);
  } catch (error) {
    console.error("Failed db connection", error);
  }
};

export default initDB;
