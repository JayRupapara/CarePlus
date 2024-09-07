// Import required modules
const express = require('express');
const app = express();
const router = express.Router();
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const moment = require('moment');
const vverifyToken = require('./../middlewares/middleware.js');

const upload = require('multer');

// Secret key for JWT (stored securely in environment variables)
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to parse JSON bodies
// app.use(express.json());
app.use(express.urlencoded({extended: false}));

const { verifyToken, checkRole } = vverifyToken;

// Database connection
const connection = mysql.createConnection({
    port : process.env.port,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    timezone: "Z"
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id', connection.threadId);
});



router.post('/hospital/register', async (req, res) => {
  try {
    const {
      Hname, Hemail, Hpassword, Hphone_number, Hregistered_number,
      Htype, Hadmin_name, Hstate, Hcity, Haddress, Hwebsite_url
    } = req.body;

    const hashedPassword = await bcrypt.hash(Hpassword, 10);

    const [result] = await pool.execute(
      'INSERT INTO Hospital (Hname, Hemail, Hpassword, Hphone_number, Hregistered_number, Htype, Hadmin_name, Hstate, Hcity, Haddress, Hwebsite_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [Hname, Hemail, hashedPassword, Hphone_number, Hregistered_number, Htype, Hadmin_name, Hstate, Hcity, Haddress, Hwebsite_url]
    );

    res.status(201).json({ message: 'Hospital registered successfully', hospitalId: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



router.get('/hospital/dashboard/:hospitalId', async (req, res) => {
  try {
    const hospitalId = req.params.hospitalId;

    // Get hospital name
    const [hospitalRows] = await pool.execute('SELECT Hname FROM Hospital WHERE HID = ?', [hospitalId]);
    const hospitalName = hospitalRows[0]?.Hname;

    // Get doctor count
    const [doctorRows] = await pool.execute('SELECT COUNT(*) as totalDoctors FROM Doctor WHERE HID = ?', [hospitalId]);
    const totalDoctors = doctorRows[0].totalDoctors;

    // Get recent patients (assuming you have a visits or appointments table)
    const [patientRows] = await pool.execute(
      'SELECT p.Pname, a.appointment_date FROM PatientDetails p JOIN Appointment a ON p.PID = a.PID WHERE a.HID = ? ORDER BY a.appointment_date DESC LIMIT 5',
      [hospitalId]
    );

    // Get waiting queue count (assuming 'scheduled' status means waiting)
    const [queueRows] = await pool.execute(
      'SELECT COUNT(*) as queueCount FROM Appointment WHERE HID = ? AND status = "scheduled"',
      [hospitalId]
    );
    const queueCount = queueRows[0].queueCount;

    res.json({
      hospitalName,
      totalDoctors,
      recentPatients: patientRows,
      waitingQueueCount: queueCount,
      // Note: You'll need to add logic for beds and total patient visits if you have that data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;