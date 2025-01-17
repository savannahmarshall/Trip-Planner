const router = require('express').Router();
const { savedActivity, User } = require('../../models');

// GET all activities
router.get('/', async (req, res) => {
  try {
    const activities = await savedActivity.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(activities);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
});

// GET all activities for a specific user id
router.get('/:user_id', async (req, res) => {
    const user_id = req.params.user_id;
  try {

    const userActivities = await savedActivity.findAll({ 
        where: [{ user_id: user_id }],
        });
    if (!userActivities) {
      res.status(404).json({ message: 'No activity found with this id!' });
      return;
    }
    res.status(200).json(userActivities);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to retrieve user activities', error: err });
  }
});


//Get all activities for a user for a specific park
router.get('/:user_id/:park_name', async (req, res) => {
    const user_id = req.params.user_id;
    const park_name =  req.params.park_name;
  try {
    const userParkActivities = await savedActivity.findAll({ 
        where: { user_id: user_id, park_name: park_name},
    } );
    if (!userParkActivities) {
      res.status(404).json({ message: 'No activity found with this id!' });
      return;
    }
    res.status(200).json(userParkActivities);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to retrieve user activities', error: err });
  }
});


// POST a new saved activity by user
        // Save the activity to the database or perform any necessary actions
router.post('/', async (req, res) => {
  const { id, title, fullName, image, url, parkName } = req.body;
    try {
      console.log({ id, title, fullName, image, url });

      const newSavedActivity = await savedActivity.create({ 
        np_activity_id:id, 
        user_id:req.session.user.id,
        activity: title, 
        park_name: fullName, 
        image: image, 
        activity_url: url })

    res.status(201).json(newSavedActivity);
    // res.redirect(`/homepage?parkName=${parkName}`);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Failed to create activity', error: err });
    }  
  });

/// Put -Update an existing category by id
router.put('/:id', async (req, res) => {
    try {
      const [updated] = await savedActivity.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      if (updated) {
        const updatedActivity = await savedActivity.findByPk(req.params.id);
        res.json(updatedActivity);
      } else {
        res.status(404).json({ message: 'No activity found with this id!' });
      }
    } catch (err) {
        console.log(err);
      res.status(400).json(err);
    }
  });
  

// DELETE an activity by id
router.delete('/:id', async (req, res) => {
  const { parkName } = req.body;
  try {
    await savedActivity.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: 'activity deleted successfully' });
    // res.redirect(`/homepage?parkName=${parkName}`);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to delete activity', error: err });
  }
});

// DELETE an activity by id
router.delete('/:id', async (req, res) => {
  const { parkName } = req.body;
  try {
    await savedActivity.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: 'activity deleted successfully' });
    // res.redirect(`/homepage?parkName=${parkName}`);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to delete activity', error: err });
  }
});

module.exports = router;

module.exports = router;
