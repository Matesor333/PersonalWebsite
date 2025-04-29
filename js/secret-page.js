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
});