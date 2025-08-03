const express = require('express');
const router = express.Router();
const Unit = require('../models/Unit'); // adjust path as needed

// 📥 GET /api/units — Fetch all detachments
router.get('/', async (req, res) => {
  try {
    const unit = await Unit.find({});
    res.json(unit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;