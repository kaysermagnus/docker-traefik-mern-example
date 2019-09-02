import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import DBInstance from "../db";
import { Account } from "../db/models";

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
    async (username, password, done) => {
      try {
        const user = await DBInstance.getConnection()
          .getRepository(Account)
          .findOne({
            email: username
          });

        let passwordsMatch = false;

        if (user) {
          passwordsMatch = await bcrypt.compare(password, user.token);
        }

        if (passwordsMatch) {
          return done(null, user);
        } else {
          return done("Incorrect Username / Password");
        }
      } catch (error) {
        done(error);
      }
    }
  )
);

export default passport;
