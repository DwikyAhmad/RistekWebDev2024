const User = require("../models/user");

module.exports.handleRegister = async (req, res, next) => {
    try {
        console.log(req.body);
        const { email, username, password, saldo } = req.body;
        const user = new User({ email, username, saldo });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Successfully created a new account!")
            res.redirect("/");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/register");
    }
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/login");
    });
};