import { ConnectionOptions } from "typeorm";

const getConfig = (name: string) => {
  const config: ConnectionOptions = {
    name,
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_NAME || "test",
    entities: [
      __dirname + "/models/*.entity.js",
      __dirname + "/models/*.entity.ts"
    ],
    synchronize: true,
    dropSchema:
      process.env.DB_DROP_SCHEMA === "true" || !!process.env.DB_DROP_SCHEMA,
    debug:
      process.env.DB_ENABLE_DEBUG === "true" || !!process.env.DB_ENABLE_DEBUG
  };
  return config;
};

export default getConfig;
