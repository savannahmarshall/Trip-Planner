const router = require('express').Router();
const userRoutes = require('./userRoutes');
const activityRoutes = require('./activityRoutes');


router.use('/users', userRoutes);
router.use('/activities', activityRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });

module.exports = router;
