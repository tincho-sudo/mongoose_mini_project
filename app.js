const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/routes.js");
const { PORT, MONGODB_URI } = require("./config/env");

mongoose.connect(MONGODB_URI, () => "Connected to db");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

routes(app);

const port = PORT || process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
