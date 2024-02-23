const express = require("express");
const router = express.Router({ mergeParams: true });
const { createPengeluaran } = require("../controller/pengeluaran");
const { getPengeluaran } = require("../controller/pengeluaran");

router
    .route("/pengeluaran")
    .post(createPengeluaran)
    .get(getPengeluaran)

module.exports = router;