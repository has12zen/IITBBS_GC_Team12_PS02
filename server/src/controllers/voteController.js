const Vote = require("../models/voteModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

exports.getAllVotes = factory.getAll(Vote);
exports.getAllVotesByParentId = catchAsync(async (req, res, next) => {
  const votes = await Vote.find({ parentId: req.params.id });
  res.status(200).json({
    status: "success",
    data: {
      votes,
    },
  });
});
exports.createVote = factory.createOne(Vote);
