var mysql = require("mysql");
var conn = mysql.createConnection({
  host: "sql308.infinityfree.com",
  user: "if0_35806426",
  password: "5oHRVAqA8xOp",
  database: "if0_35806426_ptracker",
});
conn.connect((err) => {
  if (err) throw err;
  console.log("Database is connected successfully !");
});
module.exports = conn;
