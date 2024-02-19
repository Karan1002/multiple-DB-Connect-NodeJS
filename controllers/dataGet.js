const animalModel = require("../model/animalModel");
const mysqlDBConnect = require("../config/mysqlDBConnect");

const getAllData = async (req, res) => {
  const dataMongo = await mongoDataGet(req.body.id);
  const dataMysql = await mysqlDataGet(req.body.id);
  const data = {
    dataMongo,
    dataMysql,
  };
  console.log(data);
};

const mongoDataGet = async (id) => {
  try {
    const getData = await animalModel.findOne({ a_id: id });
    if (!getData) {
      return console.log("not data found");
    }
    return getData;
  } catch (error) {
    console.log(error);
  }
};

const mysqlDataGet = async (id) => {
  return new Promise((resolve, reject) => {
    try {
      const dboutput = mysqlDBConnect.query(
        `SELECT * FROM animals WHERE a_id='${id}'`,
        async (error, results, fields) => {
          if (error) throw error;
          resolve(results);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = getAllData;
