const express = require('express');
const router = express.Router();
const UnitType = require('../models/UnitType'); // adjust path as needed

// 📥 GET /api/unit-types — Fetch all detachments
router.get('/', async (req, res) => {
  try {
    const unitType = await UnitType.find({});
    res.json(unitType);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;