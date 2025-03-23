require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./db'); // Import the DB connection file
const routes = require('./routes/tea'); // Import routes
const helmet = require('helmet');
const compression = require('compression');
const app = express();

// Security & Performance Middleware
app.use(helmet());
app.use(compression());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Serve static files (including index.html)
app.use(express.static(path.join(__dirname, 'public'))); // Ensure index.html is in "public"

// Use API routes
app.use('/api', routes); // Use API routes under "/api"
// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Your app is listening on port ${PORT}`);
});
