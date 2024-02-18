const Pendapatan = require("../models/pendapatan");

module.exports.createPendapatan = async (req, res) => {
    const pendapatan = new Pendapatan(req.body);
    pendapatan.author = req.user._id;
    await pendapatan.save();
    res.json({ message: "Successfully created!" })
};

module.exports.getPendapatan = async (req, res) => {
    const pendapatan = await Pendapatan.find({});
    res.json({ pendapatan });
}