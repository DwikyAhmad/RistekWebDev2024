const express = require("express");
const router = express.Router({ mergeParams: true });
const { createPemasukan } = require("../controller/pemasukan");
const { getPemasukan } = require("../controller/pemasukan");

router
    .route("/pemasukan")
    .post(createPemasukan)
    .get(getPemasukan)

module.exports = router;