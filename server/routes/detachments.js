const express = require('express');
const router = express.Router();
const Detachment = require('../models/Detachment'); // adjust path as needed

// 📥 GET /api/detachments — Fetch all detachments
router.get('/', async (req, res) => {
  try {
    const detachment = await Detachment.find({}).populate('type');
    res.json(detachment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;