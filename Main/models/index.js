const User = require('./User');
const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };



///

// import models
const User = require('./User');
const Activity = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// activity belongs to use
Activity.belongsTo(User, {
  foreignKey: 'user_id',
});

// user can have many activities
User.hasMany(Activity, {
  foreignKey: 'user_id',
});


module.exports = {
  User,
  Activity,
};

