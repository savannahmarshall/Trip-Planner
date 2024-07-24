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

        const activities = data.data ? data.data.map(activity => activity.title) : [];
        
        res.render('search', { activities, parkName });
        console.log(apiEndpoint);
    } catch (error) {
        console.error('Error fetching park activities:', error);
        res.render('search', { error: 'Unable to fetch activities. Please try again later.' });
    }
  });
  router.get('/', (req, res) => {
    res.render('search');
  });


router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;


