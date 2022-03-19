const Post = require("../models/postModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");

exports.getAllPosts = factory.getAll(Post);
exports.getPost = factory.getOne(Post);
exports.createPost = factory.createOne(Post);
exports.updatePost = factory.updateOne(Post);
exports.deletePost = factory.deleteOne(Post);

exports.discussion = catchAsync(async (req, res, next) => {
  const discussion = await Post.findById(req.params.id).populate([
    {
      path: "comments",
      match: { isComment: true },
    },
    {
      path: "subPosts",
      match: { isComment: false },
      populate: [
        {
          path: "comments",
          match: { isComment: true },
        },
        {
          path: "createdBy",
          select: "firstname lastame _id img role",
        },
        {
          path: "votes",
          select: "upvote",
        },
      ],
    },
    {
      path: "votes",
      select: "upvote",
    },
    {
      path: "createdBy",
      select: "firstname lastame _id img role",
    },
  ]);
  res.status(200).json({
    status: "success",
    data: {
      discussion,
    },
  });
});

exports.getPostsByUser = catchAsync(async (req, res, next) => {
  console.log("check");

  const posts = await Post.find({ createdBy: req.user._id, parentId: null });
  console.log(posts);
  res.status(200).json({
    status: "success",
    data: {
      posts,
    },
  });
});
