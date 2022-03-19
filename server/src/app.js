const express = require("express");
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "10kb" }));

app.use("/", async (req, res) => {});
app.all("*", async (req, res, next) => {
  next(new AppError(`Can't find ${req.orignalUrl} on this server!`, 404));
});

module.exports = app;
