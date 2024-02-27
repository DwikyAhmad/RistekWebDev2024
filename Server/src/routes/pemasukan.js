const express = require("express");
const router = express.Router({ mergeParams: true });
const { createPemasukan } = require("../controller/pemasukan");
const { deletePemasukan } = require("../controller/pemasukan");

router
    .route("/pemasukan")
    .post(createPemasukan)

router
    .route("/:id/pemasukan")
    .delete(deletePemasukan)

module.exports = router;