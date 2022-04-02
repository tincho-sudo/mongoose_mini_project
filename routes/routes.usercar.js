const { buyCar, sellCar } = require("../controllers/controllers.usercar");

const routes = (app) => {
  app.route("/car/buy/:id_user/:id_car").post(buyCar);

  app.route("/car/sell/:id_user/id_car").delete(sellCar);

  app.get("*", (req, res) => {
    res.status(404).send({ url: req.originalUrl + " not found" });
  });
};

module.exports = routes;
