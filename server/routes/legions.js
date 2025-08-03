const express = require('express');
const router = express.Router();
const Legion = require('../models/Legion'); // adjust path as needed

// 📥 GET /api/legion — Fetch all detachments
router.get('/', async (req, res) => {
  try {
    const legion = await Legion.find({});
    res.json(legion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;