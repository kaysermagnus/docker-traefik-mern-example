import passport from "passport";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import DBinstance from "../db";
import { Account } from "../db/models";

const secret = process.env.JWT_SECRET || "my_secret";

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
      secretOrKey: secret
    },
    async (jwtPayload: any, done: any) => {
      try {
        const { username, expires } = jwtPayload;
        if (Date.now() > expires) {
          throw new Error("JWT expired");
        }
        const user = await DBinstance.getConnection()
          .getRepository(Account)
          .findOne({
            email: username
          });
          
        if (!user) {
          throw new Error("User doesn't exists");
        }
        return done(null, jwtPayload);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;
