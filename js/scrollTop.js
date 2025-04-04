    // Scroll to top functionality
    const scrollButton = document.getElementById('scroll');
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    };
    scrollButton.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };