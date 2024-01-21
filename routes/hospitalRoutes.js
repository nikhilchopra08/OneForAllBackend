const express = require("express");
const router = express.Router();
const { getHospital, AddHospital } = require("../controller/hospital");

router.route("/").get(getHospital).post(AddHospital);

module.exports = router;
