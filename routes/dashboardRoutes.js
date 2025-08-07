const express = require('express');
const router = express.Router();
const Dashboard = require('../models/Dashboard');
const Member = require('../models/Member');
const Activity = require('../models/Activity');
const Donation = require('../models/Donation');
const Expense = require('../models/Expense');
const Experience = require('../models/Experience');
const WeeklyFee = require('../models/WeeklyFee');

// Get dashboard stats
router.get('/', async (req, res) => {
  try {
    // Get the most recent dashboard stats or create a new one if none exists
    let dashboardStats = await Dashboard.findOne().sort({ lastUpdated: -1 });
    
    if (!dashboardStats) {
      dashboardStats = new Dashboard();
    }
    
    res.json(dashboardStats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update dashboard stats
router.post('/update', async (req, res) => {
  try {
    // Count total members
    const totalMembers = await Member.countDocuments();
    
    // Count total activities
    const totalActivities = await Activity.countDocuments();
    
    // Calculate total donations
    const donationsResult = await Donation.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: '$amount' }
        }
      }
    ]);
    const totalDonations = donationsResult.length > 0 ? donationsResult[0].total : 0;
    
    // Calculate total expenses
    const expensesResult = await Expense.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: '$amount' }
        }
      }
    ]);
    const totalExpenses = expensesResult.length > 0 ? expensesResult[0].total : 0;
    
    // Calculate net balance
    const netBalance = totalDonations - totalExpenses;
    
    // Count total experiences
    const totalExperiences = await Experience.countDocuments();
    
    // Calculate weekly fees statistics
    const weeklyFees = await WeeklyFee.find();
    let weeklyFeesCollected = 0;
    let pendingFees = 0;
    let overdueFees = 0;
    
    weeklyFees.forEach(fee => {
      fee.payments.forEach(payment => {
        if (payment.status === 'paid') {
          weeklyFeesCollected += payment.amount;
        } else if (payment.status === 'pending') {
          pendingFees += payment.amount;
        } else if (payment.status === 'overdue') {
          overdueFees += payment.amount;
        }
      });
    });
    
    // Create a new dashboard stats record
    const dashboardStats = new Dashboard({
      totalMembers,
      totalActivities,
      totalDonations,
      totalExpenses,
      netBalance,
      weeklyFeesCollected,
      pendingFees,
      overdueFees,
      totalExperiences,
      lastUpdated: new Date()
    });
    
    const savedStats = await dashboardStats.save();
    res.status(201).json(savedStats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get financial overview data for charts
router.get('/financial-overview', async (req, res) => {
  try {
    // Get donations by month
    const donationsByMonth = await Donation.aggregate([
      {
        $group: {
          _id: { $month: '$date' },
          total: { $sum: '$amount' }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);
    
    // Get expenses by month
    const expensesByMonth = await Expense.aggregate([
      {
        $group: {
          _id: { $month: '$date' },
          total: { $sum: '$amount' }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);
    
    // Get expenses by category
    const expensesByCategory = await Expense.aggregate([
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
    
    res.json({
      donationsByMonth,
      expensesByMonth,
      expensesByCategory
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get recent activities for dashboard
router.get('/recent-activities', async (req, res) => {
  try {
    const recentActivities = await Activity.find()
      .sort({ date: -1 })
      .limit(5);
    
    res.json(recentActivities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;