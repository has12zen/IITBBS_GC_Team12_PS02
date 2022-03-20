const express = require("express");
const postController = require("../controllers/postController");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const Router = express.Router();

Router.use(
  authController.verifyToken,
  authController.protect,
  userController.putCreatedBy
);

Router.route("/:id")
  .get(postController.discussion)
  .delete(postController.deletePost);

Router.route("/user/:id").get(postController.getPostsByUser);

Router.get("/", postController.getAllPosts);

Router.use(authController.stopBlacklisted);

Router.post("/", postController.createPost);
Router.patch("/:id", postController.updatePost);

module.exports = Router;
