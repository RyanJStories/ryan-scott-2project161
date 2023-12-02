const express = require('express');
const router = express.Router();
const RecentPurchase = require('../models/RecentPurchase');

router.post('/recent-purchases', async (req, res) => {
  const { items, userId } = req.body; 

  try {
    const newRecentPurchase = new RecentPurchase({
      items,
      userId,
    });

    const savedPurchase = await newRecentPurchase.save();
    res.json(savedPurchase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;