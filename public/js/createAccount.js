// Get the modal
const createAccountModal = document.getElementById('signup-modal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == createAccountModal) {
        createAccountModal.style.display = "none";
    }
}