// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const closeBtn = document.querySelector('.close-btn');
    const navInner = document.querySelector('.nav-inner');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navInner.classList.toggle('menu-open');
    });

    // Close menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            navInner.classList.remove('menu-open');
        });
    });

    // Close menu with close button
    closeBtn.addEventListener('click', function() {
        navLinks.classList.remove('active');
        navInner.classList.remove('menu-open');
    });
});