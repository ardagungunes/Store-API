const express = require("express");
const { getAllProducts } = require("../controllers/products.js");

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
