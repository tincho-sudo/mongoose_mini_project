const { getCar, modifyCar, newCar, getCars } = require("../controllers/controllers.car");

const routes = (app) => {
  app.route("/car/:id").get(getCar).put(modifyCar).delete(deleteCar);

  app.route("/cars/").get(getCars).post(newCar);

  app.get("*", (req, res) => {
    res.status(404).send({ url: req.originalUrl + " not found" });
  });
};

module.exports = routes;
