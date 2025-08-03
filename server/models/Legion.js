const mongoose = require('mongoose');

const LegionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // prevents duplicates
    trim: true
  }
}, {
  timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model('Legion', LegionSchema);