const express = require("express");
const router = express.Router();
const { getMedicine, createMedicine, updateMedicine, deleteMedicine } = require("../controller/medicine");

router.route("/").get(getMedicine).post(createMedicine);

router.route("/:id").get(getMedicine).put(updateMedicine).delete(deleteMedicine);

module.exports = router;