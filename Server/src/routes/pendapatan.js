const express = require("express");
const router = express.Router({ mergeParams: true });
const { createPendapatan } = require("../controller/pendapatan");
const { getPendapatan } = require("../controller/pendapatan");

router
    .route("/pendapatan")
    .post(createPendapatan)
    .get(getPendapatan)

module.exports = router;