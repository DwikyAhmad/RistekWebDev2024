const express = require("express");
const router = express.Router({ mergeParams: true });
const { createPengeluaran } = require("../controller/pendapatan");
const { getPengeluaran } = require("../controller/pendapatan");

router
    .route("/pengeluaran")
    .post(createPengeluaran)
    .get(getPengeluaran)

module.exports = router;