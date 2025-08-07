const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity');

// Get all activities
router.get('/', async (req, res) => {
  try {
    const activities = await Activity.find().sort({ date: -1 });
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get activities by status (upcoming or recent)
router.get('/status/:status', async (req, res) => {
  try {
    const activities = await Activity.find({ status: req.params.status }).sort({ date: 1 });
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single activity
router.get('/:id', getActivity, (req, res) => {
  res.json(res.activity);
});

// Create an activity
router.post('/', async (req, res) => {
  const activity = new Activity({
    title: req.body.title,
    date: req.body.date,
    time: req.body.time,
    description: req.body.description,
    image: req.body.image,
    status: req.body.status,
    type: req.body.type,
    priority: req.body.priority,
    redirectUrl: req.body.redirectUrl,
    openNewTab: req.body.openNewTab
  });

  try {
    const newActivity = await activity.save();
    res.status(201).json(newActivity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an activity
router.patch('/:id', getActivity, async (req, res) => {
  Object.keys(req.body).forEach(key => {
    if (req.body[key] != null) {
      res.activity[key] = req.body[key];
    }
  });

  try {
    const updatedActivity = await res.activity.save();
    res.json(updatedActivity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an activity
router.delete('/:id', getActivity, async (req, res) => {
  try {
    await res.activity.deleteOne();
    res.json({ message: 'Activity deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get activity by ID
async function getActivity(req, res, next) {
  let activity;
  try {
    activity = await Activity.findById(req.params.id);
    if (activity == null) {
      return res.status(404).json({ message: 'Activity not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.activity = activity;
  next();
}

module.exports = router;