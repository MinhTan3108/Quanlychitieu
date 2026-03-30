require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect Database
connectDB();

// Routes
app.use('/api/expenses', require('./routes/expenses'));
app.use('/api/about', require('./routes/about'));

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Home route
app.get('/', (req, res) => {
  res.json({ 
    message: process.env.APP_NAME,
    version: '1.0.0',
    endpoints: {
      expenses: '/api/expenses',
      about: '/api/about',
      health: '/health'
    }
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

module.exports = app;
