const logoutHandler = async (e) => {
  e.preventDefault();
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

  logoutButton.addEventListener('submit', logoutHandler);
}

