const animalModel = require("../model/animalModel");
const uploadImage = require("../config/uploadImage");

const postAnimalDataMongo = async (req, res) => {
  try {
    let image_url = await uploadImage.uploadFileConfig(req.file.path);
    const data = animalModel({
      a_id: req.body.id,
      image_url: image_url.secure_url,
      animal_name: req.body.name,
    });
    const saveData = await data.save();
    res.json({ saveData, msg: "sucess" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postAnimalDataMongo };
