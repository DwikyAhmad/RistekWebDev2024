const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema(
    {
        body: {
            type: String,
            required: true,
        },
        nominal: {
            type: Number,
            required: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("Pendapatan", pengeluaranSchema);
