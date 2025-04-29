// Scroll to top functionality
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.scroll-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});