var db = require("../database/mysql");
const utils = require("../helpers/utils");
const TABLE_NAME = "expenses";

module.exports = {
  readData: (callback) => {
    var sql = `SELECT c.id as categotyId, c.name as categoryName, e.id, e.purchase_date as date, note, e.category_id as category, e.payment_id as paymentType, amount FROM categories c, expenses e WHERE c.id = e.category_id AND e.status = 0`;
    db.query(sql, (err, data, fields) => {
      if (err) throw err;
      return callback(data);
    });
  },
  createData: (payload, callback) => {
    var sql = `INSERT INTO ${TABLE_NAME} (purchase_date, note, category_id, payment_id, amount) VALUES ('${utils.convertDate(
      payload?.purchase_date
    )}', '${payload?.note ? payload?.note : ""}', ${payload?.category_type}, ${
      payload?.payment_type
    }, ${payload?.amount})`;
    db.query(sql, (err, data, fields) => {
      if (err) throw err;
      return callback(data);
    });
  },
  specificData: (payload, callback) => {
    var sql = `SELECT e.id as recordId, e.category_id, e.payment_id, e.purchase_date as date, e.note as remarks, e.amount, c.name as categoryName, p.name as paymentType FROM ${TABLE_NAME} e INNER JOIN categories c on e.category_id = c.id INNER JOIN payments p on e.payment_id = p.id WHERE e.purchase_date = '${payload}'`;
    db.query(sql, (err, data, fields) => {
      if (err) throw err;
      return callback(data);
    });
  },
  updateData: (payload, callback) => {
    var sql = `UPDATE ${TABLE_NAME} SET note = '${payload.note}', category_id = '${payload.category_type}', payment_id = '${payload.payment_type}', amount = '${payload.amount}' WHERE id = '${payload.id}'`;
    db.query(sql, (err, data, fields) => {
      if (err) throw err;
      return callback(data);
    });
  },
  daySummary: (payload, callback) => {
    var sql = `SELECT SUM(amount) as totalAmount FROM ${TABLE_NAME} WHERE purchase_date = '${payload}' GROUP BY purchase_date`;
    db.query(sql, (err, data, fields) => {
      if (err) throw err;
      return callback(data);
    });
  },
  catSummary: (callback) => {
    var sql = `SELECT c.id as categoryId, c.name as categoryName ,case WHEN SUM(e.amount) is null then 0 else SUM(e.amount) END AS amount FROM categories as c LEFT JOIN ${TABLE_NAME} e on e.category_id = c.id  GROUP BY c.id`;
    db.query(sql, (err, data, fields) => {
      if (err) throw err;
      return callback(data);
    });
  },
  frequentData: (callback) => {
    var sql = `SELECT e.category_id,c.name as categoryName from ${TABLE_NAME} e, categories c WHERE e.category_id = c.id GROUP BY category_id having count(category_id) >= 2;`;
    db.query(sql, (err, data, fields) => {
      if (err) throw err;
      return callback(data);
    });
  },
};
