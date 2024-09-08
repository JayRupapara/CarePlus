const express = require("express");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const vverifyToken = require("./../middlewares/middleware.js");
const moment = require("moment");
const nodemailer = require('nodemailer');


require("dotenv").config();

const router = express.Router();

const secret = process.env.JWT_SECRET || "yourSecretKey";

const { verifyToken, checkRole } = vverifyToken;

router.use(express.json());
router.use(cookieParser());

const connection = mysql.createConnection({
  port : process.env.port,
  host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  timezone: "Z",
  // socketPath: process.env.DB_SOCKET_PATH,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.stack);
    return;
  }
  console.log("Connected to MySQL as id", connection.threadId);
});

router.get("/dashboard", verifyToken, checkRole("Student"), (req, res) => {
  const username = req.user.username;
  res.status(200).json({
    message: `Welcome, ${username}! You have access to this protected endpoint`,
  });
}); // not tested



// ========================================================== mail =====================================================================


// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVICE,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
  }
});



// Endpoint to send email
router.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text
  };

  try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully');
  } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
  }
});






router.get('/doctor-appointments/:doctorId', verifyToken, checkRole('hospital'), (req, res) => {
  const doctorId = req.params.doctorId;

  const query = `
      SELECT 
          (SELECT COUNT(*) FROM PatientAppointment WHERE DID = ? AND status = 'completed') AS completedAppointments,
          (SELECT COUNT(*) FROM PatientAppointment WHERE DID = ?) AS totalAppointments,
          JSON_ARRAYAGG(
              JSON_OBJECT(
                  'patientName', pd.Pname,
                  'gender', pd.Pgender,
                  'appointmentDate', pa.created_at
              )
          ) AS appointmentList
      FROM PatientAppointment pa
      JOIN PatientDetails pd ON pa.PID = pd.PID
      WHERE pa.DID = ? AND pa.status = 'completed'`;

  pool.query(query, [doctorId, doctorId, doctorId], (error, results) => {
      if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Error fetching doctor appointments' });
      }
      res.json(results[0]);
  });
});



module.exports = router;

