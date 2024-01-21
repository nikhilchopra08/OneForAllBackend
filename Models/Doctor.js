const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the medicine name"],
    },
    Image: {
        type: String,
        required: [true, "Please enter the Doctor's image"]
    },
    degree: {
        type: String, // Assuming description is a string, change it if it's a different data type
        required: [true, "Please enter the degree"]
    },
    rating: {
        type : String
    }
});

module.exports = mongoose.model("Doctor", doctorSchema);