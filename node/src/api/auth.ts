import passport from "passport";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import DBInstance from "../db";
import { Account, User } from "../db/models";

const saltRounds = 10;
const secret = process.env.JWT_SECRET || "my_secret";

/**
 * Create auth endpoints
 *
 * * /auth/login req.body must contain username and password parameters
 * * /auth/register req.body must contain firstName, lastName, email and password parameters
 *
 * @param {*} app
 */
const authEndpoints = (app: any) => {
  app.post("/auth/login", (req: any, res: any) =>
    passport.authenticate("local", { session: false }, (error, user) => {
      try {
        if (error || !user) {
          return res.send(400, { error });
        }

        /** This is what ends up in our JWT */
        const payload = {
          username: user.email,
          expires: Date.now() + parseInt(process.env.JWT_EXP_TIME || "360000")
        };

        /** assigns payload to req.user */
        req.login(payload, { session: false }, (error: any) => {
          if (error) {
            return res.send(400, { error });
          }
          /** generate a signed json web token and return it in the response */
          const token = jwt.sign(JSON.stringify(payload), secret);
          res.send(200, { token });
        });
      } catch (error) {
        res.send(400, "Bad request.");
      }
    })(req, res)
  );

  app.post("/auth/register", async (req: any, res: any) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    try {
      const { email, password, firstName, lastName } = req.body;

      const userExists = await DBInstance.getConnection()
        .getRepository(Account)
        .findOne({ email });

      if (!userExists) {
        const user: User = new User();
        user.firstName = firstName;
        user.lastName = lastName;

        const account: Account = new Account();
        account.email = email;
        account.token = await hashPassword(password);

        const saved = await DBInstance.getConnection().manager.save(account);
        if (saved) {
          return res.send(201, { message: "User was registered" });
        }
        return res.send(200, { message: "User not registered" });
      }

      return res.send(401, { message: "User already exists" });
    } catch (error) {
      res.send(400, "Bad request.");
    }
  });

  app.get(
    "/protected",
    passport.authenticate("jwt", { session: false }),
    (req: any, res: any) => {
      const { user } = req;
      if (!user) return res.send(401, { error: "something went wrong" });
      return res.send(200, { user });
    }
  );
};
/**
 * Hash passwords with bcrypt
 *
 * @param {string} password
 */
const hashPassword = async (password: string) =>
  await bcrypt.hash(password, saltRounds);

export default authEndpoints;
