const router = require('express').Router();

const apiRoutes = require('./api');
const activitiesRoutes = require('./activities');

router.use('/', activitiesRoutes);
router.use('/api', apiRoutes);

module.exports = router;
