const { User, Car, UserCar } = require("../models");
const mongoose = require("mongoose");
const { ObjectId } = require("mongoose").Types;
const { UserModel } = require("../models");

const buyCar = async (req, res) => {
  const errors = {};
  const { id_user } = req.params;

  if (!ObjectId.isValid(id_car)) {
    errors.user = "Invalid ID";
    return res.status(400).json({ errors });
  }

  const user = await User.findById(id_user);

  if (!user) {
    errors.user = "That user doesnt exist";
    return res.status(400).json({ errors });
  }

  const userHasCar = await UserCar.findOne({
    user: user._id,
    car: req.car._id,
  });

  if (userHasCar) {
    errors.user = "You already own this car";
    return res.status(400).json({ errors });
  }

  const ownedCars = await UserCar.find({
    user: id_user,
  });

  const carSold = await UserCar.find({
    car: id_car,
  });

  if (carSold.length === 1) {
    errors.car = "A car can only have one owner";
    return res.status(400).json({ errors });
  }
  // podria haberlo hecho con un boolean y listo creo en vez de chequear esto

  try {
    const newUserCar = new UserCar({
      user: id_user,
      car: req.car._id,
    });
    await newUserCar.save();
    res.status(200).json({ newUserCar });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const sellCar = async (req, res) => {
  const errors = {};
  const { id_user, id_car } = req.params;

  if (!ObjectId.isValid(id_user)) {
    errors.user = "Invalid ID";
    return res.status(400).json({ errors });
  }

  const user = await User.findById(id_user);
  const car = await User.findById(id_car);

  if (!user) {
    errors.user = "That user doesnt exist";
    return res.status(400).json({ errors });
  }

  if (!car) {
    errors.user = "That car doesnt exist";
    return res.status(400).json({ errors });
  }

  const userHasCar = await UserCar.findOne({
    user: user,
    car: car,
  });

  if (!userHasCar) {
    errors.user = "You cant sell a car that you do not own";
    return res.status(400).json({ errors });
  }

  const deletedUserCar = await userHasCar.delete();
  res.status(200).json({ deletedUserCar });
};

module.exports = { buyCar, sellCar };
