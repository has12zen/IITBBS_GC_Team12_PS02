const Post = require("../models/postModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("./../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

exports.getAllPosts = catchAsync(async (req, res) => {
  const features = new APIFeatures(
    Post.find({
      parentId: null,
    }).populate({
      path: "createdBy",
    }),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  // const doc = await features.query.explain();
  const doc = await features.query;

  res.status(200).json({
    status: "success",
    results: doc.length,
    data: {
      doc,
    },
  });
});

exports.getPost = factory.getOne(Post);
exports.createPost = factory.createOne(Post);
exports.updatePost = factory.updateOne(Post);
exports.deletePost = factory.deleteOne(Post);

exports.discussion = catchAsync(async (req, res, next) => {
  const discussion = await Post.findById(req.params.id).populate([
    {
      path: "comments",
      match: { isComment: true },
      populate: {
        path: "createdBy",
      },
    },
    {
      path: "subPosts",
      match: { isComment: false },
      populate: [
        {
          path: "comments",
          match: { isComment: true },
          populate: {
            path: "createdBy",
          },
        },
        {
          path: "createdBy",
          select: "firstname lastname _id img role",
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

  res.send(discussion);
});

exports.getPostsByUser = catchAsync(async (req, res, next) => {
  const posts = await Post.find({ createdBy: req.params.id, parentId: null });

  res.send(posts);
});
