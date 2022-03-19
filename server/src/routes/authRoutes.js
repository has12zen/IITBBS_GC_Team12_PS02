const express = require("express");
const authController = require("../controllers/authController");

const Router = express.Router();

Router.post("/login", authController.login);

module.exports = Router;