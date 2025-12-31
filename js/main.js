// =======================================
// CYBERSECURITY PORTFOLIO - MAIN SCRIPT
// =======================================

// ===== GLOBAL VARIABLES =====
let mouseX = 0;
let mouseY = 0;
let cursorTimeout;

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const progressFill = document.getElementById('progressFill');
    const loaderPercentage = document.getElementById('loaderPercentage');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 25;
        if (progress > 100) progress = 100;
        
        progressFill.style.width = progress + '%';
        loaderPercentage.textContent = Math.floor(progress) + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hidden');
                // Initialize animations after loader
                setTimeout(() => {
                    initAnimations();
                }, 50);
            }, 300);
        }
    }, 50);
});

// ===== CUSTOM CURSOR =====
const cursorDot = document.getElementById('cursorDot');
const cursorOutline = document.getElementById('cursorOutline');

let lastTrailTime = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
    
    cursorOutline.style.left = mouseX + 'px';
    cursorOutline.style.top = mouseY + 'px';
    
    // Cursor trail effect - disabled for performance
    // const now = Date.now();
    // if (now - lastTrailTime > 50) {
    //     createCursorTrail(mouseX, mouseY);
    //     lastTrailTime = now;
    // }
});

function createCursorTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 500);
}

// Cursor hover effects
document.querySelectorAll('a, button, .magnetic').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.borderColor = '#00ff41';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.borderColor = '#00f3ff';
    });
});

// ===== MAGNETIC BUTTONS =====
document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
    });
});

