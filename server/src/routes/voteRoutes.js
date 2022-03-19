const express = require("express");
const voteController = require("../controllers/voteController");

const Router = express.Router();

Router.route("/:id").post(voteController.createVote);

module.exports = Router;
