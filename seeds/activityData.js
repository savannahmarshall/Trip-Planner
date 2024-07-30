const { savedActivity } = require("../models");

const activityData = [
  {
    np_activity_id: "71BB3562-AC4B-438D-94E0-784C0671C6C7",
    user_id: "2",
    activity_url: "https://www.nps.gov/thingstodo/weeping-rock.htm",
    activity: "Weeping Rock",
    image:
      "https://www.nps.gov/common/uploads/cropped_image/CB137FB1-BD88-59D0-BAF97CE53CE3EC59.jpg",
    park_name: "Zion National Park",
  },
];

const seedActivities = () => savedActivity.bulkCreate(activityData);

module.exports = seedActivities;