// ===== RIPPLE EFFECT ON CLICK =====
// Disabled for performance
// document.addEventListener('click', (e) => {\n//     const ripple = document.createElement('div');\n//     ripple.style.position = 'fixed';\n//     ripple.style.left = e.clientX + 'px';\n//     ripple.style.top = e.clientY + 'px';\n//     ripple.style.width = '10px';\n//     ripple.style.height = '10px';\n//     ripple.style.borderRadius = '50%';\n//     ripple.style.border = '2px solid #00f3ff';\n//     ripple.style.pointerEvents = 'none';\n//     ripple.style.transform = 'translate(-50%, -50%)';\n//     ripple.style.animation = 'rippleEffect 0.6s ease-out';\n//     ripple.style.zIndex = '9999';\n//     \n//     document.body.appendChild(ripple);\n//     \n//     setTimeout(() => ripple.remove(), 600);\n// });\n\n// Ripple animation\n// const rippleStyle = document.createElement('style');\n// rippleStyle.textContent = `\n//     @keyframes rippleEffect {\n//         to {\n//             width: 100px;\n//             height: 100px;\n//             opacity: 0;\n//         }\n//     }\n// `;\n// document.head.appendChild(rippleStyle);

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Sticky navbar with scroll (throttled)
let lastScrollTime = 0;
window.addEventListener('scroll', () => {
    const now = Date.now();
    if (now - lastScrollTime < 100) return;
    lastScrollTime = now;
    
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== PARTICLES.JS =====
// Disabled for better performance
// if (typeof particlesJS !== 'undefined') {
//     particlesJS('particles-js', {
//         particles: {
//             number: {
//                 value: 40,
//                 density: {
//                     enable: true,
//                     value_area: 1000
//                 }
//             },
//             color: {
//                 value: ['#00f3ff', '#00ff41', '#ff0055', '#9d00ff']
//             },
//             shape: {
//                 type: ['circle', 'triangle'],
//                 stroke: {
//                     width: 0,
//                     color: '#000000'
//                 }
//             },
//             opacity: {
//                 value: 0.5,
//                 random: true,
//                 anim: {
//                     enable: true,
//                     speed: 1,
//                     opacity_min: 0.1,
//                     sync: false
//                 }
//             },
//             size: {
//                 value: 3,
//                 random: true,
//                 anim: {
//                     enable: true,
//                     speed: 2,
//                     size_min: 0.1,
//                     sync: false
//                 }
//             },
//             line_linked: {
//                 enable: true,
//                 distance: 150,
//                 color: '#00f3ff',
//                 opacity: 0.2,
//                 width: 1
//             },
//             move: {
//                 enable: true,
//                 speed: 2,
//                 direction: 'none',
//                 random: true,
//                 straight: false,
//                 out_mode: 'out',
//                 bounce: false,
//                 attract: {
//                     enable: true,
//                     rotateX: 600,
//                     rotateY: 1200
//                 }
//             }
//         },
//         interactivity: {
//             detect_on: 'canvas',
//             events: {
//                 onhover: {
//                     enable: true,
//                     mode: 'grab'
//                 },
//                 onclick: {
//                     enable: true,
//                     mode: 'push'
//                 },
//                 resize: true
//             },
//             modes: {
//                 grab: {
//                     distance: 200,
//                     line_linked: {
//                         opacity: 0.5
//                     }
//                 },
//                 push: {
//                     particles_nb: 4
//                 }
//             }
//         },
//         retina_detect: true
//     });
// }

// ===== MATRIX RAIN EFFECT =====
const matrixCanvas = document.getElementById('matrixCanvas');
const ctx = matrixCanvas.getContext('2d');

matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

const matrix = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const matrixArray = matrix.split('');

const fontSize = 16;
const columns = matrixCanvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 100);

window.addEventListener('resize', () => {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
});

// ===== TYPED.JS FOR HERO SUBTITLE =====
if (typeof Typed !== 'undefined') {
    new Typed('#typed', {
        strings: [
            'CyberSecurity Specialist',
            'Penetration Tester',
            'Certified Ethical Hacker',
            'Web Developer',
            'Automation Tester'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// ===== COUNTER ANIMATION =====
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
}

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number[data-count]').forEach(counter => {
    counterObserver.observe(counter);
});

// ===== AOS (ANIMATE ON SCROLL) INITIALIZATION =====
// Disabled for better performance
// if (typeof AOS !== 'undefined') {
//     AOS.init({
//         duration: 600,
//         once: true,
//         offset: 50,
//         easing: 'ease-out-cubic',
//         disable: window.innerWidth < 768,
//         delay: 0
//     });
// }

// ===== GSAP SCROLL ANIMATIONS =====
function initAnimations() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero elements animation - disabled
        // gsap.from('.hero-title', {
        //     duration: 0.6,
        //     y: 30,
        //     opacity: 0,
        //     ease: 'power2.out',
        //     delay: 0
        // });
        
        // Parallax effect on hero background - disabled for performance
        // gsap.to('.hero-background', {
        //     y: 200,
        //     scrollTrigger: {
        //         trigger: '.hero',
        //         start: 'top top',
        //         end: 'bottom top',
        //         scrub: true
        //     }
        // });
        
        // Floating shapes parallax - disabled for performance
        // gsap.to('.shape-1', {
        //     y: -100,
        //     x: 50,
        //     scrollTrigger: {
        //         trigger: '.hero',
        //         start: 'top top',
        //         end: 'bottom top',
        //         scrub: true
        //     }
        // });
        // 
        // gsap.to('.shape-2', {
        //     y: -150,
        //     x: -50,
        //     scrollTrigger: {
        //         trigger: '.hero',
        //         start: 'top top',
        //         end: 'bottom top',
        //         scrub: true
        //     }
        // });
        
        // Section animations - disabled
        // gsap.utils.toArray('.section-title').forEach(title => {
        //     gsap.from(title, {
        //         scrollTrigger: {
        //             trigger: title,
        //             start: 'top 85%',
        //             once: true
        //         },
        //         duration: 0.5,
        //         y: 20,
        //         opacity: 0,
        //         ease: 'power2.out'
        //     });
        // });
        
        // Service cards stagger - disabled
        // gsap.from('.service-card', {
        //     scrollTrigger: {
        //         trigger: '.services-grid',
        //         start: 'top 85%',
        //         once: true
        //     },
        //     duration: 0.5,
        //     y: 30,
        //     opacity: 0,
        //     stagger: 0.1,
        //     ease: 'power2.out'
        // });
        
        // Project cards animation - disabled
        // gsap.from('.project-card', {
        //     scrollTrigger: {
        //         trigger: '.projects-grid',
        //         start: 'top 85%',
        //         once: true
        //     },
        //     duration: 0.5,
        //     y: 30,
        //     opacity: 0,
        //     stagger: 0.1,
        //     ease: 'power2.out'
        // });
        
        // Timeline items alternate animation - disabled
        // gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        //     gsap.from(item, {
        //         scrollTrigger: {
        //             trigger: item,
        //             start: 'top 85%',
        //             once: true
        //         },
        //         duration: 0.5,
        //         y: 30,
        //         opacity: 0,
        //         ease: 'power2.out'
        //     });
        // });
        
        // Stat boxes animation - disabled
        // gsap.from('.stat-box', {
        //     scrollTrigger: {
        //         trigger: '.stats-grid',
        //         start: 'top 85%',
        //         once: true
        //     },
        //     duration: 0.5,
        //     y: 30,
        //     opacity: 0,
        //     stagger: 0.08,
        //     ease: 'power2.out'
        // });
        
        // Contact form animation
        gsap.from('.contact-form-container', {
            scrollTrigger: {
                trigger: '.contact-grid',
                start: 'top 80%',
                once: true
            },
            duration: 1,
            x: 100,
            opacity: 0,
            ease: 'power3.out'
        });
        
        // Skill bars animation - disabled
        // gsap.from('.skill-progress', {
        //     scrollTrigger: {
        //         trigger: '.about-skills',
        //         start: 'top 85%',
        //         once: true
        //     },
        //     duration: 1,
        //     width: 0,
        //     stagger: 0.1,
        //     ease: 'power2.out'
        // });
        
        // Refresh ScrollTrigger after all animations are set
        ScrollTrigger.refresh();
    }
}

