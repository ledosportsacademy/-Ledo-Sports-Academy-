const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// Get all experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ date: -1 });
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single experience
router.get('/:id', getExperience, (req, res) => {
  res.json(res.experience);
});

// Create an experience
router.post('/', async (req, res) => {
  const experience = new Experience({
    title: req.body.title,
    date: req.body.date,
    description: req.body.description,
    image: req.body.image
  });

  try {
    const newExperience = await experience.save();
    res.status(201).json(newExperience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an experience
router.patch('/:id', getExperience, async (req, res) => {
  Object.keys(req.body).forEach(key => {
    if (req.body[key] != null) {
      res.experience[key] = req.body[key];
    }
  });

  try {
    const updatedExperience = await res.experience.save();
    res.json(updatedExperience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an experience
router.delete('/:id', getExperience, async (req, res) => {
  try {
    await res.experience.deleteOne();
    res.json({ message: 'Experience deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get experience by ID
async function getExperience(req, res, next) {
  let experience;
  try {
    experience = await Experience.findById(req.params.id);
    if (experience == null) {
      return res.status(404).json({ message: 'Experience not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.experience = experience;
  next();
}

module.exports = router;