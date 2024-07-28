const { Model, DataTypes } = require ("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection.js");

class savedActivity extends Model {}

savedActivity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    park_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    activity: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      },
    activity_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "saved_activity",
  }
);

//export product tag model
module.exports = savedActivity;
