
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Replace with your Google Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw0rIc6IUoSEb_cgoxx8EP--8Bc199bI98OWkaKmB4kFBVcxpsaVMglpMdQhBNDBa4g/exec';

    // Send data to Google Apps Script
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => {
        alert('Thank you for contacting Visionary AI Labs! We will get back to you soon.');
        document.getElementById('contactForm').reset(); // Clear the form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    });
});

