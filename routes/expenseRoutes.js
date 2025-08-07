const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Get all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get total expenses amount
router.get('/total', async (req, res) => {
  try {
    const result = await Expense.aggregate([
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

// Get expenses by category
router.get('/category', async (req, res) => {
  try {
    const result = await Expense.aggregate([
      {
        $group: {
          _id: '$category',
          total: { $sum: '$amount' }
        }
      },
      {
        $sort: { total: -1 }
      }
    ]);
    
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single expense
router.get('/:id', getExpense, (req, res) => {
  res.json(res.expense);
});

// Create an expense
router.post('/', async (req, res) => {
  const expense = new Expense({
    description: req.body.description,
    amount: req.body.amount,
    date: req.body.date,
    category: req.body.category,
    vendor: req.body.vendor,
    paymentMethod: req.body.paymentMethod
  });

  try {
    const newExpense = await expense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an expense
router.patch('/:id', getExpense, async (req, res) => {
  Object.keys(req.body).forEach(key => {
    if (req.body[key] != null) {
      res.expense[key] = req.body[key];
    }
  });

  try {
    const updatedExpense = await res.expense.save();
    res.json(updatedExpense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an expense
router.delete('/:id', getExpense, async (req, res) => {
  try {
    await res.expense.deleteOne();
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get expense by ID
async function getExpense(req, res, next) {
  let expense;
  try {
    expense = await Expense.findById(req.params.id);
    if (expense == null) {
      return res.status(404).json({ message: 'Expense not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.expense = expense;
  next();
}

module.exports = router;