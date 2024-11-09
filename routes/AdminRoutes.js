const express = require('express');
const { registerAdmin, loginAdmin } = require('../controllers/AdminController');

const router = express.Router();

// Register a new admin
router.post('/register', registerAdmin);

// Login an admin
router.post('/login', loginAdmin);

module.exports = router;
