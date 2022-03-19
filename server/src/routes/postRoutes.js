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

Router.route("/")
  .get(postController.getAllPosts)
  .post(postController.createPost);

Router.route("/me").get(postController.getPostsByUser);

Router.route("/:id")
  .get(postController.discussion)
  .delete(postController.deletePost)
  .patch(postController.updatePost);

module.exports = Router;
