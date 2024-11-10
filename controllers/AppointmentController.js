const Appointment = require('../models/AppointmentSchema');

// Create a new appointment (Public)
const createAppointment = async (req, res) => {
    try {
        const { clientName, clientEmail, appointmentDate, comments } = req.body;

        const newAppointment = new Appointment({
            clientName,
            clientEmail,
            appointmentDate,
            comments,
            concerningDepartment: null // Initialize concerning department to null
        });

        await newAppointment.save();

        // Return _id along with appointment details
        res.status(201).json({ 
            message: 'Appointment created successfully', 
            appointment: { ...newAppointment.toObject(), _id: newAppointment._id } 
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating appointment', error: error.message });
    }
};

// Get all appointments (Admin-only)
const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        // Return appointments with _id field
        res.status(200).json(appointments.map(appt => ({ ...appt.toObject(), _id: appt._id })));
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments', error: error.message });
    }
};

// Update appointment status and response (Admin-only)
const updateAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, adminResponse } = req.body;

        const appointment = await Appointment.findById(id);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        appointment.status = status || appointment.status;
        appointment.adminResponse = adminResponse || appointment.adminResponse;

        await appointment.save();

        // Return updated appointment with _id
        res.status(200).json({ 
            message: 'Appointment updated successfully', 
            appointment: { ...appointment.toObject(), _id: appointment._id } 
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating appointment', error: error.message });
    }
};

// Assign an appointment to a concerning department (Admin-only)
const assignToDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const { department } = req.body;

        const appointment = await Appointment.findById(id);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        // Update the concerning department
        appointment.concerningDepartment = department;
        await appointment.save();

        // Return the updated appointment with _id
        res.status(200).json({ 
            message: 'Appointment assigned to department successfully', 
            appointment: { ...appointment.toObject(), _id: appointment._id } 
        });
    } catch (error) {
        res.status(500).json({ message: 'Error assigning appointment to department', error: error.message });
    }
};

module.exports = {
    createAppointment,
    getAllAppointments,
    updateAppointment,
    assignToDepartment
};
