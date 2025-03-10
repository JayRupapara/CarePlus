// Import required modules
const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Create connection pool for MySQL
const pool = mysql.createPool({
    port : process.env.db_port,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    timezone: "Z",
    // port: process.env.DB_PORT,
    // socketPath: process.env.DB_SOCKET_PATH // Ensure the correct path variable
});

// Create express app
const app = express();
const router = express.Router();

app.use(cookieParser());

// Middleware to parse JSON bodies
router.use(express.json());

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // Query database to find user
    pool.query('SELECT * FROM users WHERE Username = ?', [username], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const user = results[0];

        // Check if account status is verified
        if (user.AccountStatus !== 'Verified') {
            return res.status(403).json({ message: 'Account not verified. Please verify your account before logging in.' });
        }

        // Compare provided password with stored password (not using bcrypt)
        if (password !== user.Password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const userId = user.UserID;
        const role = user.Role;
        const sem = user.sem;
        const classs = user.class;
        const batch = user.batch;

        let dashboard;
        if (role === "Admin") {
            dashboard = "Admin";
        } else if (role === "Faculty") {
            dashboard = "Faculty";
        } else {
            dashboard = "Student";
        }

        // Generate JWT token
        const accessToken = jwt.sign(
            { username: username, role: role, userID: userId, sem: sem, classs: classs, batch: batch },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Send response
        res.json({
            role: dashboard,
            token: accessToken,
            status: "User logged in successfully"
        });
    });
});




router.post('/login-hospital', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM hospital WHERE Hemail = ?';
    pool.query(query, [email], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const hospital = results[0];

        // Simple password comparison without bcrypt
        if (hospital.Hpassword !== password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: hospital.HID, role: 'hospital' },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token, hospitalId: hospital.HID });
    });
});



router.post('/login-patient', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM patientdetails WHERE Pemail = ?';
    pool.query(query, [email], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const patient = results[0];

        // Simple password comparison
        if (patient.Ppassword !== password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: patient.PID, role: 'patient' },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token, patientId: patient.PID });
    });
});






module.exports = router;
