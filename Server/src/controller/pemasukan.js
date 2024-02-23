const Pemasukan = require("../models/pemasukan");

module.exports.createPemasukan = async (req, res) => {
    const pemasukan = new Pemasukan(req.body);
    pemasukan.author = req.user._id;
    await pemasukan.save();
    console.log(pemasukan);
};

module.exports.getPemasukan = async (req, res) => {
    const pemasukan = await Pemasukan.find({});
    console.log(pemasukan);
}