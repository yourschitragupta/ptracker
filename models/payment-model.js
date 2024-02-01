var db = require("../database/mysql");
const TABLE_NAME = "payments";
module.exports = {
  readData: (callback) => {
    var sql = `SELECT id, name as paymentType FROM ${TABLE_NAME} WHERE status = 0`;
    db.query(sql, (err, data, fields) => {
      if (err) throw err;
      return callback(data);
    });
  },
};
