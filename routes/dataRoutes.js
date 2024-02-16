const express = require("express");
const router = express.Router();
const { postAnimalDataMongo } = require("../controllers/mongoController");

router.post("/postmongo", postAnimalDataMongo);
module.exports = router;
