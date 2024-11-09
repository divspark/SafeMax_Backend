const mongoose = require('mongoose');
require('dotenv').config(); // to load environment variables from .env file

// MongoDB connection URI from environment variables
const MONGO_URI = process.env.MONGO_URI || 'your-default-mongodb-uri-here';

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
