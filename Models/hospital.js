const mongoose = require("mongoose");

const hospitalSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the medicine name"],
    },
    Image: {
        type: String,
        required: [true, "Please enter the Doctor's image"]
    },
    Address: {
        type: String, // Assuming description is a string, change it if it's a different data type
        required: [true, "Please enter the degree"]
    },
});

module.exports = mongoose.model("Hospital", hospitalSchema);