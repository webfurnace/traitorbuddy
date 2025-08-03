const mongoose = require('mongoose');

const detachmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 255
  },
  type: {
    type: String,
    enum: ['Auxillary', 'Apex'],
    required: true
  },
  unitLocks: {
    type: mongoose.Schema.Types.Mixed,
    default: null
  },
  legionLocks: {
    type: mongoose.Schema.Types.Mixed,
    default: null
  },
  maxAllowed: {
    type: Number,
    required: true
  },
  maxAllowedOverrideLegion: {
    type: mongoose.Schema.Types.Mixed,
    default: null
  },
  maxAllowedOverrideUnit: {
    type: mongoose.Schema.Types.Mixed,
    default: null
  }
});

const Detachment = mongoose.model('Detachment', detachmentSchema);
module.exports = Detachment;
