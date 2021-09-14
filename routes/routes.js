const { getUser, modifyUser, deleteUser, newUser, getAllUsers } = require("../controllers/userController");

const routes = (app) => {
  app.route("/user/:id").get(getUser).put(modifyUser).delete(deleteUser);

  app.route("/users/").get(getAllUsers).post(newUser);

  app.get("*", (req, res) => {
    res.status(404).send({ url: req.originalUrl + " not found" });
  });
};

module.exports = routes;
