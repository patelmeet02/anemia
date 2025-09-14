// JavaScript for Anemic Disease Detection System
document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Form validation and submission
    const predictForm = document.getElementById('predictForm');
    if (predictForm) {
        predictForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading animation
            const loading = document.getElementById('loading');
            if (loading) {
                loading.style.display = 'block';
            }
            
            // Validate form inputs
            const inputs = this.querySelectorAll('input[required], select[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#dc3545';
                    showError(input, 'This field is required');
                } else {
                    input.style.borderColor = '#dee2e6';
                    hideError(input);
                    
                    // Validate numeric inputs
                    if (input.type === 'number') {
                        const value = parseFloat(input.value);
                        if (isNaN(value) || value < 0) {
                            isValid = false;
                            input.style.borderColor = '#dc3545';
                            showError(input, 'Please enter a valid positive number');
                        }
                    }
                }
            });
            
            if (isValid) {
                // Submit form
                this.submit();
            } else {
                // Hide loading animation
                if (loading) {
                    loading.style.display = 'none';
                }
            }
        });
    }
    
    // Input validation on change
    const numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(input => {
        input.addEventListener('input', function() {
            const value = parseFloat(this.value);
            if (this.value && (isNaN(value) || value < 0)) {
                this.style.borderColor = '#dc3545';
                showError(this, 'Please enter a valid positive number');
            } else {
                this.style.borderColor = '#dee2e6';
                hideError(this);
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .parameter-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click animation to buttons
    const buttons = document.querySelectorAll('.btn, .tab-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Helper functions
function showError(input, message) {
    hideError(input); // Remove existing error
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#dc3545';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '5px';
    errorDiv.textContent = message;
    
    input.parentNode.appendChild(errorDiv);
}

function hideError(input) {
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

// Add some interactive features
function addInteractiveFeatures() {
    // Add tooltips for parameter ranges
    const parameterCards = document.querySelectorAll('.parameter-card');
    parameterCards.forEach(card => {
        const rangeElement = card.querySelector('.normal-range');
        if (rangeElement) {
            rangeElement.title = 'Normal range for healthy individuals';
            rangeElement.style.cursor = 'help';
        }
    });
    
    // Add copy to clipboard functionality for important values
    const copyButtons = document.querySelectorAll('[data-copy]');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy');
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Show success message
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                this.style.backgroundColor = '#28a745';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.backgroundColor = '';
                }, 2000);
            });
        });
    });
}

// Initialize interactive features when DOM is loaded
document.addEventListener('DOMContentLoaded', addInteractiveFeatures);

// Handle image loading errors
function handleImageErrors() {
    const images = document.querySelectorAll('.medical-image');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create a fallback div with medical icon
            const fallback = document.createElement('div');
            fallback.className = 'image-fallback';
            fallback.style.cssText = `
                width: 100%;
                height: 200px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 3rem;
                margin: 20px 0;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            `;
            fallback.innerHTML = `
                <div style="font-size: 3rem; margin-bottom: 10px;">🩺</div>
                <div style="font-size: 1rem; text-align: center;">Medical Image</div>
            `;
            
            // Replace the broken image with fallback
            this.parentNode.replaceChild(fallback, this);
        });
    });
}

// Initialize image error handling
document.addEventListener('DOMContentLoaded', handleImageErrors);

// Add some visual feedback for form interactions
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('input, select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.style.transform = 'scale(1.02)';
            this.parentNode.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentNode.style.transform = 'scale(1)';
        });
    });
});
