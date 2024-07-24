const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  res.render('search');
}
);

router.get('/main', (req, res) => {
  res.render('main');
  });

router.get('/home', (req, res) => {
  res.render('homepage');
}
);

router.get('/login', (req, res) => {
  res.render('login');
}
);


router.get('/nav', (req, res) => {
  res.render('navbar');
}
);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;


