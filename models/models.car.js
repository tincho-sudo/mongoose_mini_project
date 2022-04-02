const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Car = new Schema({
    brand: String,
    model: String,
    year: Date,
    plate: String,
    owner: String,

});

module.exports = mongoose.model("Car", Car);