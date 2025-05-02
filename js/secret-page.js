// Apply dark mode immediately before page renders
document.documentElement.classList.add('dark-mode');

// Force dark mode for secret page
document.addEventListener("DOMContentLoaded", function() {
    // Add dark-mode class to both html and body elements regardless of user preference
    document.documentElement.classList.add('dark-mode');
    document.body.classList.add('dark-mode');

    // Update icon to show sun (indicating dark mode is active)
    const darkModeIcon = document.getElementById('darkModeIcon');
    if (darkModeIcon) {
        darkModeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    // Disable the dark mode toggle button functionality for this page
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        // Replace the click event listener with one that does nothing
        // We can't directly remove the original listener, but we can override it
        darkModeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            // Optional: Show a message that dark mode is always enabled on this page
            console.log("Dark mode is always enabled on the secret page");
            return false;
        });
    }

    // Enhanced gradient animation effects
    const title = document.querySelector('.secret-title');
    const subtitle = document.querySelector('.secret-subtitle');
    const container = document.querySelector('.modern-text-container');

    if (title && subtitle && container) {
        // Adjust animation speed based on mouse movement
        document.addEventListener('mousemove', function(e) {
            const xPosition = (e.clientX / window.innerWidth);
            const yPosition = (e.clientY / window.innerHeight);

            // Adjust the animation speed slightly based on mouse position
            const animationDuration = 8 + (xPosition * 4); // Between 8-12s
            title.style.setProperty('--animation-duration', `${animationDuration}s`);
            subtitle.style.setProperty('--animation-duration', `${animationDuration + 1}s`);

            // Subtle parallax effect on the container
            container.style.transform = `translate(${xPosition * 10 - 5}px, ${yPosition * 10 - 5}px)`;
            container.style.transition = 'transform 0.3s ease-out';
        });

        // Add subtle pulse effect on scroll
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            const scale = 1 + (scrollPosition * 0.05);

            title.style.transform = `scale(${scale})`;
            title.style.transition = 'transform 0.5s ease-out';
        });
    }
});
