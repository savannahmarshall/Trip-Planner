const { Model, DataTypes } = require ("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection.js");

class saved_activity extends Model {}

saved_activity.init(
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
    activity_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    activity_photo: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    activity_url: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    // created_at: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW,
    //   },
    // updated_at: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW,
    //   },  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "saved_activity",
  }
);

//export product tag model
module.exports = saved_activity;
