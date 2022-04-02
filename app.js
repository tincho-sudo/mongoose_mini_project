const express = require("express");
const app = express();

const userRts = require("./routes/routes.user");
const carRts = require("./routes/routes.car");
const userCarRts = require("./routes/routes.usercar");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

userRts(app);
carRts(app);
userCarRts(app);

module.exports = app;
