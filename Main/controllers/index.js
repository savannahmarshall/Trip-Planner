const router = require('express').Router();

const apiRoutes = require('./api');
// const activityRoutes = require('./activities');

router.use('/api', apiRoutes);

module.exports = router;
