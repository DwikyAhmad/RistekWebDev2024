const Pengeluaran = require("../models/pengeluaran");

module.exports.createPengeluaran = async (req, res) => {
    const pengeluaran = new Pengeluaran(req.body);
    pengeluaran.author = req.user._id;
    await pengeluaran.save();
    console.log(pengeluaran);
    res.redirect("/")
};

module.exports.getPengeluaran = async (req, res) => {
    const pengeluaran = await Pengeluaran.find({});
    res.send(pengeluaran);
}