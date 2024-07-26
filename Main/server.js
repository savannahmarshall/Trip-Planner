const express = require('express');
const session = require('express-session'); // Import session
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers');
const sequelize = require('./config/connection'); // Import Sequelize connection
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
const hbs = exphbs.create({});


app.use(session(sess));

// Set up Handlebars engine
app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

// Define a route for the homepage
app.get('/', (req, res) => {
  res.render('homepage', { title: 'Home Page' });
});

// Sync Sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
