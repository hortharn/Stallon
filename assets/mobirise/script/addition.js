// Add this code before the closing </body> tag
document.getElementById('logisticsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically send the email to your server
    // For now, we'll just show the success message
    
    document.getElementById('modalInitialContent').style.display = 'none';
    document.getElementById('modalSuccessContent').style.display = 'block';
    
    // Optional: Send the email to your server
    const email = document.getElementById('emailInput').value;
    // Add your email handling logic here
});

// Reset modal on close
$('#logisticsModal').on('hidden.bs.modal', function () {
    document.getElementById('modalInitialContent').style.display = 'block';
    document.getElementById('modalSuccessContent').style.display = 'none';
    document.getElementById('logisticsForm').reset();
});


// Initialize contact modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to all buttons with cntct-btn class
    document.querySelectorAll('.cntct-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            $('#contactModal').modal('show');
        });
    });

    // Handle contact form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to your server
        // For now, we'll just show the success message
        
        document.getElementById('contactInitialContent').style.display = 'none';
        document.getElementById('contactSuccessContent').style.display = 'block';
        
        // Optional: Reset form
        this.reset();
    });

    // Reset modal on close
    $('#contactModal').on('hidden.bs.modal', function () {
        document.getElementById('contactInitialContent').style.display = 'block';
        document.getElementById('contactSuccessContent').style.display = 'none';
        document.getElementById('contactForm').reset();
    });
});