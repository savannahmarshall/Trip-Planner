
// import models
const User = require('./User');
const savedActivity = require('./saved_activity');

// activity belongs to user
savedActivity.belongsTo(User, {
  foreignKey: 'user_id',
});

// user can have many activities
User.hasMany(savedActivity, {
  foreignKey: 'user_id',
});


module.exports = {
  User,
  savedActivity,
};
