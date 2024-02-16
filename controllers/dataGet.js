const animalModel = require("../model/animalModel");
const mysqlDBConnect = require("../config/mysqlDBConnect");

const getAllData = async (req, res) => {
  //   let data = await mongoDataGet(req.body.id);
  let dataMysql = mysqlDataGet(req.body.id);
  console.log("dsdsdcsd" + dataMysql);
};

const mongoDataGet = async (id) => {
  try {
    const getData = await animalModel.findOne({ a_id: id }).exec();
    if (!getData) {
      return console.log("not data found");
    }
    return getData;
  } catch (error) {
    console.log(error);
  }
};

const mysqlDataGet = (id) => {
  try {
    mysqlDBConnect.query(
      `SELECT * FROM animals WHERE a_id='${id}'`,
      (error, results, fields) => {
        if (error) throw error;
        return results.map(function (row) {
          return {
            a_id: row.a_id,
            animal_name: row.animal_name,
            description: row.description,
            location: row.location,
          };
        });
        // return results;
      }
    );
  } catch (error) {
    console.log(error);
  }
};
module.exports = getAllData;
