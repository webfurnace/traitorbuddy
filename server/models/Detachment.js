const mongoose = require('mongoose');

const DetachmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DetachmentType',
    required: true
  },

  unitTypes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UnitType'
  }],

  maxAllowed: {
    type: Number,
    default: 0
  },

  unlockUnit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unit',
    default: null
  },

  unlockLegion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Legion',
    default: null
  },

  required: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Detachment', DetachmentSchema);