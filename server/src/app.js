const express = require("express");
const app = express();

const userController = require("./controllers/userController");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const voteRouter = require("./routes/voteRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const morganMiddleware = require("./utils/requestLogger");

app.use(express.json({ limit: "10kb" }));
app.use(morganMiddleware);

app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/votes", voteRouter);

app.all("*", async (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
