const mongoose = require('mongoose');

const UnitTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // prevents duplicates
    trim: true
  }
}, {
  timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model('UnitType', UnitTypeSchema);