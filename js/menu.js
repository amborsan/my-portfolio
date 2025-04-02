document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');
    
    console.log('Menu script loaded');
    
    // Toggle menu on hamburger click
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent click from propagating
            console.log('Hamburger clicked');
            navbar.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (navbar.classList.contains('active') && !navbar.contains(event.target)) {
                navbar.classList.remove('active');
            }
        });
        
        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
            });
        });
    } else {
        console.error('Hamburger menu not found');
    }
});