import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "3306"),
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_NAME || "test",
  entities: [__dirname + "/models/*.entity.js"],
  synchronize: true,
  dropSchema:
    process.env.DB_DROP_SCHEMA === "true" || !!process.env.DB_DROP_SCHEMA,
  debug: process.env.DB_ENABLE_DEBUG === "true" || !!process.env.DB_ENABLE_DEBUG
};

export default config;
