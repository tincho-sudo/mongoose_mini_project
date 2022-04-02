const { Car } = require("../models");
const mongoose = require("mongoose");
const { UserModel } = require("../models");
const newCar = async (req, res) => {
  const { brand, model, year, plate } = req.body;
  try {
    const newCar = new Car({ brand, model, year, plate });
    await newCar.save();
    res.status(200).json({ newCar });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const modifyCar = async (req, res) => {
  const { brand, model, year, plate } = req.body;

  const car = await Car.findById(req.car._id);
  if (brand) car.brand = car;
  if (model) car.model = model;
  if (year) car.year = year;
  if (plate) car.plate = plate;

  const editedCar = await car.save();
  res.status(200).json({ editedCar });
};

const getCars = async (_, res) => {
  const cars = await Car.find();
  return res.status(200).json(cars);
};

const getCar = async (req, res) => {
  const car = await UserModel.findById(req.params.id);
  if (!car) return res.status(404).send("Car not defined");
  res.status(200).send(car);
};

module.exports = {
  newCar,
  modifyCar,
  getCars,
  getCar,
};
