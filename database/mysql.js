var mysql = require("mysql");
var conn = mysql.createConnection({
  host: "srv1327.hstgr.io",
  user: "u872798809_pt_admin",
  password: "KrazyCoders@8",
  database: "u872798809_p_tracker",
});
conn.connect((err) => {
  if (err) throw err;
  console.log("Database is connected successfully !");
});
module.exports = conn;
