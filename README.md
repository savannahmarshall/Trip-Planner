# Trip Planner

## Description
This Node.js and Express.js application functions as a trip planner. Users are greeted with a login page where they can create a new account by providing their email and choosing a password. Once registered, users can log in and access the homepage. Here, they can search for any National Park and view a list of activities available at that park. Users can save activities for trip planning and can remove activities from the saved list as needed. The activites are sorted by park. This application aims to simplify the often stressful task of trip planning.

### Key Learnings:
* **Interactive Full-Stack Application:** Refined skills in creating an interactive, full-stack web application using Node.js and Express.js.
* **Defined GET and POST Routes:** Implemented GET and POST routes to retrieve and add data efficiently.
* **Insomnia:** Utilized Insomnia to identify and test API endpoints.
* **PostgreSQL & Sequilize ORM:** Leveraged PostgreSQL and Sequelize for robust database management.
* **MVC Structure:** Followed the Model-View-Controller (MVC) paradigm to maintain a clean and organized codebase.
* **Handlebars.js:** Employed Handlebars.js as the template engine for dynamic HTML rendering.

### Challenges Faced:
* **Modularization** Managing modularization was challenging due to the large number of files.
* **Debugging** Debugging multiple components was necessary due to the complexity of the file structure and content.

By overcoming these challenges, we enhanced our collaboration skills and developed a polished, functional full-stack application.

## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To use this application, you must install [Node.js](https://nodejs.org/en). Before running the application, install the necessary dependencies by typing npm install into the terminal.

## Usage

To use this application, follow these steps:

1. **Ensure Node.js is Installed:**  Confirm that Node.js is installed on your computer. If not, download and install it from the official Node.js website (link provided in the installation section above).

2. **Install Dependencies:** Navigate to the project folder in your command-line interface and run the following command to install the necessary dependencies:
   * npm install 
3. **Modify .env.EXAMPLE:** Update this file with your PostgreSQL username and password and ensure that the db name is db_parks.

4. **Run the Application:** Start the server by typing:
   * node server.js

5. **Navigate to the URL:** Open your browser and go to the following URL: http://localhost:3001/.

6. **Create a New Account:** Create a new account by entering your email and password on the right-hand side of the login page.
    * Your password must be more than 8 characters to be accepted.
    * Your email must follow a standard email format.

7. **Login and Search for a Park:**  Log in and search for a National Park. Save activities that interest you.

8. **View/Save Activities:** Click the "Saved Activities" button to view your list of saved activities, which are separated by park.

9. **Delete Activites:** Use the delete button to remove activities from your saved list.


**Please click [here](https://github.com/savannahmarshall/Trip-Planner) to view the GitHub repository for this application.**


![screenshot of login page]()

![screenshot of homepage]()

![screenshot of saved activites]()




## Contributing
* [JavaScript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en)
* [Express.js](https://jestjs.io/)
* [Handlebars](https://handlebarsjs.com/guide/)
* [Render](https://dashboard.render.com/)
* [API](https://www.nps.gov/subjects/developer/api-documentation.htm#/activities/getActivities)
* [PostgreSQL](https://www.postgresql.org/)
* [Sequelize](https://sequelize.org/)

## License
This project is licensed under the [MIT License](https://opensource.org/license/MIT). 

## Tests
No tests are required for this application.

## Questions
Please contact us directly with any questions. Our GitHub accounts are below:

[Andrea Fuentes](https://github.com/dreyuhh) <br/>
[Danielle Boenisch](https://github.com/danielleboe) <br/>
[Savannah Marshall](https://github.com/savannahmarshall) <br/>
[Matt Johnson](https://github.com/MattAJ26)
