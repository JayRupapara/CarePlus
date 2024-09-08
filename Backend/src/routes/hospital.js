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




// 1. Register Hospital API
app.post('/register-hospital', async (req, res) => {
  const {
      hospitalName, hospitalType, phoneNumber, registrationNumber,
      hospitalWebsite, adminName, hospitalState, hospitalCity,
      hospitalAddress, email, password
  } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const query = `INSERT INTO Hospital (Hname, Htype, Hphone_number, Hregistered_number, 
                 Hwebsite_url, Hadmin_name, Hstate, Hcity, Haddress, Hemail, Hpassword) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  pool.query(query, [hospitalName, hospitalType, phoneNumber, registrationNumber,
      hospitalWebsite, adminName, hospitalState, hospitalCity,
      hospitalAddress, email, hashedPassword], (error, results) => {
      if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Error registering hospital' });
      }
      res.status(201).json({ message: 'Hospital registered successfully', hospitalId: results.insertId });
  });
});


// 2. Hospital Home API
router.get('/hospital-home/:hospitalId', verifyToken, checkRole('hospital'), (req, res) => {
  const hospitalId = req.params.hospitalId;

  const query = `
      SELECT 
    h.Hname AS hospitalName,
    COUNT(DISTINCT d.DID) AS availableDoctors,
    (SELECT COUNT(*) FROM Doctor WHERE HID = ?) AS totalDoctors,
    hb.remaining_beds AS remainingBeds,
    hb.total_beds AS totalBeds,
    (SELECT COUNT(*) FROM appointment WHERE HID = ? AND status = 'completed') AS totalVisitedPatients,
    (SELECT COUNT(*) FROM appointment WHERE HID = ? AND status = 'scheduled') AS totalQueuedPatients,
    (SELECT GROUP_CONCAT(CONCAT(pd.Pname, '|', a.created_at) SEPARATOR ',')
     FROM (
         SELECT PID, created_at
         FROM appointment
         WHERE HID = ?
         ORDER BY created_at DESC
         LIMIT 5
     ) a
     JOIN PatientDetails pd ON a.PID = pd.PID
    ) AS recentlyRegisteredPatients,
    (SELECT GROUP_CONCAT(CONCAT(pd.Pname, '|', d.Dname, '|', a.created_at) SEPARATOR ',')
     FROM appointment a
     JOIN PatientDetails pd ON a.PID = pd.PID
     JOIN Doctor d ON a.DID = d.DID
     WHERE a.HID = ? AND a.status = 'scheduled'
     ORDER BY a.created_at ASC
    ) AS waitingQueue
FROM Hospital h
LEFT JOIN Doctor d ON h.HID = d.HID
LEFT JOIN Hospital_Beds hb ON h.HID = hb.HID
WHERE h.HID = ?
GROUP BY h.HID`;

  connection.query(query, [hospitalId, hospitalId, hospitalId, hospitalId, hospitalId, hospitalId], (error, results) => {
      if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Error fetching hospital data' });
      }
      res.json(results[0]);
  });
});    //tested



router.get('/todays-patients/:hospitalId', verifyToken, checkRole('hospital'), (req, res) => {
  const hospitalId = req.params.hospitalId;
  const today = new Date().toISOString().split('T')[0];

  const query = `
      SELECT 
          COUNT(*) AS todayRegisteredPatients,
          (SELECT COUNT(*) FROM PatientDetails) AS totalPatients,
          JSON_ARRAYAGG(
              JSON_OBJECT(
                  'patientName', Pname,
                  'gender', Pgender,
                  'registrationTime', created_at
              )
          ) AS patientList
      FROM PatientDetails
      WHERE DATE(created_at) = ? AND HID = ?`;

  pool.query(query, [today, hospitalId], (error, results) => {
      if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Error fetching today\'s patients' });
      }
      res.json(results[0]);
  });
});




// 6. Patient Waiting Queue API
app.get('/patient-queue/:hospitalId', verifyToken, checkRole('hospital'), (req, res) => {
  const hospitalId = req.params.hospitalId;

  const query = `
      SELECT 
          (SELECT COUNT(*) FROM appointment WHERE HID = ? AND status = 'completed') AS completedQueue,
          (SELECT COUNT(*) FROM appointment WHERE HID = ? AND status = 'pending') AS pendingQueue,
          JSON_ARRAYAGG(
              JSON_OBJECT(
                  'patientName', pd.Pname,
                  'doctorName', d.Dname,
                  'gender', pd.Pgender,
                  'appointmentTime', pa.created_at
              )
          ) AS queueList
      FROM appointment pa
      JOIN PatientDetails pd ON pa.PID = pd.PID
      JOIN Doctor d ON pa.DID = d.DID
      WHERE pa.HID = ? AND pa.status = 'pending'
      ORDER BY pa.created_at ASC`;

  pool.query(query, [hospitalId, hospitalId, hospitalId], (error, results) => {
      if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Error fetching patient queue' });
      }
      res.json(results[0]);
  });
});




// 7. New Appointment API
app.post('/new-appointment', verifyToken, checkRole('hospital'), (req, res) => {
  const { patientId, doctorId, hospitalId, visitReason } = req.body;

  const query = `INSERT INTO appointment (PID, DID, HID, visit_reason, status) 
                 VALUES (?, ?, ?, ?, 'pending')`;

  pool.query(query, [patientId, doctorId, hospitalId, visitReason], (error, results) => {
      if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Error creating new appointment' });
      }
      res.status(201).json({ message: 'Appointment created successfully', appointmentId: results.insertId });
  });
});










// 8. Patient Registration API
router.post('/register-patient', verifyToken, checkRole('hospital'), (req, res) => {
  const {
      patientName, dob, gender, phoneNumber, abhaCard, emergencyPhoneNo,
      emergencyName, email, address, city, state
  } = req.body;

  const query = `INSERT INTO PatientDetails (Pname, Pdob, Pgender, Pmobile_no, Pabha_card, 
                 Pemergency_contact, Pemergency_name, Pemail, Paddress, Pcity, Pstate) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  pool.query(query, [patientName, dob, gender, phoneNumber, abhaCard, emergencyPhoneNo,
      emergencyName, email, address, city, state], (error, results) => {
      if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Error registering patient' });
      }
      res.status(201).json({ message: 'Patient registered successfully', patientId: results.insertId });
  });
});


module.exports = router;