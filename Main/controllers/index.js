const router = require('express').Router();
const apiRoutes = require('./api');
const User = require('../models/User'); // Import User model

router.use('/api', apiRoutes);

// router.get('/navbar', (req, res) => {
//   res.render('navbar');
// });
// Route to handle the homepage request
router.get('/homepage', async (req, res) => {
    const parkName = req.query.parkName; 

    if (!parkName) {
      return res.render('homepage', {activities: []});
    }

    // Fetch activities for the park
    const apiEndpoint = `https://developer.nps.gov/api/v1/thingstodo?q=${parkName}&api_key=92lNKhVrt2znf1zlwHNEEHOPh3xgkEzldzJfhZ63`;

    try {
        const response = await fetch(apiEndpoint);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const activities = data.data ? data.data.map(activity => ({
            title: activity.title,
            image: activity.images && activity.images.length > 0 ? activity.images[0].url : 'default-image-url.jpg'
        })) : [];

        res.render('homepage', { activities, parkName });

    } catch (error) {
        console.error('Error fetching park activities:', error);
        res.render('homepage', { error: 'Unable to fetch activities. Please try again later.' });
    }
});

router.get('/', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  res.render('homepage');
});

// Route to handle login and redirect
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }

  res.render('login');
  });
  
// //RENDER nav
// router.get('/nav', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/homepage');
//     return;
//   }
//   res.render('login');
// });



//     res.render('login');
// });

// Handle login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email } });

    if (user && user.checkPassword(password)) {
      // Successful login
      req.session.user = user; // Save user data in session
      res.status(200).json({ message: 'Login successful' });
    } else {
      // Login failed
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Handle signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create new user
    const newUser = await User.create({ name, email, password });
    res.status(201).json({ message: 'Account created successfully' });
  } catch (error) {
    console.error('Error creating account:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});





module.exports = router;
