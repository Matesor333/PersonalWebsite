// Function to update active navigation link based on scroll position
function updateActiveNavLink() {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll("section[id]");

    // Get current scroll position
    const scrollY = window.pageYOffset;

    // Loop through sections to find the one in view
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100; // Offset for header height
        const sectionId = current.getAttribute("id");

        // Check if the current scroll position is within this section
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Remove active class from all navigation links
            document.querySelectorAll(".nav-link").forEach(navLink => {
                navLink.classList.remove("active");
            });

            // Add active class to the corresponding navigation link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}

// Function to handle scroll reveal animations
function initScrollReveal() {
    // Get all elements that should be animated on scroll
    const revealSections = document.querySelectorAll('.reveal-section');
    const revealItems = document.querySelectorAll('.reveal-item');
    const revealFromLeft = document.querySelectorAll('.reveal-from-left');
    const revealFromRight = document.querySelectorAll('.reveal-from-right');
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Set up the Intersection Observer options
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.15 // Trigger when at least 15% of the element is visible
    };

    // Create an Intersection Observer for sections
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, observerOptions);

    // Create an Intersection Observer for items with staggered delay
    const itemObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay based on the index for staggered effect
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100); // 100ms delay between each item
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements
    revealSections.forEach(section => sectionObserver.observe(section));
    revealItems.forEach(item => itemObserver.observe(item));
    revealFromLeft.forEach(item => sectionObserver.observe(item));
    revealFromRight.forEach(item => sectionObserver.observe(item));
    fadeInElements.forEach(item => sectionObserver.observe(item));

    // Immediately reveal elements that are already in view on page load
    setTimeout(() => {
        fadeInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add('revealed');
            }
        });
    }, 100);
}

// Add event listener for scroll
window.addEventListener("scroll", updateActiveNavLink);

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Save preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        document.getElementById('darkModeIcon').classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('darkMode', 'disabled');
        document.getElementById('darkModeIcon').classList.replace('fa-sun', 'fa-moon');
    }
}

// Function to check user's preference
function checkDarkModePreference() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeIcon').classList.replace('fa-moon', 'fa-sun');
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('darkModeIcon').classList.replace('fa-sun', 'fa-moon');
    }
}

// Call the functions on page load
document.addEventListener("DOMContentLoaded", function() {
    updateActiveNavLink();
    initScrollReveal();

    // Check for dark mode preference
    checkDarkModePreference();

    // Add event listener to dark mode toggle button
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // Year 2 module expandable cards
    const year2Grid = document.getElementById('year2-modules');
    if (year2Grid) {
        const cards = Array.from(year2Grid.querySelectorAll('.tech-item'));

        const updateContainerOpenState = () => {
            const anyOpen = cards.some(c => c.classList.contains('open'));
            year2Grid.classList.toggle('has-open', anyOpen);
        };

        const openExclusive = (targetCard) => {
            // If the target is already open, just close it; otherwise close others then open target
            const isOpen = targetCard.classList.contains('open');
            cards.forEach(c => c.classList.remove('open'));
            if (!isOpen) targetCard.classList.add('open');
            updateContainerOpenState();
        };

        cards.forEach(card => {
            // Make card focusable for accessibility
            card.setAttribute('tabindex', '0');

            const handleToggle = () => openExclusive(card);

            card.addEventListener('click', (e) => {
                // Prevent toggling when clicking inside expanded details content
                if (e.target && e.target.closest('.module-details')) return;
                handleToggle();
            });

            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleToggle();
                }
            });
        });

        // Initialize container state
        updateContainerOpenState();
    }

    // Year 3 module expandable cards
    const year3Grid = document.getElementById('year3-modules');
    if (year3Grid) {
        const cards3 = Array.from(year3Grid.querySelectorAll('.tech-item'));

        const updateContainerOpenState3 = () => {
            const anyOpen = cards3.some(c => c.classList.contains('open'));
            year3Grid.classList.toggle('has-open', anyOpen);
        };

        const openExclusive3 = (targetCard) => {
            const isOpen = targetCard.classList.contains('open');
            cards3.forEach(c => c.classList.remove('open'));
            if (!isOpen) targetCard.classList.add('open');
            updateContainerOpenState3();
        };

        cards3.forEach(card => {
            card.setAttribute('tabindex', '0');

            const handleToggle = () => openExclusive3(card);

            card.addEventListener('click', (e) => {
                if (e.target && e.target.closest('.module-details')) return;
                handleToggle();
            });

            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleToggle();
                }
            });
        });

        // Initialize container state
        updateContainerOpenState3();
    }
});
