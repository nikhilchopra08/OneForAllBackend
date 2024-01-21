const mongoose = require("mongoose");

const medicineSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the medicine name"],
        unique: [true, "Medicine name already taken"]
    },
    Image: {
        type: String,
        required: [true, "Please enter the image URL"]
    },
    desc: {
        type: String, // Assuming description is a string, change it if it's a different data type
        required: [true, "Please enter the description"]
    },
});

module.exports = mongoose.model("Medicine", medicineSchema);
