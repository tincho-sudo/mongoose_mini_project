const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserCar = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  car: {
    type: Schema.Types.ObjectId,
    ref: "Car",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserCar", UserCar);
