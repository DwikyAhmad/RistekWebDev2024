const express = require("express");
const router = express.Router({ mergeParams: true });
const { createPengeluaran } = require("../controller/pengeluaran");
const { deletePengeluaran } = require("../controller/pengeluaran");

router
    .route("/pengeluaran")
    .post(createPengeluaran)

router
    .route("/:id/pengeluaran")
    .delete(deletePengeluaran)

module.exports = router;