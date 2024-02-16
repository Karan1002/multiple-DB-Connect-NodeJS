const mysqlDBConnect = require("../config/mysqlDBConnect");

const getData = (req, res) => {
  try {
    return mysqlDBConnect.query(
      `SELECT * FROM animals WHERE a_id="a01"`,
      (error, results, fields) => {
        res.send(results);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getData };
