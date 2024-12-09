// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animation for service cards
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('system-configurator');
    const steps = document.querySelectorAll('.step-content');
    const stepIndicators = document.querySelectorAll('.step');
    const prevButton = document.querySelector('.prev-step');
    const nextButton = document.querySelector('.next-step');
    const submitButton = document.querySelector('.submit-form');
    let currentStep = 1;

    function updateSteps() {
        steps.forEach(step => step.classList.remove('active'));
        stepIndicators.forEach(indicator => indicator.classList.remove('active'));
        
        document.querySelector(`.step-content[data-step="${currentStep}"]`).classList.add('active');
        document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('active');
        
        prevButton.disabled = currentStep === 1;
        
        if (currentStep === steps.length) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'block';
        } else {
            nextButton.style.display = 'block';
            submitButton.style.display = 'none';
        }
    }

    nextButton.addEventListener('click', () => {
        if (currentStep < steps.length) {
            currentStep++;
            updateSteps();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateSteps();
        }
    });

    // Handle option card selection
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.addEventListener('click', () => {
            const radio = card.querySelector('input[type="radio"]');
            radio.checked = true;
            optionCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you! We will contact you shortly with your custom quote.');
    });
}); 