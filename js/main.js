// main.js

document.addEventListener("DOMContentLoaded", function() {
    // Initialize the hamburger menu
    const menuToggle = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            // Toggle classes for both elements to ensure compatibility with CSS
            navbar.classList.toggle('active');
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active'); // For hamburger animation
            
            console.log('Menu toggled');
        });
        
        // Close menu when clicking on links
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navbar.classList.remove('active');
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            // If click is outside the navbar and menu is open
            if (!navbar.contains(event.target) && navLinks.classList.contains('active')) {
                navbar.classList.remove('active');
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // Initialize carousels
    initializeCarousels();
});

function initializeCarousels() {
    const projectCarousel = document.querySelector('.project-carousel');
    const postCarousel = document.querySelector('.post-carousel');

    // Add functionality for project carousel
    if (projectCarousel) {
        // Add your carousel logic here
    }

    // Add functionality for post carousel
    if (postCarousel) {
        // Add your carousel logic here
    }
}