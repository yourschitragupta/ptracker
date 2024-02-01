const express = require("express");
const router = express.Router();
const paymentCtrl = require("../controllers/payment-controller");
const categoryCtrl = require("../controllers/category-controller");
const expenseCtrl = require("../controllers/expense-controller");

router.route("/").get((req, res) => {
  res.status(404).json({ message: "URL NOT FOUND" }).send();
});
router.route("/payments").get(paymentCtrl.readData);
router.route("/categories").get(categoryCtrl.readData);
router.route("/day/summary/:query").get(expenseCtrl.daySummary);
router.route("/category/summary/").get(expenseCtrl.catSummary);
router.route("/frequent").get(expenseCtrl.frequentData);

module.exports = router;
