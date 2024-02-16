const animalModel = require("../model/animalModel");
const uploadImage = require("../config/uploadImage");

const postAnimalDataMongo = async (req, res) => {
  console.log(req.file.path);
  //   try {
  //     let image_url = await uploadImage.uploadFileConfig(req.file.path);
  //     console.log(image_url);
  //   } catch (error) {
  //     console.log(error);
  //   }
};

module.exports = { postAnimalDataMongo };
