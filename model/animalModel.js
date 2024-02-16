const mongoose = require("mongoose");

const animalModel = new mongoose.Schema({
  A_ID: {
    type: String,
    require: true,
  },
  file_url: {
    type: String,
    require: true,
  },
  Animal_Name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Animals", animalModel);
