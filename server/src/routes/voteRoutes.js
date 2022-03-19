const express = require("express");
const authController = require("../controllers/authController");
const voteController = require("../controllers/voteController");
const userController = require("../controllers/userController");

const Router = express.Router();
Router.use(authController.verifyToken);

Router.route("/:id").post(voteController.createVote);

module.exports = Router;
