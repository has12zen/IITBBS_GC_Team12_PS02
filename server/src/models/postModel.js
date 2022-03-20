const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      maxlength: 100,
      minlength: 10,
    },
    body: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    isComment: Boolean,
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    discussionId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    isBlacklisted: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

postSchema.virtual("votes", {
  ref: "Vote",
  localField: "_id",
  foreignField: "parentId",
});

postSchema.virtual("comments", {
  ref: "Post",
  localField: "_id",
  foreignField: "parentId",
});

postSchema.virtual("subPosts", {
  ref: "Post",
  localField: "_id",
  foreignField: "parentId",
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
