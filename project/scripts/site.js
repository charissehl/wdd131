// Burger and close buttons
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


// Hero images
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const pictures = document.querySelectorAll('.slider picture');
    const images = document.querySelectorAll('.slider img'); // Get all <img> elements
    const totalImages = images.length;

    function showNextImage() {
        // Remove 'active' class from the current image and picture
        images[currentIndex].classList.remove('active');
        pictures[currentIndex].classList.remove('active');

        // Update the index to the next image
        currentIndex = (currentIndex + 1) % totalImages;

        // Add 'active' class to the next image and picture
        images[currentIndex].classList.add('active');
        pictures[currentIndex].classList.add('active');
    }

    // Initially show the first image
    images[currentIndex].classList.add('active');
    pictures[currentIndex].classList.add('active');

    // Change image every 5 seconds
    setInterval(showNextImage, 5000);
});


// Contact form
document.addEventListener('DOMContentLoaded', function () {

    // Select form and elements
    const form = document.querySelector('#contactForm');
    const formResponse = document.querySelector('#formResponse');

    // Array to store previous submissions (for demo purposes)
    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        // Validate inputs
        if (!name || !email || !message) {
            formResponse.innerHTML = `<p class="error">Please fill out all fields!</p>`;
            return;
        }

        // Create an object to store submission data
        const formData = {
            name,
            email,
            message,
            timestamp: new Date().toISOString() // Adding a timestamp
        };

        // Add the formData object to the array
        submissions.push(formData);

        // Save to localStorage
        localStorage.setItem('submissions', JSON.stringify(submissions));

        // Display success message
        formResponse.innerHTML = `
            <p class="success">Thank you, ${name}! Your message has been received.</p>
        `;

        // Optionally, reset the form fields
        form.reset();
    }

    // Event listener for form submission
    form.addEventListener('submit', handleFormSubmit);

    // Function to show previous submissions (optional, can be expanded)
    function displayPreviousSubmissions() {
        if (submissions.length > 0) {
            let submissionList = '<h3>Previous Submissions:</h3><ul>';
            submissions.forEach(submission => {
                submissionList += `
                    <li>
                        <strong>${submission.name}</strong> (${submission.email})<br>
                        <em>Message:</em> ${submission.message}<br>
                        <small>Received on: ${new Date(submission.timestamp).toLocaleString()}</small>
                    </li>
                `;
            });
            submissionList += '</ul>';
            formResponse.innerHTML += submissionList;
        } else {
            formResponse.innerHTML += '<p>No previous submissions.</p>';
        }
    }

    // Display previous submissions when page loads
    displayPreviousSubmissions();

});


