
const express = require('express');
const path = require('path');
const cors = require('cors');
const detachmentRoutes = require('./routes/detachmentRoutes');

//Load Config and Secrets off Server
require('dotenv').config();

//ORM and Database
const mongoose = require('mongoose');   //DB ORM

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

app.use('/api/detachments', detachmentRoutes);

// Catch-all to serve React
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

