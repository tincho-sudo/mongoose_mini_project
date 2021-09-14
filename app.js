const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/routes.js");

mongoose.connect("mongodb://localhost/UserDB");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

routes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
