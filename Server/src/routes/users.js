const express = require("express");
const router = express.Router({ mergeParams: true });
const { handleRegister } = require("../controller/users");
const { logout } = require("../controller/users");
const passport = require("passport");

router
    .route("/register")
    .post(handleRegister)

router
    .route("/login")
    .post(passport.authenticate("local"),
        (req, res) => {
            console.log(req.user)
            res.redirect("/");
        })

router
    .route("/logout")
    .get(logout)

module.exports = router;