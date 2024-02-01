const express = require("express");
const router = express.Router();
const productCtrl = require("../controllers/product-controller");

router.get("/", productCtrl.readData);

module.exports = router;
