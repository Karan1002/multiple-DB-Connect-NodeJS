require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const mongoDBConnect = require("./config/mongoDBConnect");
const mysqlDBConnect = require("./config/mysqlDBConnect");
const port = process.env.MONGO_PORT || 3000;
const dataRoutes = require("./routes/dataRoutes");


app.use("/", dataRoutes);
app.use(express.json());
const start = async () => {
  try {
    await mongoDBConnect(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
