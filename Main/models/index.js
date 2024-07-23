
// import models
const User = require('./User');
const saved_activity = require('./saved_activity');

// const saved_activity = require('./saved_activity')(sequelize, Sequelize.DataTypes);

// activity belongs to use
saved_activity.belongsTo(User, {
  foreignKey: 'user_id',
});

// user can have many activities
User.hasMany(saved_activity, {
  foreignKey: 'user_id',
});


module.exports = {
  User,
  saved_activity,
};


// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(/* your database config here */);



// const db = {};
// db.saved_activity = saved_activity;

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
