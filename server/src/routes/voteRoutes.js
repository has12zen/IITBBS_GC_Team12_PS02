const express = require("express");
const voteController = require("../controllers/voteController");
const userController = require("../controllers/userController");

const Router = express.Router();
Router.use(userController.verifyToken);

Router.route("/:id").post(voteController.createVote);

module.exports = Router;
