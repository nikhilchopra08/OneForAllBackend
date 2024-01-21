const express = require("express");
const cors = require('cors');
const connectDB = require("./configuration/dbConnect.js");
const errorHandler = require("./MiddleWare/errorHandler.js");

const app = express();
const dotenv = require("dotenv").config();
connectDB();

const port = process.env.PORT;;

app.use(express.json())
app.use(cors());

app.use("/api/User" , require("./routes/userRoutes"));
app.use("/api/medicines" , require("./routes/medicineRoutes.js"));
app.use("/api/doctors" , require("./routes/doctorRoutes.js"));
app.use("/api/hospital" , require("./routes/hospitalRoutes.js"));

app.use(errorHandler);

app.listen(port , () => {
    console.log(`server is running on Port ${port}`)
});