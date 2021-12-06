// User controllers
const userController = require("./controllers/user");

module.exports = (app) => {
  // User Handling Backend Routes
  app.post("/api/users/login", userController.login);
  app.post("/api/users/join", userController.join);
  // Authenticated User Backend Routes
  app.post("/api/users/authenticated/me", userController.authenticateUser);

}