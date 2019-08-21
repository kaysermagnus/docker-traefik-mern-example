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
  debug: true/* ,
  dropSchema: true */
};

export default config;
