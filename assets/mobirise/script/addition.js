document.addEventListener('DOMContentLoaded', function() {
    // Wait for modals to be loaded before initializing
    setTimeout(() => {
        initializeModals();
        initializeFormValidation();
        initializeServiceFields();
        initializeWhatsAppFloat(); 
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
    //e.preventDefault();
    
    // Here you would typically send the form data to your server
    // const formData = new FormData(this);
    // await sendToServer(formData);
    
    toggleModalContent('logistics', true);
}

function handleContactSubmit(e) {
    //e.preventDefault();
    
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


function initializeWhatsAppFloat() {
    const waFloatBtn = document.getElementById('waFloatBtn');
    const waFloatForm = document.getElementById('waFloatForm');
    const waCloseBtn = document.getElementById('waCloseBtn');
    const waSendBtn = document.getElementById('waSendBtn');

    // Your WhatsApp number
    const waNumber = '+447496875772';

    waFloatBtn.addEventListener('click', function() {
        waFloatForm.classList.add('active');
    });

    waCloseBtn.addEventListener('click', function() {
        waFloatForm.classList.remove('active');
    });

    waSendBtn.addEventListener('click', function() {
        const name = document.getElementById('waName').value;
        const subject = document.getElementById('waSubject').value;
        const message = document.getElementById('waMessage').value;
        
        if (name && subject && message) {
            // Format the message
            const formattedMessage = `*New Message from Website*%0A%0A*Name:* ${name}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
            
            // Create WhatsApp URL
            const waURL = `https://wa.me/${waNumber}?text=${formattedMessage}`;
            
            // Open WhatsApp
            window.open(waURL, '_blank');
            
            // Reset form
            document.getElementById('waName').value = '';
            document.getElementById('waSubject').value = '';
            document.getElementById('waMessage').value = '';
            waFloatForm.classList.remove('active');
        }
    });
}