// ===== MOUSE PARALLAX EFFECT =====
// Disabled for better performance
// let lastParallaxTime = 0;
// document.addEventListener('mousemove', (e) => {
//     const now = Date.now();
//     if (now - lastParallaxTime < 50) return;
//     lastParallaxTime = now;
//     
//     const moveX = (e.clientX - window.innerWidth / 2) / 50;
//     const moveY = (e.clientY - window.innerHeight / 2) / 50;
//     
//     document.querySelectorAll('.floating-shapes .shape').forEach((shape, index) => {
//         const speed = (index + 1) * 0.5;
//         shape.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
//     });
// });

// ===== PROJECT FILTERING =====
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                gsap.from(card, {
                    duration: 0.5,
                    scale: 0.8,
                    opacity: 0,
                    ease: 'back.out(1.7)'
                });
            } else {
                gsap.to(card, {
                    duration: 0.3,
                    scale: 0.8,
                    opacity: 0,
                    onComplete: () => {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });
});

// ===== TERMINAL TEXT TYPING EFFECT =====
const terminalText = document.getElementById('terminalText');
if (terminalText) {
    const originalHTML = terminalText.innerHTML;
    terminalText.innerHTML = '';
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let i = 0;
                const typingInterval = setInterval(() => {
                    if (i < originalHTML.length) {
                        terminalText.innerHTML = originalHTML.slice(0, i + 1);
                        i += 3;
                    } else {
                        clearInterval(typingInterval);
                    }
                }, 20);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(terminalText);
}

// ===== FORM VALIDATION & SUBMISSION =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validate
        if (!data.name || !data.email || !data.subject || !data.message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(data.email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<span>SENDING...</span>';
        submitButton.disabled = true;
        
        setTimeout(() => {
            submitButton.innerHTML = '<span>MESSAGE SENT</span> <i class="fas fa-check"></i>';
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 3000);
        }, 2000);
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '100px';
    notification.style.right = '20px';
    notification.style.padding = '20px 30px';
    notification.style.background = type === 'success' ? 'rgba(0, 255, 65, 0.2)' : 'rgba(255, 0, 85, 0.2)';
    notification.style.border = `2px solid ${type === 'success' ? '#00ff41' : '#ff0055'}`;
    notification.style.borderRadius = '10px';
    notification.style.color = '#fff';
    notification.style.fontFamily = 'Rajdhani, sans-serif';
    notification.style.fontSize = '1rem';
    notification.style.zIndex = '10000';
    notification.style.backdropFilter = 'blur(10px)';
    notification.style.boxShadow = type === 'success' ? '0 10px 30px rgba(0, 255, 65, 0.3)' : '0 10px 30px rgba(255, 0, 85, 0.3)';
    notification.style.animation = 'slideInRight 0.5s ease';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// Notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== KONAMI CODE EASTER EGG =====
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    // Matrix effect intensifies
    document.body.style.animation = 'rainbow 2s linear infinite';
    
    const easterEggStyle = document.createElement('style');
    easterEggStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(easterEggStyle);
    
    showNotification('🎉 KONAMI CODE ACTIVATED! ULTRA HACKER MODE ENABLED! 🎉', 'success');
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 10000);
}

