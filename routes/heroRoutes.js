const express = require('express');
const router = express.Router();
const HeroSlide = require('../models/HeroSlide');

// Get all hero slides
router.get('/', async (req, res) => {
  try {
    const heroSlides = await HeroSlide.find().sort({ createdAt: -1 });
    res.json(heroSlides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single hero slide
router.get('/:id', getHeroSlide, (req, res) => {
  res.json(res.heroSlide);
});

// Create a hero slide
router.post('/', async (req, res) => {
  const heroSlide = new HeroSlide({
    title: req.body.title,
    subtitle: req.body.subtitle,
    description: req.body.description,
    backgroundImage: req.body.backgroundImage,
    ctaText: req.body.ctaText,
    ctaLink: req.body.ctaLink,
    redirectUrl: req.body.redirectUrl,
    openNewTab: req.body.openNewTab
  });

  try {
    const newHeroSlide = await heroSlide.save();
    res.status(201).json(newHeroSlide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a hero slide
router.patch('/:id', getHeroSlide, async (req, res) => {
  if (req.body.title != null) {
    res.heroSlide.title = req.body.title;
  }
  if (req.body.subtitle != null) {
    res.heroSlide.subtitle = req.body.subtitle;
  }
  if (req.body.description != null) {
    res.heroSlide.description = req.body.description;
  }
  if (req.body.backgroundImage != null) {
    res.heroSlide.backgroundImage = req.body.backgroundImage;
  }
  if (req.body.ctaText != null) {
    res.heroSlide.ctaText = req.body.ctaText;
  }
  if (req.body.ctaLink != null) {
    res.heroSlide.ctaLink = req.body.ctaLink;
  }
  if (req.body.redirectUrl != null) {
    res.heroSlide.redirectUrl = req.body.redirectUrl;
  }
  if (req.body.openNewTab != null) {
    res.heroSlide.openNewTab = req.body.openNewTab;
  }

  try {
    const updatedHeroSlide = await res.heroSlide.save();
    res.json(updatedHeroSlide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a hero slide
router.delete('/:id', getHeroSlide, async (req, res) => {
  try {
    await res.heroSlide.remove();
    res.json({ message: 'Hero slide deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get hero slide by ID
async function getHeroSlide(req, res, next) {
  let heroSlide;
  try {
    heroSlide = await HeroSlide.findById(req.params.id);
    if (heroSlide == null) {
      return res.status(404).json({ message: 'Hero slide not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.heroSlide = heroSlide;
  next();
}

module.exports = router;