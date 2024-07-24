// const API_KEY = '92lNKhVrt2znf1zlwHNEEHOPh3xgkEzldzJfhZ63';
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Route to handle the search request
router.get('/search', async (req, res) => {
    const parkName = req.query.parkName; 
  
    if (!parkName) {
      return res.render('/search', { error: 'Park name is required.' });
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

        
        res.render('search', { activities, parkName });

    } catch (error) {
        console.error('Error fetching park activities:', error);
        res.render('search', { error: 'Unable to fetch activities. Please try again later.' });
    }
  });

  router.get('/', (req, res) => {
    res.render('search');
  });

  // route to handle login and redirect
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }
  
    res.render('login');
  });
  
  // router.get('layouts/main', (req, res) => {
  
  //   res.render('main');
  // });


// Handle login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Replace with real authentication logic
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    // Successful login
    req.session.user = user; // Save user data in session
    res.status(200).json({ message: 'Login successful' });
  } else {
    // Login failed
    res.status(401).json({ message: 'Invalid email or password' });
  }
});


// Handle signup
router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  // Replace with real validation and saving logic
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Email already in use' });
  }
  users.push({ name, email, password });
  res.status(201).json({ message: 'Account created successfully' });
});


// I am not sure that we need this, it messes up the login page if we have it uncommented.
// // Catch-all route for other paths
// router.get('*', (req, res) => {
//   res.send("<h1>Wrong Route!</h1>");
// });

module.exports = router;

