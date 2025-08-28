document.addEventListener('DOMContentLoaded', function() {
    // Wait for modals to be loaded before initializing
    setTimeout(() => {
        initializeModals();
        initializeFormValidation();
        initializeServiceFields();
    }, 500);
});

function initializeModals() {
    // Initialize logistics modal
    document.querySelectorAll('[data-target="#logisticsModal"]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const modal = new bootstrap.Modal(document.getElementById('logisticsModal'));
            modal.show();
        });
    });

    // Initialize contact modal
    document.querySelectorAll('.cntct-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const modal = new bootstrap.Modal(document.getElementById('contactModal'));
            modal.show();
        });
    });

    // Form handlers
    const logisticsForm = document.getElementById('logisticsForm');
    if (logisticsForm) {
        logisticsForm.addEventListener('submit', handleLogisticsSubmit);
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Modal cleanup handlers
    ['logisticsModal', 'contactModal'].forEach(modalId => {
        const modalElement = document.getElementById(modalId);
        if (modalElement) {
            modalElement.addEventListener('hidden.bs.modal', function() {
                resetModal(modalId.replace('Modal', ''));
                // Clean up any orphaned backdrops
                document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
                    backdrop.remove();
                });
                document.body.classList.remove('modal-open');
                document.body.style.removeProperty('padding-right');
            });
        }
    });
}

// ... rest of your existing functions ...