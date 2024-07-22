const { saved_activity } = require('../models');

const activityData = [
  {
    "user_id": "1",
    "park_name": "Abraham Lincoln Birthplace National Historical Park",
    "activity": "Stargazing",
    "activity_description": "Astronomy",
    "activity_photo": "https://www.nps.gov/common/uploads/structured_data/3C861078-1DD8-B71B-0B774A242EF6A706.jpg",
    "activity_url": "https://www.nps.gov/abli/planyourvisit/{{activity_name}}.htm"
  },
  {
    "user_id": "2",
    "park_name": "Acadia National Park",
    "activity": "Hiking",
    "activity_description": "Hiking opportunities at Acadia are seemingly endless on more than 150 miles of trails. Immerse yourself in forests, walk along rocky coastlines, or stand on exposed mountain tops — sometimes all in one hike. Do not be fooled by the height of the park's mountains; challenging hikes climb from sea level to summits. If a leisurely stroll along the coast or around a lake is more your pace, there are plenty of easier, more level options. Many trails can also be combined with walks on the carriage roads and dirt fire roads.",
    "activity_photo": "https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg",
    "activity_url": "https://www.nps.gov/acad/planyourvisit/{{activity_name}}.htm"
  },
  {
    "user_id": "3",
    "park_name": "Adams National Historical Park",
    "activity": "Fishing",
    "activity_description": "",
    "activity_photo": "https://www.nps.gov/common/uploads/structured_data/8942542D-B88C-8E75-525D5D8E60126209.jpg",
    "activity_url": "https://www.nps.gov/adam/planyourvisit/{{activity_name}}.htm"
  },
  {
    "user_id": "1",
    "park_name": "Aniakchak National Monument & Preserve",
    "activity": "Self-Guided Tours - Walking",
    "activity_description": "",
    "activity_photo": "",
    "activity_url": "https://www.nps.gov/ania/planyourvisit/{{activity_name}}.htm"
  },
  {
    "user_id": "2",
    "park_name": "Glen Canyon National Recreation Area",
    "activity": "Day Trip or Backpack Hike to Coyote Gulch",
    "activity_description": "Open year-round but most popular in Spring and Fall, Coyote Gulch is a tributary of the Escalante River with several entry points for day hiking or backpacking in the Escalante Canyons of Glen Canyon National Recreation Area and Grand Staircase National Monument. This is a wilderness area, prepare to pack out everything you bring in.",
    "activity_photo": "https://www.nps.gov/common/uploads/cropped_image/A1A3EA69-E3C6-20EF-905E6674746654B8.jpg",
    "activity_url": "https://www.nps.gov/thingstodo/day-trip-or-backpack-hike-to-coyote-gulch.htm"
  },
  {
    "user_id": "3",
    "park_name": "Arches National Park",
    "activity": "Backpacking at Arches",
    "activity_description": "Backpacking at Arches is allowed in designated sites only and requires a permit.",
    "activity_photo": "https://www.nps.gov/common/uploads/cropped_image/039BA0D6-FB75-6D44-AE4F9551C3C73E9C.jpg",
    "activity_url": "https://www.nps.gov/thingstodo/backpacking-at-arches.htm"
  },
  {
    "user_id": "2",
    "park_name": "Zion National Park",
    "activity": "Weeping Rock",
    "activity_description": "Short but steep! From the parking area, you'll cross the bridge and head to the left onto a paved trail to Weeping Rock. Along the way, look for small trailside exhibits and watch for minor drop-offs. The trail ends at a set of steps leading you to a rock alcove with dripping springs.",
    "activity_photo": "https://www.nps.gov/common/uploads/cropped_image/primary/CB137FB1-BD88-59D0-BAF97CE53CE3EC59.jpg",
    "activity_url": "https://www.nps.gov/thingstodo/weeping-rock.htm"
  }
];

const seedActivities = () => saved_activity.bulkCreate(activityData);

module.exports = seedActivities;
