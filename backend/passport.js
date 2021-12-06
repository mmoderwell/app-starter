// Authentication Packages
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
// Encryption Package
const bcrypt = require("bcrypt");
// Database model imports
const User = require(`${__base}/models/user`);

const saltRounds = 10;

module.exports = (app) => {
  passport.use(
    "login",
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });
          if (!user) return done(null, false);
          const valid = await bcrypt.compare(password, user.password);
          if (valid !== true) return done(null, false, { message: "Password incorrect" });
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );
  passport.use(
    "register",
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });
          if (user)
            return done(null, false, { message: "An account with that email already exists" });
          const hashed = await bcrypt.hash(password, saltRounds);
          const newUser = new User({ email, password: hashed });
          await newUser.save();
          return done(null, newUser, null);
        } catch (error) {
          console.log(error);
          return done(error, null, null);
        }
      }
    )
  );
  passport.use(
    "jwt",
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWTSecret,
      },
      async (payload, done) => {
        try {
          const user = await User.findOne({ email: payload.id });
          if (!user) throw Error("User not authenticated");
          done(null, user, null);
        } catch (e) {
          done(e, null, null);
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};