const asyncHandler = require("express-async-handler");
const Medicine = require("../Models/medicine");

//@desc Get all Medicines
//@route GET /api/medicines
//@access public
const getMedicine = asyncHandler(async (req, res) => {
    const medicines = await Medicine.find();
    res.status(200).json({ medicines });
});

//@desc Create new Medicine
//@route POST /api/medicines
//@access public
const createMedicine = asyncHandler(async (req, res) => {
    console.log("The request body is:", req.body);
    const { name, Image, desc } = req.body;
    if (!name || !Image || !desc) {
        res.status(400);
        throw new Error("All fields mandatory!");
    }

    try {
        const medicineAvailability = await Medicine.findOne({ name });
        if (medicineAvailability) {
            console.log("Medicine already exists");
        } else {
            const medicine = await Medicine.create({
                name,
                Image,
                desc,
            });

            res.status(201).json(medicine);
        }
    } catch (error) {
        console.error("Error checking medicine availability:", error);
    }
});

// //@desc Get Medicine
// //@route GET /api/medicines/:id
// //@access public
// const getMedicine = asyncHandler(async (req, res) => {
//     const medicine = await Medicine.findById(req.params.id);
//     if (!medicine) {
//         res.status(404);
//         throw new Error("Medicine not found");
//     }
//     res.status(202).json(medicine);
// });

//@desc Update Medicine
//@route PUT /api/medicines/:id
//@access public
const updateMedicine = asyncHandler(async (req, res) => {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) {
        res.status(404);
        throw new Error("Medicine not found");
    }

    const updatedMedicine = await Medicine.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(203).json(updatedMedicine);
});

//@desc Delete Medicine
//@route DELETE /api/medicines/:id
//@access public
const deleteMedicine = asyncHandler(async (req, res) => {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) {
        res.status(404);
        throw new Error("Medicine not found");
    }

    await medicine.deleteOne();
    res.status(205).json(medicine);
});

module.exports = {
    getMedicine,
    createMedicine,
    updateMedicine,
    deleteMedicine,
};
