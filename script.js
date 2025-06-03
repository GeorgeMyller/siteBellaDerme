// JavaScript for the skincare clinic landing page

// Example: Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Form submission handling (basic)
const form = document.querySelector('#contact form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real application, you would send this data to a server
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
}
