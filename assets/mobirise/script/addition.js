document.addEventListener('DOMContentLoaded', function() {
    initializeModals();
    initializeFormValidation();
    initializeServiceFields();
});

function initializeModals() {
    // Initialize logistics modal
    initializeLogisticsModal();
    // Initialize contact modal
    initializeContactModal();
}

function initializeLogisticsModal() {
    document.querySelectorAll('[data-target="#logisticsModal"]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            $('#logisticsModal').modal('show');
        });
    });

    const logisticsForm = document.getElementById('logisticsForm');
    if (logisticsForm) {
        logisticsForm.addEventListener('submit', handleLogisticsSubmit);
    }

    $('#logisticsModal').on('hidden.bs.modal', function() {
        resetModal('logistics');
    });
}

function initializeContactModal() {
    document.querySelectorAll('.cntct-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            $('#contactModal').modal('show');
        });
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    $('#contactModal').on('hidden.bs.modal', function() {
        resetModal('contact');
    });
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
