const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voteSchema = new Schema(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    upVote: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Vote = mongoose.model("Vote", voteSchema);
