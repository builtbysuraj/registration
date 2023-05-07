const express = require('express');
const router = express.Router();
const User = require('./userModel');

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while registering the user." })
  }
});

module.exports = router