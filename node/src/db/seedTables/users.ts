import { User } from "../models";
import DbConnection from "../DbConnection";

export const setUsers = async () => {
  const connection = await DbConnection.getConnection();
  const user = await connection.getRepository(User).save({
    firstName: "César",
    lastName: "Pinto",
    age: 36
  });
  console.info("Saved user", user);
  return;
};
