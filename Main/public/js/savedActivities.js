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
            // const parkName = formData.get('parkName');

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

//////////

// console.log(`!!!!!!!!!!!!!!`);
// document.addEventListener('DOMContentLoaded', function() {
//     console.log(`%%%%%%%%%%%%%%%`);
//     // Select all forms with the class 'save-activity-form'
//     const saveForms = document.querySelectorAll('.unsave-btn-form');
// console.log(`999999999999`, saveForms);
//     saveForms.forEach(form => {
//         console.log(`55555555555`);
//         form.addEventListener('submit', async function(event) {
//             console.log(`777777777`);
//             event.preventDefault(); // Prevent the default form submission

//             console.log(`@@@@@@@@@@@@@@@@@@@`);
//             // Get form data
//             const formData = new FormData(form);
//             const id = formData.get('id');
//             const title = formData.get('title');
//             const image = formData.get('image');
//             const url = formData.get('url');
//             const parkName = formData.get('parkName');
//             // Send AJAX request to save the activity
//             try {
//                 const response = await fetch(`/api/activities/${id}`, {
//                     method: 'DELETE',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 });

//                 if (response.ok) {
//                     alert('Activity deleted successfully!');
//                 } else {
//                     alert('Failed to delete activity.');
//                 }
//             } catch (error) {
//                 console.error('Error deleting activity:', error);
//                 alert('An error occurred while deleting the activity.');
//             }
//         });
//     });
// });

