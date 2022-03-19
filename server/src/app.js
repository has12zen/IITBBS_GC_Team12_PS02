const express = require("express");
const app = express();
const morgan = require("morgan");

const userController = require("./controllers/userController");
const userRoutes = require("./routes/userRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

app.use(morgan("dev"));
app.use(express.json({ limit: "10kb" }));

app.use(userController.verifyToken, userController.protect);

app.use("/api/user", userRoutes);

app.all("*", async (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
