document.addEventListener('DOMContentLoaded', function() {
    // Wait for modals to be loaded before initializing
    setTimeout(() => {
        initializeModals();
        initializeFormValidation();
        initializeServiceFields();
    }, 350);
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

    // Form handlers - just show success message without submission
    const logisticsForm = document.getElementById('logisticsForm');
    if (logisticsForm) {
        logisticsForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent form submission
            if (this.checkValidity()) {
                document.getElementById('modalInitialContent').style.display = 'none';
                document.getElementById('modalSuccessContent').style.display = 'block';
            }
            this.classList.add('was-validated');
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent form submission
            if (this.checkValidity()) {
                document.getElementById('contactInitialContent').style.display = 'none';
                document.getElementById('contactSuccessContent').style.display = 'block';
            }
            this.classList.add('was-validated');
        });
    }

    // Reset modals when closed
    ['logisticsModal', 'contactModal'].forEach(modalId => {
        const modalElement = document.getElementById(modalId);
        if (modalElement) {
            modalElement.addEventListener('hidden.bs.modal', function() {
                const initialContent = this.querySelector('[id$="InitialContent"]');
                const successContent = this.querySelector('[id$="SuccessContent"]');
                const form = this.querySelector('form');
                
                if (initialContent) initialContent.style.display = 'block';
                if (successContent) successContent.style.display = 'none';
                if (form) {
                    form.reset();
                    form.classList.remove('was-validated');
                }
                
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

/*
TODO: Properly Store the values to the server using AJAX or Fetch API
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
}
function handleLogisticsSubmit(e) {
    e.preventDefault();
    
    // Here you would typically send the form data to your server
    // const formData = new FormData(this);
    // await sendToServer(formData);
    
    toggleModalContent('logistics', true);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    // Here you would typically send the form data to your server
    // const formData = new FormData(this);
    // await sendToServer(formData);
    
    toggleModalContent('contact', true);
}

function toggleModalContent(modalType, showSuccess) {
    const initialContent = document.getElementById(`${modalType}InitialContent`);
    const successContent = document.getElementById(`${modalType}SuccessContent`);
    
    if (initialContent && successContent) {
        initialContent.style.display = showSuccess ? 'none' : 'block';
        successContent.style.display = showSuccess ? 'block' : 'none';
    }
}

function resetModal(modalType) {
    toggleModalContent(modalType, false);
    const form = document.getElementById(`${modalType}Form`);
    if (form) {
        form.reset();
        form.classList.remove('was-validated');
    }
}

function initializeFormValidation() {
    document.querySelectorAll('.needs-validation').forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
}
*/
function initializeServiceFields() {
    const otherServiceCheckbox = document.getElementById('otherService');
    if (otherServiceCheckbox) {
        otherServiceCheckbox.addEventListener('change', function() {
            const otherField = document.getElementById('otherServiceField');
            if (otherField) {
                otherField.classList.toggle('d-none', !this.checked);
            }
        });
    }
}
