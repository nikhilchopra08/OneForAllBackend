const asyncHandler = require("express-async-handler");
const Doctor = require("../Models/Doctor");

//@desc Get all Doctors
//@route GET /api/doctors
//@access public
const getDoctor = asyncHandler(async (req, res) => {
    const doctors = await Doctor.find();
    res.status(200).json({ doctors });
});

//@desc Create new Doctor
//@route POST /api/doctors
//@access public
const addDoctor = asyncHandler(async (req, res) => {
    console.log("The request body is:", req.body);
    const { name, Image, degree, rating } = req.body;
    if (!name || !Image || !degree || rating === undefined) {
        res.status(400);
        throw new Error("All fields mandatory!");
    }

    try {
        const doctor = await Doctor.create({
            name,
            Image,
            degree,
            rating
        });
        res.status(201).json(doctor);
    } catch (error) {
        console.error("Error adding Doctor:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = {
    getDoctor,
    addDoctor
};
