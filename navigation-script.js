/**
 * Navigation Script for Mobile Responsive Menu
 * Handles hamburger menu toggle functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get the mobile navigation toggle button and menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        // Add click event listener to toggle button
        navToggle.addEventListener('click', function() {
            // Toggle active class on both button and menu
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Update ARIA expanded attribute for accessibility
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded.toString());
        });
        
        // Close menu when clicking on a navigation link (mobile)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Close mobile menu when a link is clicked
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside (mobile)
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Handle keyboard navigation
        navToggle.addEventListener('keydown', function(event) {
            // Toggle menu with Enter or Space key
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                navToggle.click();
            }
        });
        
        // Handle window resize to ensure proper menu state
        window.addEventListener('resize', function() {
            // If window is resized to desktop size, ensure menu is visible
            if (window.innerWidth > 768) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Smooth scrolling for anchor links (optional enhancement)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});