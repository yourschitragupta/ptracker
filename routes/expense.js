const express = require("express");
const router = express.Router();
const expenseCtrl = require("../controllers/expense-controller");

router
  .route("/")
  .get(expenseCtrl.readData)
  .post(expenseCtrl.createData)
  .put(expenseCtrl.updateData);
router.route("/:query").get(expenseCtrl.specificData);

module.exports = router;
