const express = require("express");
const postController = require("../controllers/postController");

const Router = express.Router();

Router.route("/")
  .get(postController.getAllPosts)
  .post(postController.createPost);
Router.route("/:id")
  .get(postController.discussion)
  .delete(postController.deletePost)
  .patch(postController.updatePost);

module.exports = Router;
