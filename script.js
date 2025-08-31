// GSAP ScrollTrigger Registration
gsap.registerPlugin(ScrollTrigger);

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const mainContent = document.getElementById('main-content');

const backgroundAudio = document.getElementById('background-audio');
const clickSound = document.getElementById('click-sound');
const soulTypeMix = document.getElementById('soul-type-mix');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');
const playBtn = document.getElementById('play-btn');
const progressFill = document.querySelector('.progress-fill');
const progressBar = document.getElementById('progress-bar');
const currentTimeDisplay = document.getElementById('current-time');
const totalTimeDisplay = document.getElementById('total-time');
const galleryItems = document.querySelectorAll('.gallery-item');
const ticketBtns = document.querySelectorAll('.ticket-btn');
const socialLinks = document.querySelectorAll('.social-link');
const subscribeBtn = document.querySelector('.subscribe-btn');
const emailInput = document.querySelector('.email-input');

// State Variables
let isAudioPlaying = false;

// Initialize the website
function init() {
    // Simulate loading
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.add('loaded');
            initAnimations();
            initScrollAnimations();
            initAudioPlayer();
            initGallery();
            initEventListeners();
        }, 500);
    }, 3000);
}

// Initialize GSAP animations
function initAnimations() {
    // Hero section entrance animation
    gsap.from('.hero-logo', {
        duration: 2,
        y: -100,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-cta', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        delay: 0.5,
        ease: 'power3.out'
    });
    
    gsap.from('.scroll-indicator', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 1,
        ease: 'power3.out'
    });
}



// Initialize scroll animations
function initScrollAnimations() {
    // Section entrance animations
    sections.forEach((section, index) => {
        if (index === 0) return; // Skip hero section
        
        gsap.fromTo(section, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Tour dates stagger animation
    gsap.fromTo('.tour-date', {
        opacity: 0,
        x: -50
    }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#tour',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Gallery items stagger animation
    gsap.fromTo('.gallery-item', {
        opacity: 0,
        scale: 0.8
    }, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#gallery',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Social links animation
    gsap.fromTo('.social-link', {
        opacity: 0,
        y: 30
    }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
        }
    });
}

// Initialize audio player
function initAudioPlayer() {
    // Set up audio event listeners
    soulTypeMix.addEventListener('loadedmetadata', () => {
        totalTimeDisplay.textContent = formatTime(soulTypeMix.duration);
    });
    
    soulTypeMix.addEventListener('timeupdate', () => {
        if (!isNaN(soulTypeMix.duration)) {
            const progress = (soulTypeMix.currentTime / soulTypeMix.duration) * 100;
            progressFill.style.width = progress + '%';
            currentTimeDisplay.textContent = formatTime(soulTypeMix.currentTime);
        }
    });
    
    soulTypeMix.addEventListener('ended', () => {
        isAudioPlaying = false;
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        progressFill.style.width = '0%';
        currentTimeDisplay.textContent = '0:00';
    });
}

// Audio control functions
function playPause() {
    if (isAudioPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
}

function playAudio() {
    isAudioPlaying = true;
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    soulTypeMix.play();
}

function pauseAudio() {
    isAudioPlaying = false;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    soulTypeMix.pause();
}

// Utility function to format time
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Initialize gallery
function initGallery() {
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Add your gallery modal or lightbox functionality here
            console.log('Gallery item clicked:', item.dataset.image);
        });
    });
}

// Initialize event listeners
function initEventListeners() {
    // Scroll indicator click functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            playClickSound();
            document.getElementById('tour').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Navigation items
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetSection = item.dataset.section;
            const targetElement = document.getElementById(targetSection);
            
            if (targetElement) {
                playClickSound();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Audio controls
    playBtn.addEventListener('click', () => {
        playClickSound();
        playPause();
    });
    
    // Progress bar click to seek
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const progressBarWidth = rect.width;
        const clickPercent = clickX / progressBarWidth;
        
        if (!isNaN(soulTypeMix.duration)) {
            const seekTime = clickPercent * soulTypeMix.duration;
            soulTypeMix.currentTime = seekTime;
        }
    });
    
    // Ticket buttons
    ticketBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            playClickSound();
            // Add your ticket purchasing logic here
            console.log('Ticket button clicked');
        });
    });
    
    // Social links
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            playClickSound();
            // Add your social media links here
            console.log('Social link clicked:', link.dataset.platform);
        });
    });
    
    // Subscribe button
    subscribeBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        if (email && isValidEmail(email)) {
            playClickSound();
            // Add your newsletter subscription logic here
            console.log('Newsletter subscription:', email);
            emailInput.value = '';
            showNotification('Successfully subscribed!', 'success');
        } else {
            showNotification('Please enter a valid email address.', 'error');
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        switch(e.code) {
            case 'Space':
                e.preventDefault();
                playPause();
                break;
        }
    });
    
    // Scroll effects
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateNavOnScroll() {
        const nav = document.getElementById('main-nav');
        
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.8)';
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Utility functions
function playClickSound() {
    // clickSound.currentTime = 0;
    // clickSound.play(); // Uncomment when you have actual audio files
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00ff00' : type === 'error' ? '#ff0000' : '#ffff00'};
        color: #000;
        padding: 1rem 2rem;
        border-radius: 5px;
        font-weight: bold;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Parallax effect for hero background
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.getElementById('hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    initParallax();
});

// Add some glitch effects
function addGlitchEffect() {
    const glitchElements = document.querySelectorAll('.logo-text, .section-title');
    
    glitchElements.forEach(element => {
        setInterval(() => {
            if (Math.random() > 0.95) {
                element.style.textShadow = `
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px ${Math.random() * 20}px #ff0000,
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px ${Math.random() * 20}px #ffff00
                `;
                
                setTimeout(() => {
                    element.style.textShadow = '0 0 20px #ff0000';
                }, 100);
            }
        }, 2000);
    });
}

// Add glitch effects after initialization
setTimeout(addGlitchEffect, 5000);

// Performance optimization
function optimizePerformance() {
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.globalTimeline.timeScale(0.5);
    }
    
    // Throttle scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            // Handle scroll-based effects here
        }, 16); // ~60fps
    });
}

// Initialize performance optimizations
setTimeout(optimizePerformance, 1000);
