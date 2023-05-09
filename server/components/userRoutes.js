const express = require('express');
const router = express.Router();
const User = require('./userModel');

// Registration
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    newUser.save();
    res.status(201).json({ message: 'User registered successfully!', userId: newUser._id });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while registering the user." })
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  } catch (err) {
    res.status(500).send({ message: "An error occurred while processing your request" });
  }
})

module.exports = router