const express = require('express');
const router = express.Router();
const Detachment = require('../models/detachment'); // adjust path as needed

// 🆕 POST /api/detachments — Create a new detachment
router.post('/', async (req, res) => {
  try {
    const detachment = new Detachment(req.body);
    const saved = await detachment.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📥 GET /api/detachments — Fetch all detachments
router.get('/', async (req, res) => {
  try {
    const detachments = await Detachment.find({});
    res.json(detachments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;