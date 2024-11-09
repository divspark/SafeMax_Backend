const express = require('express');
const app = express();  
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const appointmentRoutes = require('./routes/AppointmentRoutes');
const adminRoutes = require('./routes/AdminRoutes');
const PORT = process.env.PORT || 3000;

require('dotenv').config();

app.use(bodyParser.json());
app.use(cors({
  origin: 'https://safe-max-backend.vercel.app/', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'], // Allowed HTTP methods
  credentials: true // Optional: if your frontend needs cookies or authorization headers
}));
app.use(bodyParser.urlencoded({ extended: true }));


connectDB();

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
  });
  

// Routes
app.use('/api/appointment', appointmentRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});