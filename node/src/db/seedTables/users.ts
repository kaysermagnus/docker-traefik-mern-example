import DBInstance from "../index";
import { User, Account } from "../models";

export const setUsers = async () => {
  const account = new Account();
  account.email = "cesar.pinto@gmail.com";
  account.token =
    "$2a$10$9OuzqgrVbssNQKlJOG.4Z.TqbMFfYbduDDHQKHTQszsKj5sxHhvgq";

  const user = new User();
  user.firstName = "César";
  user.lastName = "Pinto";
  user.accounts = [account];

  const savedUser = await DBInstance.getConnection().manager.save(user);
  console.info("Saved user", savedUser);
  return;
};
