const { savedActivity } = require('../models');

const activityData = 
[
  {
    "user_id": "1",
    "park_name": "Abraham Lincoln Birthplace National Historical Park",
    "activity": "Stargazing",
    "image": "https://www.nps.gov/common/uploads/structured_data/3C861078-1DD8-B71B-0B774A242EF6A706.jpg",
    "activity_url": "https://www.nps.gov/abli/planyourvisit/{{activity_name}}.htm"
  },
  {
    "user_id": "2",
    "park_name": "Acadia National Park",
    "activity": "Hiking",
    "image": "https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg",
    "activity_url": "https://www.nps.gov/acad/planyourvisit/{{activity_name}}.htm"
  },
  {
    "user_id": "3",
    "park_name": "Adams National Historical Park",
    "activity": "Hike the La Jara Trail",
    "image": "https://www.nps.gov/common/uploads/cropped_image/DB3ADD73-BFFF-4DB7-48F7A11555D60B07.jpg",
    "activity_url": "https://www.nps.gov/thingstodo/hike-the-la-jara-trail.htm"
  },
  {
    "user_id": "1",
    "park_name": "Aniakchak National Monument & Preserve",
    "activity": "Self-Join a Ranger Program at Reconstruction Era National Historical Park",
    "image": "https://www.nps.gov/common/uploads/cropped_image/EFFBD5F2-B6A4-DBEE-BAFE2F151B83DBCC.jpg",
    "activity_url": "https://www.nps.gov/ania/planyourvisit/{{activity_name}}.htm"
  },
  {
    "user_id": "2",
    "park_name": "Glen Canyon National Recreation Area",
    "activity": "Day Trip or Backpack Hike to Coyote Gulch",
    "image": "https://www.nps.gov/common/uploads/cropped_image/A1A3EA69-E3C6-20EF-905E6674746654B8.jpg",
    "activity_url": "https://www.nps.gov/thingstodo/join-a-ranger-program-at-reconstruction-era-national-historical-park.htm"
  },
  {
    "user_id": "3",
    "park_name": "Arches National Park",
    "activity": "Backpacking at Arches",
    "image": "https://www.nps.gov/common/uploads/cropped_image/039BA0D6-FB75-6D44-AE4F9551C3C73E9C.jpg",
    "activity_url": "https://www.nps.gov/thingstodo/backpacking-at-arches.htm"
  },
  {
    "user_id": "2",
    "park_name": "Zion National Park",
    "activity": "Weeping Rock",
    "image": "https://www.nps.gov/common/uploads/cropped_image/primary/CB137FB1-BD88-59D0-BAF97CE53CE3EC59.jpg",
    "activity_url": "https://www.nps.gov/thingstodo/weeping-rock.htm"
  }
];

const seedActivities = () => savedActivity.bulkCreate(activityData);

module.exports = seedActivities;
