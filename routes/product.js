const express = require("express");
const router = express.Router();
const {getAllProductss,getAllProductssTesting} = require("../controllers/product")
router.route("/").get(getAllProductss);
router.route("/testing").get(getAllProductssTesting);

module.exports = router;
