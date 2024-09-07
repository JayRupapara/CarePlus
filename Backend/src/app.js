const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors()); // Enable CORS for all routes

// Importing routes
const loginRoute = require('./routes/login.js');
const patientRoute = require('./routes/patient.js');
const hospitalRoute = require('./routes/hospital.js');
const doctorRoute = require('./routes/doctor.js');
const registerRoute = require('./routes/register.js');


// Declaring routes
app.use("/api", loginRoute);
app.use("/api/patient", patientRoute);
app.use("/api/hospital", hospitalRoute);
app.use("/api/doctor", doctorRoute);
app.use("/api/register", registerRoute);


module.exports = app;
