const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/routes.js");

mongoose.connect("mongodb://localhost/UserDB", () => "Connected to db");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

routes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
