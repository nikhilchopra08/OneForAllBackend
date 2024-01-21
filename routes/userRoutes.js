const asyncHandler = require("express-async-handler");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../Models/user");
const bcrypt = require('bcrypt');
const dotenv = require("dotenv").config();
const CryptoJS = require('crypto-js');

router.post("/register", async (req, res) => {
    const { email, password, age, gender, Height, Weight } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        email,
        password: hashedPassword,
        age,
        Gender: gender,
        Height,
        Weight
    });

    try {
        const SavedUser = await newUser.save();
        res.status(201).json(SavedUser);
        console.log(SavedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/login", asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        res.status(400).send("All fields are mandatory");
        return;
    }

    const user = await User.findOne({ email });

    if (user) {
        // Compare the hashed password using bcrypt
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const accessToken = jwt.sign({
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                }
            }, process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1h" }
            );

            console.log(accessToken);

            res.status(200).json({ accessToken });
        } else {
            res.status(401).send("Email or password is not valid");
        }
    } else {
        res.status(401).send("Email or password is not valid");
    }
}));

module.exports = router;
