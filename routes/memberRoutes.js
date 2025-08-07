const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// Get all members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find().sort({ name: 1 });
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single member
router.get('/:id', getMember, (req, res) => {
  res.json(res.member);
});

// Create a member
router.post('/', async (req, res) => {
  const member = new Member({
    name: req.body.name,
    contact: req.body.contact,
    phone: req.body.phone,
    joinDate: req.body.joinDate,
    role: req.body.role,
    image: req.body.image
  });

  try {
    const newMember = await member.save();
    res.status(201).json(newMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a member
router.patch('/:id', getMember, async (req, res) => {
  Object.keys(req.body).forEach(key => {
    if (req.body[key] != null) {
      res.member[key] = req.body[key];
    }
  });

  try {
    const updatedMember = await res.member.save();
    res.json(updatedMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a member
router.delete('/:id', getMember, async (req, res) => {
  try {
    await res.member.deleteOne();
    res.json({ message: 'Member deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get member by ID
async function getMember(req, res, next) {
  let member;
  try {
    member = await Member.findById(req.params.id);
    if (member == null) {
      return res.status(404).json({ message: 'Member not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.member = member;
  next();
}

module.exports = router;