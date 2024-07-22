const router = require('express').Router();
const { saved_activity, user } = require('../../models');

// GET all products
router.get('/', async (req, res) => {
  try {
    const activities = await saved_activity.findAll({
      include: [{ model: user }],
    });
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve activities', error: err });
  }
});



// GET all products
router.get('/', async (req, res) => {
    try {
      const activities = await saved_activity.findAll({
        include: [{ model: user }],
      });
      res.status(200).json(activities);
    } catch (err) {
      res.status(500).json({ message: 'Failed to retrieve activities', error: err });
    }
  });
  

// GET all activities for a specific user id
router.get('/:user_id', async (req, res) => {
    const user_id = req.params.user_id;
  try {
    
    const userActivities = await saved_activity.find({ user_id: user_id });

    if (!userActivities) {
      res.status(404).json({ message: 'No activity found with this id!' });
      return;
    }

    res.status(200).json(userActivities);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve activities', error: err });
  }
});

//Get all activities for a user for a specific park
router.get('/:user_id/:park_name', async (req, res) => {
    const user_id = req.params.user_id;
    const park_name =  req.params.park_name;
  try {
    
    const userParkActivities = await saved_activity.find({ user_id: user_id, park_name: park_name });

    if (!userParkActivities) {
      res.status(404).json({ message: 'No activity found with this id!' });
      return;
    }

    res.status(200).json(userParkActivities);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve activities', error: err });
  }
});


// POST a new saved activity by user

router.post('/', async (req, res) => {
    try {
      const newSavedActivity = await saved_activity.create(req.body);
      res.json(newSavedActivity);
        res.status(201).json(newSavedActivity);
    } catch (err) {
      res.status(400).json({ message: 'Failed to create product', error: err });
    }  
  });

// PUT update a saved activity by id

//
router.put('/:id', async (req, res) => {
    const id = req.params.userId;
    const updatedActivityData = req.body; // Assuming req.body contains updated activity data
  
    try {
      // Update the activities for the specified userId
      const updatedActivity = await Activity.findOneAndUpdate(
        updatedActivityData,
        { new: true } // Return the updated document
      );
  
      // Check if the activity was found and updated
      if (updatedActivity) {
        res.json(updatedActivity); // Send the updated activity as JSON response
      } else {
        res.status(404).json({ message: 'Activity not found for the specified user ID' });
      }
    } catch (err) {
      // Handle errors (e.g., database errors)
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

// DELETE an activity by id
router.delete('/:id', async (req, res) => {
  try {
    await saved_activity.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ message: 'activity deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete activity', error: err });
  }
});

module.exports = router;
