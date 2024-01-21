const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:[true, "Please enter the Contact email id"],
        unique: [true, "email address already taken"]
    },
    password:{
        type:String,
        required:[true, "Please enter the passward"]
    },
    age:{
        type:Number,
        required:[true, "Please enter the Age"]
    },
    Gender:{
        type:String,
        required:[true, "Please enter the Gender"]
    },
    Height:{
        type:Number,
        required:[true, "Please enter the Height"]
    },
    Weight:{
        type:Number,
        required:[true, "Please enter the Weight"]
    }

},{
    timestamps: true,
});

module.exports = mongoose.model("User" , userSchema); 