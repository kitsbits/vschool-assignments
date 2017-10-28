const mongoose = require("mongoose");

const bagSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: Number
});

module.exports = mongoose.model("Bag", bagSchema);
