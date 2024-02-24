const Pengeluaran = require("../models/pengeluaran");
const User = require("../models/user");

module.exports.createPengeluaran = async (req, res) => {
    const pengeluaran = new Pengeluaran(req.body);
    const user = await User.findById(req.user._id);

    pengeluaran.author = req.user._id;
    user.saldo -= pengeluaran.nominal;

    await pengeluaran.save();
    await user.save();

    res.redirect("/")
};

module.exports.getPengeluaran = async (req, res) => {
    const pengeluaran = await Pengeluaran.find({});
    res.send(pengeluaran);
}

module.exports.deletePengeluaran = async (req, res) => {
    const { id } = req.params;

    const pengeluaran = await Pengeluaran.findById(id);
    const user = await User.findById(req.user._id);

    user.saldo += pengeluaran.nominal;

    await Pengeluaran.findByIdAndDelete(id);
    await user.save();

    res.redirect("/")
}
