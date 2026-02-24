// animations.js

// Utility function to add animation class with delay
function addAnimation(element, animationName, delay = 0) {
    if (element) {
        setTimeout(() => {
            element.classList.add('animate__animated', animationName);
        }, delay);
    }
}

// Initialize animations on page load
function initAnimations() {
    // Hero Section Animations
    const heroHeading = document.querySelector('.hero .content h1');
    const heroSubheading = document.querySelector('.hero .content h2');
    const heroParagraph = document.querySelector('.hero .content p');
    const heroImage = document.querySelector('.hero img');

    addAnimation(heroHeading, 'animate__fadeInDown', 200);
    addAnimation(heroSubheading, 'animate__fadeInUp', 400);
    addAnimation(heroParagraph, 'animate__fadeIn', 600);
    addAnimation(heroImage, 'animate__zoomIn', 800);

    // Education Section Animation
    const educationSection = document.querySelector('#education');
    addAnimation(educationSection, 'animate__fadeInLeft', 200);

    // About Section Animation
    const aboutSection = document.querySelector('#about');
    addAnimation(aboutSection, 'animate__fadeInRight', 300);

    // Skills Section Animations
    const skillCards = document.querySelectorAll('#skills .skills-card');
    skillCards.forEach((card, index) => {
        addAnimation(card, 'animate__flipInX', 200 * index);
    });

    // Projects Section Animations (for cards already in DOM)
    const projectCards = document.querySelectorAll('#projects .card');
    projectCards.forEach((card, idx) => {
        addAnimation(card, 'animate__fadeInUp', 300 * idx);
    });

    // Contact Section Animation
    const contactSection = document.querySelector('#contact');
    addAnimation(contactSection, 'animate__fadeInUp', 200);

    // Footer Animation
    const footer = document.querySelector('footer');
    addAnimation(footer, 'animate__fadeInUp', 200);
}

// Call the initAnimations function on page load
window.addEventListener('DOMContentLoaded', initAnimations);
