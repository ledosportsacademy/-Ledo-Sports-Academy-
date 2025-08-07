const express = require('express');
const router = express.Router();
const WeeklyFee = require('../models/WeeklyFee');

// Get all weekly fees
router.get('/', async (req, res) => {
  try {
    const weeklyFees = await WeeklyFee.find().sort({ memberName: 1 });
    res.json(weeklyFees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get weekly fees for a specific member
router.get('/member/:memberId', async (req, res) => {
  try {
    const weeklyFees = await WeeklyFee.find({ memberId: req.params.memberId });
    res.json(weeklyFees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get fee statistics (collected, pending, overdue)
router.get('/stats', async (req, res) => {
  try {
    const weeklyFees = await WeeklyFee.find();
    
    let collected = 0;
    let pending = 0;
    let overdue = 0;
    
    weeklyFees.forEach(fee => {
      fee.payments.forEach(payment => {
        if (payment.status === 'paid') {
          collected += payment.amount;
        } else if (payment.status === 'pending') {
          pending += payment.amount;
        } else if (payment.status === 'overdue') {
          overdue += payment.amount;
        }
      });
    });
    
    res.json({
      collected,
      pending,
      overdue
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single weekly fee record
router.get('/:id', getWeeklyFee, (req, res) => {
  res.json(res.weeklyFee);
});

// Create a weekly fee record
router.post('/', async (req, res) => {
  const weeklyFee = new WeeklyFee({
    memberId: req.body.memberId,
    memberName: req.body.memberName,
    payments: req.body.payments
  });

  try {
    const newWeeklyFee = await weeklyFee.save();
    res.status(201).json(newWeeklyFee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add a payment to a member's weekly fee record
router.post('/:id/payments', getWeeklyFee, async (req, res) => {
  const payment = {
    date: req.body.date,
    amount: req.body.amount,
    status: req.body.status
  };
  
  res.weeklyFee.payments.push(payment);
  
  try {
    const updatedWeeklyFee = await res.weeklyFee.save();
    res.json(updatedWeeklyFee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a payment status
router.patch('/:id/payments/:paymentId', getWeeklyFee, async (req, res) => {
  const payment = res.weeklyFee.payments.id(req.params.paymentId);
  
  if (!payment) {
    return res.status(404).json({ message: 'Payment not found' });
  }
  
  if (req.body.status) {
    payment.status = req.body.status;
  }
  if (req.body.amount) {
    payment.amount = req.body.amount;
  }
  if (req.body.date) {
    payment.date = req.body.date;
  }
  
  try {
    const updatedWeeklyFee = await res.weeklyFee.save();
    res.json(updatedWeeklyFee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a weekly fee record
router.patch('/:id', getWeeklyFee, async (req, res) => {
  if (req.body.memberName) {
    res.weeklyFee.memberName = req.body.memberName;
  }
  if (req.body.payments) {
    res.weeklyFee.payments = req.body.payments;
  }
  
  try {
    const updatedWeeklyFee = await res.weeklyFee.save();
    res.json(updatedWeeklyFee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a weekly fee record
router.delete('/:id', getWeeklyFee, async (req, res) => {
  try {
    await res.weeklyFee.deleteOne();
    res.json({ message: 'Weekly fee record deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get weekly fee by ID
async function getWeeklyFee(req, res, next) {
  let weeklyFee;
  try {
    weeklyFee = await WeeklyFee.findById(req.params.id);
    if (weeklyFee == null) {
      return res.status(404).json({ message: 'Weekly fee record not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.weeklyFee = weeklyFee;
  next();
}

module.exports = router;