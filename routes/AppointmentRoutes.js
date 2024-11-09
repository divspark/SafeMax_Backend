const express = require('express');
const { createAppointment,getAllAppointments,updateAppointment,assignToDepartment } = require('../controllers/AppointmentController');
const authMiddleware = require('../middlewares/authmiddleware');

const router = express.Router();

// Public route to create a new appointment
router.post('/create', createAppointment);

// Admin routes
// Get all appointments (requires authentication)
router.get('/all', authMiddleware, getAllAppointments);

// Update appointment status and admin response (requires authentication)
router.patch('/update/:id', authMiddleware, updateAppointment);

// Assign an appointment to a specific department (requires authentication)
router.patch('/update/:id/department', authMiddleware, assignToDepartment);

module.exports = router;
