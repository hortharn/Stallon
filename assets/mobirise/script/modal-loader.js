document.addEventListener('DOMContentLoaded', function() {
    // Load modals
    fetch('/includes/modals.html')
        .then(response => response.text())
        .then(html => {
            // Insert modals before closing body tag
            document.body.insertAdjacentHTML('beforeend', html);
        })
        .catch(error => console.error('Error loading modals:', error));
});