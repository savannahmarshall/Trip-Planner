document.addEventListener('DOMContentLoaded', function() {
    // Select all forms with the class 'save-activity-form'
    const saveForms = document.querySelectorAll('.save-btn-form');

    saveForms.forEach(form => {
        form.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get form data
            const formData = new FormData(form);
            const id = formData.get('id');
            const fullName = formData.get('fullName');
            const title = formData.get('title');
            const image = formData.get('image');
            const url = formData.get('url');

            // Send AJAX request to save the activity
            try {
                const response = await fetch('/api/activities', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id, fullName, title, image, url })
                });

                if (response.ok) {
                    window.location.reload();
                } else {
                    alert('Failed to save activity.');
                }
            } catch (error) {
                console.error('Error saving activity:', error);
                alert('An error occurred while saving the activity.');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Select all forms with the class 'delete-btn-form'
  const deleteForms = document.querySelectorAll('.delete-btn-form');

  // Loop through each form and add an event listener for the 'submit' event
  deleteForms.forEach(form => {
    form.addEventListener('submit', async function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the activity ID from the form data
      const formData = new FormData(form);
      const activityId = formData.get('id');

      // Send AJAX request to delete the activity
      try {
        const response = await fetch(`/api/activities/${activityId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          window.location.reload(); // Reload the page if the request was successful
        } else {
          alert('Failed to delete activity.'); // Show an alert if the request failed
        }
      } catch (error) {
        console.error('Error deleting activity:', error); // Log the error to the console
        alert('An error occurred while deleting the activity.'); // Show an alert if an error occurred
      }
    });
  });
});