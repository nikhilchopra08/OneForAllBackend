const express = require("express");
const asyncHandler = require("express-async-handler");
const Hospital = require("../Models/hospital");

//@desc Get all Hospitals
//@route GET /api/hospital
//@access public
const getHospital = asyncHandler(async (req, res) => {
    const hospitals = await Hospital.find();
    res.status(200).json({ hospitals });
});

//@desc Create new Hospital
//@route POST /api/hospital
//@access public
const AddHospital = asyncHandler(async (req, res) => {
    console.log("The request body is:", req.body);
    const { name, Image, Address } = req.body;
    if (!name || !Image || !Address) {
        res.status(400);
        throw new Error("All fields mandatory!");
    }

    try {
        const hospitalAvailability = await Hospital.findOne({ name });
        if (hospitalAvailability) {
            console.log("Hospital already exists");
        } else {
            const hospital = await Hospital.create({
                name,
                Image,
                Address,
            });

            res.status(201).json(hospital);
        }
    } catch (error) {
        console.error("Error checking hospital availability:", error);
    }
});

module.exports = {
    getHospital,
    AddHospital
};
