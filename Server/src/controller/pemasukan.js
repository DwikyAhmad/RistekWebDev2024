const Pemasukan = require("../models/pemasukan");
const User = require("../models/user");

module.exports.createPemasukan = async (req, res) => {
    const pemasukan = new Pemasukan(req.body);
    const user = await User.findById(req.user._id);

    pemasukan.author = req.user._id;
    user.saldo += pemasukan.nominal;

    await pemasukan.save();
    await user.save();

    res.redirect("/");
};

module.exports.deletePemasukan = async (req, res) => {
    const { id } = req.params;

    const pemasukan = await Pemasukan.findById(id);
    const user = await User.findById(req.user._id);

    user.saldo -= pemasukan.nominal;

    await Pemasukan.findByIdAndDelete(id);
    await user.save();

    res.redirect("/");
}