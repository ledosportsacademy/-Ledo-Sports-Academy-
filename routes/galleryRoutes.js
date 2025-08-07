const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');

// Get all gallery items
router.get('/', async (req, res) => {
  try {
    const galleryItems = await Gallery.find().sort({ createdAt: -1 });
    res.json(galleryItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get top 5 featured gallery items
router.get('/top-five', async (req, res) => {
  try {
    const topFive = await Gallery.find({ isTopFive: true }).sort({ order: 1 }).limit(5);
    res.json(topFive);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get gallery items by album
router.get('/album/:album', async (req, res) => {
  try {
    const galleryItems = await Gallery.find({ album: req.params.album }).sort({ createdAt: -1 });
    res.json(galleryItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single gallery item
router.get('/:id', getGalleryItem, (req, res) => {
  res.json(res.galleryItem);
});

// Create a gallery item
router.post('/', async (req, res) => {
  const galleryItem = new Gallery({
    title: req.body.title,
    url: req.body.url,
    album: req.body.album,
    isTopFive: req.body.isTopFive || false,
    order: req.body.order || 0
  });

  try {
    const newGalleryItem = await galleryItem.save();
    res.status(201).json(newGalleryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a gallery item
router.patch('/:id', getGalleryItem, async (req, res) => {
  Object.keys(req.body).forEach(key => {
    if (req.body[key] != null) {
      res.galleryItem[key] = req.body[key];
    }
  });

  try {
    const updatedGalleryItem = await res.galleryItem.save();
    res.json(updatedGalleryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Toggle top five status
router.patch('/:id/toggle-top-five', getGalleryItem, async (req, res) => {
  try {
    // If setting to top five, check if we already have 5 items
    if (!res.galleryItem.isTopFive) {
      const topFiveCount = await Gallery.countDocuments({ isTopFive: true });
      
      if (topFiveCount >= 5) {
        return res.status(400).json({ message: 'Maximum 5 featured photos allowed. Remove one first.' });
      }
      
      // Find next available order
      const usedOrders = await Gallery.find({ isTopFive: true }).distinct('order');
      let nextOrder = 1;
      
      for (let i = 1; i <= 5; i++) {
        if (!usedOrders.includes(i)) {
          nextOrder = i;
          break;
        }
      }
      
      res.galleryItem.order = nextOrder;
    } else {
      // If removing from top five, reset order
      res.galleryItem.order = 0;
    }
    
    res.galleryItem.isTopFive = !res.galleryItem.isTopFive;
    
    const updatedGalleryItem = await res.galleryItem.save();
    res.json(updatedGalleryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update top five order
router.patch('/:id/update-order/:order', getGalleryItem, async (req, res) => {
  try {
    const order = parseInt(req.params.order);
    
    if (order < 1 || order > 5) {
      return res.status(400).json({ message: 'Order must be between 1 and 5' });
    }
    
    // Check if another photo has this order
    const existingPhoto = await Gallery.findOne({ order: order, _id: { $ne: res.galleryItem._id } });
    
    if (existingPhoto) {
      existingPhoto.isTopFive = false;
      existingPhoto.order = 0;
      await existingPhoto.save();
    }
    
    res.galleryItem.isTopFive = true;
    res.galleryItem.order = order;
    
    const updatedGalleryItem = await res.galleryItem.save();
    res.json(updatedGalleryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a gallery item
router.delete('/:id', getGalleryItem, async (req, res) => {
  try {
    await res.galleryItem.deleteOne();
    res.json({ message: 'Gallery item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get gallery item by ID
async function getGalleryItem(req, res, next) {
  let galleryItem;
  try {
    galleryItem = await Gallery.findById(req.params.id);
    if (galleryItem == null) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.galleryItem = galleryItem;
  next();
}

module.exports = router;