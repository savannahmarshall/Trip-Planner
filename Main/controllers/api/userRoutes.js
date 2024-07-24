// routes/api/users.js

const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const saved_activity = require('../../models/saved_activity');

// Handle user login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check the password
    const validPassword = user.checkPassword(password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Save user data to session
    req.session.user_id = user.id;
    req.session.email = user.email;
    req.session.logged_in = true;  // Add a flag to indicate that the user is logged in

    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Handle user signup
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create a new user
    const newUser = await User.create({ name, email, password });

    // Save user data to session
    req.session.user_id = newUser.id;
    req.session.email = newUser.email;
    req.session.logged_in = true;  // Add a flag to indicate that the user is logged in

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Handle user logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.json({ message: 'Logout successful' });
    });
  } else {
    res.status(404).json({ message: 'No user to log out' });
  }
});

// Fetch activities for the logged-in user
router.get('/activities', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Fetch activities associated with the logged-in user
    const activities = await saved_activity.findAll({
      where: { user_id: req.session.user_id },
    });

    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
