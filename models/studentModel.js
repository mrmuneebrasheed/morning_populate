const mongoose = require("mongoose");
const studentModel = mongoose.Schema(
    {
        name: { type: String, unique: true, index: true },
        age: Number,
        class: String,
        level: String,
        gender: String,
        mark: String,
        address: { type: mongoose.Types.ObjectId, ref: "Address" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Student", studentModel);
