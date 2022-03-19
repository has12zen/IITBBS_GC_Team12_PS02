const express = require("express");
const userController = require("../controllers/userController");

const Router = express.Router();

Router.use(userController.verifyToken);

Router.post("/me", userController.getMe);

module.exports = Router;
