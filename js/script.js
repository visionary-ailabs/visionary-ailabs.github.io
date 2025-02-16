
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Replace with your Google Apps Script URL
    https://script.google.com/macros/s/AKfycbzOfI8xEXTrdUQPOFndXm6ud0tYQpTnzu6StEu0UHI/dev
    const scriptURL = 'hhttps://script.google.com/macros/s/AKfycbzOfI8xEXTrdUQPOFndXm6ud0tYQpTnzu6StEu0UHI/dev/exec';

// Send data to Google Apps Script
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Thank you for contacting Visionary AI Labs! We will get back to you soon.');
        document.getElementById('contactForm').reset(); // Clear the form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    });
});







