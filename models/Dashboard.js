const mongoose = require('mongoose');

const DashboardSchema = new mongoose.Schema({
  totalMembers: {
    type: Number,
    required: true,
    default: 0
  },
  totalActivities: {
    type: Number,
    required: true,
    default: 0
  },
  totalDonations: {
    type: Number,
    required: true,
    default: 0
  },
  totalExpenses: {
    type: Number,
    required: true,
    default: 0
  },
  netBalance: {
    type: Number,
    required: true,
    default: 0
  },
  weeklyFeesCollected: {
    type: Number,
    required: true,
    default: 0
  },
  pendingFees: {
    type: Number,
    required: true,
    default: 0
  },
  overdueFees: {
    type: Number,
    required: true,
    default: 0
  },
  totalExperiences: {
    type: Number,
    required: true,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Dashboard', DashboardSchema);