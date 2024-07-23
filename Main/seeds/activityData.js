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
    "activity": "Hike the La Jara Trail",
    "activity_description": "This 1.5-mile (2.4 km) hiking loop circles Cerro La Jara, the smallest volcanic dome in the park, which formed about 500,000 years ago when lava oozed up and onto the caldera floor.",
    "activity_photo": "https://www.nps.gov/common/uploads/cropped_image/DB3ADD73-BFFF-4DB7-48F7A11555D60B07.jpg",
    "activity_url": "https://www.nps.gov/thingstodo/hike-the-la-jara-trail.htm"
  },
  {
    "user_id": "1",
    "park_name": "Aniakchak National Monument & Preserve",
    "activity": "Self-Join a Ranger Program at Reconstruction Era National Historical Park",
    "activity_description": "Join a ranger for a program at any of our three sites: Downtown Beaufort, Darrah Hall, or Pinckney-Porter’s Chapel. Program time and days vary at each site; check our calendar to find out what’s happening.",
    "activity_photo": "https://www.nps.gov/common/uploads/cropped_image/EFFBD5F2-B6A4-DBEE-BAFE2F151B83DBCC.jpg",
    "activity_url": "https://www.nps.gov/ania/planyourvisit/{{activity_name}}.htm"
  },
  {
    "user_id": "2",
    "park_name": "Glen Canyon National Recreation Area",
    "activity": "Day Trip or Backpack Hike to Coyote Gulch",
    "activity_description": "Open year-round but most popular in Spring and Fall, Coyote Gulch is a tributary of the Escalante River with several entry points for day hiking or backpacking in the Escalante Canyons of Glen Canyon National Recreation Area and Grand Staircase National Monument. This is a wilderness area, prepare to pack out everything you bring in.",
    "activity_photo": "https://www.nps.gov/common/uploads/cropped_image/A1A3EA69-E3C6-20EF-905E6674746654B8.jpg",
    "activity_url": "https://www.nps.gov/thingstodo/join-a-ranger-program-at-reconstruction-era-national-historical-park.htm"
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
