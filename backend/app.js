const express = require("express");
const app = express();
const compression = require("compression");
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");

// set app path for better imports
global.__base = __dirname;

// register the middleware
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ extended: true, limit: "50mb" }));
// init passport
app.use(passport.initialize());
require("dotenv").config();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

require("./passport")(app);
require("./routes")(app);

// get mongo uri based on current working environment
const mongoURI =
  process.env.DB_ENV === "local"
    ? `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/starter`
    : `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/starter?retryWrites=true&w=majority`;

  mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to mongoDB (${process.env.DB_ENV})`))
  .catch((e) => console.error("Connection to mongoDB failed", e));

// error handlers
app.get("*", (req, res, next) => {
  let err = new Error("Page not found.");
  console.log("Error", req.url);
  err.statusCode = 404;
  err.shouldRedirect = true; //new property on err so that our middleware will redirect
  next(err);
});

module.exports = app;