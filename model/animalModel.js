const mongoose = require("mongoose");

const animalModel = new mongoose.Schema({
  a_id: {
    type: String,
    require: true,
  },
  image_url: {
    type: String,
    require: true,
  },
  animal_name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Animals", animalModel);
