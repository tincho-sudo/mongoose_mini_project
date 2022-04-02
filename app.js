const express = require("express");
const app = express();

const routes = require("./routes/userRoutes.js");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

routes(app);
