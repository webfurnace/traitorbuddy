const express = require('express');
const router = express.Router();
const DetachmentType = require('../models/DetachmentType'); // adjust path as needed

// 🆕 POST /api/detachments — Create a new detachment
router.post('/', async (req, res) => {
  try {
    const detachmentType = new DetachmentType(req.body);
    const saved = await detachmentType.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📥 GET /api/detachment-types — Fetch all detachments
router.get('/', async (req, res) => {
  try {
    const detachmentType = await DetachmentType.find({});
    res.json(detachmentType);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;