const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true,
        trim:true
    },
    clientEmail: {
        type: String,
        required: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    comments: {
        type: String
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Canceled'],
        default: 'Pending'
    },
    adminResponse: {
        type: String,
        default: ''
    },
    concerningDepartment: {
        type: String,
        required: false,
        default: null
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Appointment', appointmentSchema);

