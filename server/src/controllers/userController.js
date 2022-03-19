const dotenv = require("dotenv");
dotenv.config();
const { OAuth2Client } = require("google-auth-library");

const User = require("../models/userModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const client = new OAuth2Client(process.env.CLIENT_ID);

exports.verifyToken = catchAsync(async (req, res, next) => {
  console.log(req.body);

  const { token } = req.body;

  console.log({ token });

  if (!token) return next(new AppError("User not logged in.", 403));

  client
    .verifyIdToken({ idToken: token, audience: process.env.CLIENT_ID })
    .then((res) => {
      req.user = res.payload;

      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

exports.protect = catchAsync(async (req, res, next) => {
  console.log(req.user);
});

exports.getMe = catchAsync(async (req, res, next) => {
  req.params.id = req.user.id;
  next();
});

exports.getUser = factory.getOne(User);
