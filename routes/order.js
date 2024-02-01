const express = require("express");
const router = express.Router();
const orderCtrl = require("../controllers/order-controler");

router.route("/").get(orderCtrl.readData).post(orderCtrl.createData);
router.route("/:id").get(orderCtrl.readRecord);

module.exports = router;
