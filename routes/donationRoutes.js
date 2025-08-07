const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// Get all donations
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find().sort({ date: -1 });
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get total donations amount
router.get('/total', async (req, res) => {
  try {
    const result = await Donation.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: '$amount' }
        }
      }
    ]);
    
    const totalAmount = result.length > 0 ? result[0].total : 0;
    res.json({ totalAmount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single donation
router.get('/:id', getDonation, (req, res) => {
  res.json(res.donation);
});

// Create a donation
router.post('/', async (req, res) => {
  const donation = new Donation({
    donorName: req.body.donorName,
    amount: req.body.amount,
    date: req.body.date,
    purpose: req.body.purpose
  });

  try {
    const newDonation = await donation.save();
    res.status(201).json(newDonation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a donation
router.patch('/:id', getDonation, async (req, res) => {
  Object.keys(req.body).forEach(key => {
    if (req.body[key] != null) {
      res.donation[key] = req.body[key];
    }
  });

  try {
    const updatedDonation = await res.donation.save();
    res.json(updatedDonation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a donation
router.delete('/:id', getDonation, async (req, res) => {
  try {
    await res.donation.deleteOne();
    res.json({ message: 'Donation deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get donation by ID
async function getDonation(req, res, next) {
  let donation;
  try {
    donation = await Donation.findById(req.params.id);
    if (donation == null) {
      return res.status(404).json({ message: 'Donation not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.donation = donation;
  next();
}

module.exports = router;