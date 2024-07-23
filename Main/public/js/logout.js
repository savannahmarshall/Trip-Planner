// public/js/logout.js

const logoutHandler = async () => {
  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
    });

    if (response.ok) {
      document.location.replace('/');  // Redirect to home page
    } else {
      alert(response.statusText);
    }
  } catch (error) {
    console.error('Logout failed:', error);  // Log error to the console
  }
};

const logoutButton = document.querySelector('#logout-button');

if (logoutButton) {
  logoutButton.addEventListener('click', logoutHandler);
}