// ===== CONSOLE EASTER EGG =====
console.log('%c⚡ WELCOME TO THE MATRIX ⚡', 'color: #00f3ff; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00f3ff;');
console.log('%cLooking for secrets? Try the Konami Code...', 'color: #00ff41; font-size: 14px;');
console.log('%c↑ ↑ ↓ ↓ ← → ← → B A', 'color: #ff0055; font-size: 16px; font-weight: bold;');

// ===== BREATHING ANIMATION FOR CERTAIN ELEMENTS =====
const breathingElements = document.querySelectorAll('.hero-badge i, .service-icon');
breathingElements.forEach((el, index) => {
    el.style.animation = `breathe 3s ease-in-out infinite ${index * 0.2}s`;
});

const breatheStyle = document.createElement('style');
breatheStyle.textContent = `
    @keyframes breathe {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(breatheStyle);

// ===== SCROLL PROGRESS INDICATOR =====
const scrollProgress = document.createElement('div');
scrollProgress.style.position = 'fixed';
scrollProgress.style.top = '0';
scrollProgress.style.left = '0';
scrollProgress.style.width = '0';
scrollProgress.style.height = '3px';
scrollProgress.style.background = 'linear-gradient(90deg, #00f3ff, #9d00ff)';
scrollProgress.style.zIndex = '10001';
scrollProgress.style.boxShadow = '0 0 10px #00f3ff';
document.body.appendChild(scrollProgress);

let lastProgressTime = 0;
window.addEventListener('scroll', () => {
    const now = Date.now();
    if (now - lastProgressTime < 100) return;
    lastProgressTime = now;
    
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
}, { passive: true });

// ===== GLITCH EFFECT ON PAGE LOAD =====
window.addEventListener('load', () => {
    document.body.style.animation = 'glitchBody 0.3s';
    
    const glitchBodyStyle = document.createElement('style');
    glitchBodyStyle.textContent = `
        @keyframes glitchBody {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
        }
    `;
    document.head.appendChild(glitchBodyStyle);
});

// ===== RANDOM GLITCH EFFECT =====
if (window.innerWidth > 768) {
    setInterval(() => {
        const glitchElements = document.querySelectorAll('.glitch-text, .glitch-logo');
        if (glitchElements.length > 0 && Math.random() > 0.8) {
            const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
            randomElement.style.animation = 'none';
            setTimeout(() => {
                randomElement.style.animation = 'glitch 1s infinite';
            }, 10);
        }
    }, 8000);
}

// ===== PERFORMANCE OPTIMIZATION =====
let ticking = false;

function updateParallax() {
    // Parallax updates
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// ===== ACCESSIBILITY: REDUCED MOTION =====
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

// ===== LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== 3D TILT EFFECT ON SERVICE CARDS =====
if (window.innerWidth > 768) {
    document.querySelectorAll('.service-card, .project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// ===== TEXT SCRAMBLE EFFECT =====
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    
    update() {
        let output = '';
        let complete = 0;
        
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += char;
            } else {
                output += from;
            }
        }
        
        this.el.innerText = output;
        
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

// Apply scramble effect to section titles on scroll
const scrambleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fx = new TextScramble(entry.target);
            fx.setText(entry.target.innerText);
            scrambleObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Uncomment to enable scramble effect on section titles
// document.querySelectorAll('.section-title').forEach(title => {
//     scrambleObserver.observe(title);
// });

// ===== FINAL INITIALIZATION =====
console.log('%c✅ All systems initialized successfully!', 'color: #00ff41; font-size: 14px; font-weight: bold;');
