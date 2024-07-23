// public/profile.js

// Function to fetch and display saved activities
const fetchActivities = async () => {
  try {
    // Fetch activities for the logged-in user
    const response = await fetch('/api/activities', {
      method: 'GET',
    });

    if (response.ok) {
      const activities = await response.json();
      const activityList = document.querySelector('.activity-list');

      // Clear any existing activities
      activityList.innerHTML = '';

      // Populate the activity list
      activities.forEach((activity) => {
        const activityItem = document.createElement('li');
        activityItem.classList.add('activity-item');
        activityItem.innerHTML = `
          <span>${activity.name}</span>
          <span>${activity.description}</span>
          <span>Funding Needed: $${activity.needed_funding}</span>
          <button data-id="${activity.id}" class="delete-activity-btn">Delete</button>
        `;
        activityList.appendChild(activityItem);
      });

    } else {
      throw new Error('Failed to fetch activities');
    }
  } catch (error) {
    alert(error.message);
  }
};

// Handler for deleting an activity
const delButtonHandler = async (event) => {
  if (event.target.classList.contains('delete-activity-btn')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/users/activities/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      fetchActivities();  // Refresh the activity list
    } else {
      alert('Failed to delete activity');
    }
  }
};

// Handler for logging out
const logoutButtonHandler = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
  });

  if (response.ok) {
    document.location.replace('/');  // Redirect to home page
  } else {
    alert('Failed to log out');
  }
};

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  fetchActivities();  // Fetch activities when the page loads

  document
    .querySelector('.activity-list')
    .addEventListener('click', delButtonHandler);

  const logoutButton = document.querySelector('#logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', logoutButtonHandler);
  }
});
