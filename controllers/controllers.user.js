const { User, Car, UserCar } = require("../models");
const mongoose = require("mongoose");
const { UserModel } = require("../models"); // 3 = 4 = 5
//const UserModel = Models.UserModel; // 4 = 5  //// Destruturing
//const {UserModel} = Models

const getAllUsers = async (_, res) => {
  try {
    const userList = await UserModel.find({});
    res.status(200).json(userList);
  } catch (err) {
    res.status(404).send("No Users found");
  }
};

const newUser = async (req, res) => {
  const { age, name } = req.body;
  if (!age) return res.status(404).send("Age not defined");
  if (!name) return res.status(404).send("Name not defined");
  try {
    const usrExists = await UserModel.findOne({ name: req.body.name });
    if (usrExists) return res.status(404).send("User already exists");
    const newUser = new UserModel(req.body);
    const save = await newUser.save();
    res.status(200).json(save);
  } catch (err) {
    res.send(err);
  }
};

const getUser = async (req, res) => {
  try {
    const usr = await UserModel.findById(req.params.id);
    if (!usr) return res.status(404).send("User not defined");
    res.status(200).res.send(usr);
  } catch (err) {
    res.send(err);
  }
};

const modifyUser = async (req, res) => {
  try {
    const usr = await UserModel.findById(req.params.id);
    if (!usr) return res.status(404).send("User not defined");
    const { age, name } = req.body;
    if (age) usr.age = age;
    if (name) usr.name = name;
    usr.save();
    res.status(200).send(usr);
  } catch (err) {
    res.send(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const usr = await UserModel.findById(req.params.id);
    if (!usr) return res.status(404).send("User not defined");

    const carsToDelete = [];
    const carsOwnedByUser = await UserCar.find({
      user: id_user,
    });
    carsOwnedByUser.map((user) => carsToDelete.push(user._id));
    await UserCar.deleteMany({
      _id: {
        $in: carsToDelete,
      },
    });

    res.status(200).send(usr);
    usr.remove();
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getAllUsers,
  newUser,
  getUser,
  modifyUser,
  deleteUser,
};
