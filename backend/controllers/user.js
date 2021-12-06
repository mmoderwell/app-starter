const passport = require("passport");
const jwt = require("jsonwebtoken");

const User = require(`${__base}/models/user`);


module.exports = {
  login: (req, res, next) => {
    passport.authenticate("login", { session: false }, (error, user, message) => {
      req.login(user, { session: false }, async (err) => {
        try {
          if (error) throw Error(error);
          if (message) throw Error(message.message);
          if (err) throw Error(err);

          const found = await User.findOne({ email: user.email });
          if (!found) {
            return res.status(200).send({
              auth: false,
              success: false,
              message: "User not found",
              where: "login",
            });
          }
          const token = jwt.sign({ id: found.email }, process.env.JWTSecret);
          res.status(200).send({
            auth: true,
            success: true,
            token,
            message: "User found & logged in",
            user: found,
            where: "login",
          });
        } catch (e) {
          res.status(200).send({
            auth: Boolean(user),
            success: false,
            message: e.message,
            where: "login",
          });
        }
      });
    })(req, res, next);
  },
  join: (req, res, next) => {
    passport.authenticate("register", { session: false }, (error, user, message) => {
      req.login(user, async (err) => {
        try {
          if (message) throw Error(message.message);
          if (error) throw Error(error);
          if (err) throw Error(err);

          const { email } = user;
          const { name } = req.body;

          const found = await User.findOne({ email });
          found.name = name;
          await found.save();

          const token = jwt.sign({ id: email }, process.env.JWTSecret);
          res.status(200).json({
            auth: true,
            success: true,
            token,
            user: found,
            message: "User created",
            where: "join",
          });
        } catch (e) {
          res.status(200).json({
            auth: false,
            success: false,
            message: e.message,
            where: "join",
          });
        }
      });
    })(req, res, next);
  },
  // authenticated route functions
  authenticateUser: (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (error, user, message) => {
      try {
        if (error) throw Error(error);
        if (message) throw Error(message.message);

        res.status(200).json({
          auth: true,
          success: true,
          message: "User found",
          where: "authenticateUser",
          user: {
            verified: user.verified,
            email: user.email,
            name: user.name,
            city: user.city,
            birthday: user.birthday,
            image: user.image,
            isAdmin: user.isAdmin,
          },
        });
      } catch (e) {
        res.status(200).json({
          auth: Boolean(user),
          success: false,
          message: e.message,
          where: "authenticateUser",
        });
      }
    })(req, res, next);
  },
};