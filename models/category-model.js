var db = require("../database/mysql");
const TABLE_NAME = "categories";
module.exports = {
  readData: (callback) => {
    var sql = `SELECT id, name as categoryName FROM ${TABLE_NAME}`;
    db.query(sql, (err, data, fields) => {
      if (err) throw err;
      return callback(data);
    });
  },
};
