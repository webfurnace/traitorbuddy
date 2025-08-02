const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');   //DB ORM
require('dotenv').config();

//DB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/TraitorBuddy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB error:', err));

const app = express();
app.use(cors());
app.use(express.json());

// Serve React static files
app.use(express.static(path.join(__dirname, '../client/build')));

// API routes (placeholder)
app.get('/api/ping', (req, res) => res.json({ message: 'pong' }));

// Catch-all to serve React
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

