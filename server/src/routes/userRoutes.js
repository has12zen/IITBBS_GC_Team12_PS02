const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const Router = express.Router();

Router.use(authController.verifyToken, authController.protect);

Router.route("/").patch(
  userController.putUserInParams,
  userController.updateUser
);

module.exports = Router;
