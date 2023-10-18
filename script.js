document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('nav a');

    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Remove the '#'
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll smoothly to the target section
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
