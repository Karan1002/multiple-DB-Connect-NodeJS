const express = require("express");
const router = express.Router();
const { postAnimalDataMongo } = require("../controllers/mongoController");
const path = require("path");
const multer = require("multer");
const { getData } = require("../controllers/mysqlController");
const getAllData = require("../controllers/dataGet");

const uploader = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 500000 },
});
router.post("/postmongo", uploader.single("file"), postAnimalDataMongo);
router.get("/getmysql", getData);
router.post("/getdata", getAllData);
module.exports = router;
