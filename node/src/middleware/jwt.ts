import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
  issuer: "accounts.examplesoft.com",
  audience: "yoursite.net"
};

passport.use(
  new JwtStrategy(opts, function(jwt_payload, done) {
    console.log("jwt_payload", jwt_payload);
    return done(null);
    /* User.findOne({ id: jwt_payload.sub }, function(err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    }); */
  })
);

export default passport;
