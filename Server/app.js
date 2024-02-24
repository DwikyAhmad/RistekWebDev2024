const express = require("express");
const app = express();

const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local");
const methodOverride = require("method-override");
const User = require("./src/models/user");
const userRouter = require("./src/routes/users");
const pemasukanRouter = require("./src/routes/pemasukan");
const pengeluaranRouter = require("./src/routes/pengeluaran");
const { isLoggedIn } = require("./middleware");
const flash = require("connect-flash");
const Pengeluaran = require("./src/models/pengeluaran");

mongoose
    .connect("mongodb://127.0.0.1:27017/ristekAPI2024")
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("connection error", err));

app.use(methodOverride("_method"));

const sessionConfig = {
    resave: false,
    saveUninitialized: true,
    secret: "makebetterWEB",
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
};

app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/api", userRouter);
app.use("/api", pemasukanRouter);
app.use("/api", pengeluaranRouter);

app.get("/api", isLoggedIn, async (req, res) => {
    const listPengeluaran = await Pengeluaran.find({ author: req.user._id }).sort({ _id: -1 });
    res.json({ listPengeluaran, user: req.user });
})

app.all("*", (req, res) => {
    res.send("Page Not Found")
})

app.listen(3000, () => {
    console.log("Serving on Port 3000");
});