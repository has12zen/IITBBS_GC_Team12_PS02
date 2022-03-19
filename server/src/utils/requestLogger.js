const morgan = require("morgan");
const chalk = require("chalk");

const ISTOffset = 330;

const morganMiddleware = morgan(function (tokens, req, res) {
  var currentTime = new Date();
  const currentOffset = currentTime.getTimezoneOffset();
  const ISTTime = new Date(
    currentTime.getTime() + (ISTOffset + currentOffset) * 60000
  );

  console.log(
    "\n\n\n",
    chalk.hex("#ff4757").bold("🍄  Request --> "),
    req.body
  );
  return [
    chalk.hex("#34ace0").bold(tokens.method(req, res)),
    chalk.hex("#ffb142").bold(tokens.status(req, res)),
    chalk.hex("#ff5252").bold(tokens.url(req, res)),
    chalk.hex("#2ed573").bold(tokens["response-time"](req, res) + " ms"),
    chalk.hex("#f78fb3").bold("@ " + ISTTime.toString()),
    chalk.yellow(tokens["remote-addr"](req, res)),
    chalk.hex("#fffa65").bold("from " + tokens.referrer(req, res)),
    chalk.hex("#1e90ff")(tokens["user-agent"](req, res)),
    "\n\n\n",
  ].join(" ");
});

module.exports = morganMiddleware;
