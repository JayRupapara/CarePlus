const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const vToken = require('./../middlewares/middleware.js');
require('dotenv').config();
const { verifyToken, checkRole } = vToken;

const app = express();
const router = express.Router();
router.use(express.json());

const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD, // Use environment variable for the password
        database: process.env.DB_NAME
        // port: process.env.DB_PORT,
        // path: process.env.DB_SOCKET_PATH
    });



router.post('/api/patient/register', async (req, res) => {
    try {
      const {
        Pname, dob, Page, Pgender, Pblood_group, Pmobile_no,
        Pemergency_contact, Pemail, Paddress,
        blood_pressure, systolic_pressure, diastolic_pressure, heart_rate, bpm
      } = req.body;
  
      const conn = await pool.getConnection();
      await conn.beginTransaction();
  
      try {
        const [patientResult] = await conn.execute(
          'INSERT INTO PatientDetails (Pname, Page, Pgender, Pblood_group, Pmobile_no, Pemergency_contact, Pemail, Paddress) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [Pname, Page, Pgender, Pblood_group, Pmobile_no, Pemergency_contact, Pemail, Paddress]
        );
  
        const patientId = patientResult.insertId;
  
        await conn.execute(
          'INSERT INTO PatientHealthInfo (PID, blood_pressure, systolic_pressure, diastolic_pressure, heart_rate, bpm) VALUES (?, ?, ?, ?, ?, ?)',
          [patientId, blood_pressure, systolic_pressure, diastolic_pressure, heart_rate, bpm]
        );
  
        await conn.commit();
        res.status(201).json({ message: 'Patient registered successfully', patientId });
      } catch (error) {
        await conn.rollback();
        throw error;
      } finally {
        conn.release();
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });







  router.get('/api/patient/dashboard/:patientId', async (req, res) => {
    try {
      const patientId = req.params.patientId;
  
      // Get patient details
      const [patientRows] = await pool.execute(
        'SELECT * FROM PatientDetails WHERE PID = ?',
        [patientId]
      );
  
      // Get health info
      const [healthRows] = await pool.execute(
        'SELECT * FROM PatientHealthInfo WHERE PID = ?',
        [patientId]
      );
  
      // Get upcoming appointments
      const [upcomingAppointments] = await pool.execute(
        'SELECT a.appointment_date, a.appointment_time, d.Dname FROM Appointment a JOIN Doctor d ON a.DID = d.DID WHERE a.PID = ? AND a.status = "scheduled" ORDER BY a.appointment_date, a.appointment_time LIMIT 1',
        [patientId]
      );
  
      // Get past appointments
      const [pastAppointments] = await pool.execute(
        'SELECT a.appointment_date, a.appointment_time, d.Dname, h.Hname FROM Appointment a JOIN Doctor d ON a.DID = d.DID JOIN Hospital h ON a.HID = h.HID WHERE a.PID = ? AND a.status = "completed" ORDER BY a.appointment_date DESC LIMIT 5',
        [patientId]
      );
  
      res.json({
        patientDetails: patientRows[0],
        healthInfo: healthRows[0],
        upcomingAppointment: upcomingAppointments[0],
        pastAppointments
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });















  router.get('/api/patient/appointment-history/:patientId', async (req, res) => {
    try {
      const patientId = req.params.patientId;
  
      const [rows] = await pool.execute(
        'SELECT h.Hname, d.Dname, a.appointment_date FROM Appointment a JOIN Hospital h ON a.HID = h.HID JOIN Doctor d ON a.DID = d.DID WHERE a.PID = ? ORDER BY a.appointment_date DESC',
        [patientId]
      );
  
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });














  router.post('/api/doctor/register', async (req, res) => {
    try {
      const { HID, Dname, Doccupation } = req.body;
  
      const [result] = await pool.execute(
        'INSERT INTO Doctor (HID, Dname, Doccupation) VALUES (?, ?, ?)',
        [HID, Dname, Doccupation]
      );
  
      res.status(201).json({ message: 'Doctor registered successfully', doctorId: result.insertId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


















  router.get('/api/doctor/:doctorId/active-patients', async (req, res) => {
    try {
      const doctorId = req.params.doctorId;
  
      // Get doctor details
      const [doctorRows] = await pool.execute(
        'SELECT Dname, Doccupation FROM Doctor WHERE DID = ?',
        [doctorId]
      );
  
      // Get active patients
      const [patientRows] = await pool.execute(
        `SELECT pd.Pname, pd.Page, pd.Paddress, 
                dpp.Medical_name, dpp.Buy_quantity,
                CASE WHEN dpp.morning_time THEN 'Morning' ELSE '' END AS morning,
                CASE WHEN dpp.afternoon_time THEN 'Afternoon' ELSE '' END AS afternoon,
                CASE WHEN dpp.evening_time THEN 'Evening' ELSE '' END AS evening
         FROM PatientAppointment pa
         JOIN PatientDetails pd ON pa.PID = pd.PID
         LEFT JOIN DoctorPatientPrescription dpp ON pa.PID = dpp.PID AND pa.DID = dpp.DID
         WHERE pa.DID = ? AND pa.status = 'active'`,
        [doctorId]
      );
  
      res.json({
        doctorDetails: doctorRows[0],
        activePatients: patientRows
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


// 9. Patient Details API
router.get('/patient-details/:patientId', verifyToken, checkRole('patient'), (req, res) => {
  const patientId = req.params.patientId;

  const query = `
      SELECT 
          pd.Pname, pd.Pdob, 
          TIMESTAMPDIFF(YEAR, pd.Pdob, CURDATE()) AS age,
          pd.Pgender, pd.Pblood_group, pd.Pmobile_no, pd.Pemergency_contact, 
          pd.Pemail, pd.Paddress,
          phi.blood_pressure, phi.systolic_pressure, phi.diastolic_pressure, 
          phi.heart_rate, phi.bpm,
          (SELECT JSON_OBJECT(
              'doctorName', d.Dname,
              'time', pa.created_at
          )
          FROM PatientAppointment pa
          JOIN Doctor d ON pa.DID = d.DID
          WHERE pa.PID = pd.PID AND pa.status = 'pending'
          ORDER BY pa.created_at ASC
          LIMIT 1) AS upcomingAppointment,
          (SELECT JSON_ARRAYAGG(
              JSON_OBJECT(
                  'doctorName', d.Dname,
                  'hospitalName', h.Hname,
                  'date', pa.created_at
              )
          )
          FROM PatientAppointment pa
          JOIN Doctor d ON pa.DID = d.DID
          JOIN Hospital h ON pa.HID = h.HID
          WHERE pa.PID = pd.PID AND pa.status = 'completed'
          ORDER BY pa.created_at DESC) AS pastAppointments
      FROM PatientDetails pd
      LEFT JOIN PatientHealthInfo phi ON pd.PID = phi.PID
      WHERE pd.PID = ?`;

  pool.query(query, [patientId], (error, results) => {
      if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Error fetching patient details' });
      }
      res.json(results[0]);
  });
});



// 10. Appointment History API
router.get('/appointment-history/:patientId', verifyToken, checkRole('patient'), (req, res) => {
  const patientId = req.params.patientId;

  const query = `
      SELECT 
          h.Hname AS hospitalName,
          d.Dname AS doctorName,
          pa.created_at AS appointmentDate,
          pa.status
      FROM PatientAppointment pa
      JOIN Hospital h ON pa.HID = h.HID
      JOIN Doctor d ON pa.DID = d.DID
      WHERE pa.PID = ?
      ORDER BY pa.created_at DESC`;

  pool.query(query, [patientId], (error, results) => {
      if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Error fetching appointment history' });
      }
      res.json(results);
  });
});

module.exports = router;