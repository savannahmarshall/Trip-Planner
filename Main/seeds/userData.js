

const { User } = require('../models');

const userData = 
[
  {
    "email": "sal@hotmail.com",
    "password": "password12345"
  },
  {
    "email": "lernantino@gmail.com",
    "password": "password12345"
  },
  {
    "email": "amiko2k20@aol.com",
    "password": "password12345"
  }
  ,
  {
    "email": "dafixooe0@aol.com",
    "password": "passwo38d2345"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
