const express = require("express");
const postController = require("../controllers/postController");

const Router = express.Router();

Router.get("/", postController.getAllPosts);
Router.route("/:id")
  .get("/:id", postController.getPost)
  .post("/:id", postController.createPost)
  .delete("/:id", postController.deletePost)
  .patch("/:id", postController.updatePost);

module.exports = Router;
