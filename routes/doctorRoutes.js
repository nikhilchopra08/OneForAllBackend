const express = require("express");
const router = express.Router();
const { getDoctor, addDoctor } = require("../controller/Doctor");

router.route("/").get(getDoctor).post(addDoctor);

module.exports = router;
