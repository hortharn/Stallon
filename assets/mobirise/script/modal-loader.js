document.addEventListener('DOMContentLoaded', function() {
    // Load modals
    fetch('/includes/modals.html')
        .then(response => response.text())
        .then(html => {
            // Insert modals before closing body tag
            document.body.insertAdjacentHTML('beforeend', html);
            
            // Initialize modal triggers
            initializeModals();
        })
        .catch(error => console.error('Error loading modals:', error));
});

function initializeModals() {
    // Logistics modal initialization
    document.querySelectorAll('[data-toggle="modal"][data-target="#logisticsModal"]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            new bootstrap.Modal(document.getElementById('logisticsModal')).show();
        });
    });

    // Contact modal initialization
    document.querySelectorAll('.cntct-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            new bootstrap.Modal(document.getElementById('contactModal')).show();
        });
    });

    // Form submission handlers
    initializeFormHandlers();
}

function initializeFormHandlers() {
    // Logistics form handler
    const logisticsForm = document.getElementById('logisticsForm');
    if (logisticsForm) {
        logisticsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('modalInitialContent').style.display = 'none';
            document.getElementById('modalSuccessContent').style.display = 'block';
        });
    }

    // Contact form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('contactInitialContent').style.display = 'none';
            document.getElementById('contactSuccessContent').style.display = 'block';
        });
    }

    // Modal reset handlers
    ['logisticsModal', 'contactModal'].forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.addEventListener('hidden.bs.modal', function () {
                const form = modal.querySelector('form');
                if (form) form.reset();
                modal.querySelector('[id$="InitialContent"]').style.display = 'block';
                modal.querySelector('[id$="SuccessContent"]').style.display = 'none';
            });
        }
    });
}