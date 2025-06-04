// 🎯 BELLA DERME - ULTRA ENHANCED VISUAL EXPERIENCE
// ⭐ Advanced animations, visual effects, and interactions

// ==================== ULTRA MODERN PRELOADER ====================
class UltraPreloader {
    constructor() {
        this.preloader = document.querySelector('.preloader');
        this.loader = document.querySelector('.loader');
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            this.createAdvancedLoader();
            setTimeout(() => this.hidePreloader(), 1500);
        });
    }

    createAdvancedLoader() {
        // Create morphing loader animation
        const morphLoader = document.createElement('div');
        morphLoader.className = 'morph-loader';
        morphLoader.innerHTML = `
            <div class="morph-circle"></div>
            <div class="morph-square"></div>
            <div class="morph-triangle"></div>
        `;
        this.loader.parentNode.replaceChild(morphLoader, this.loader);
    }

    hidePreloader() {
        this.preloader.classList.add('fade-out');
        setTimeout(() => {
            this.preloader.style.display = 'none';
        }, 600);
    }
}

// ==================== ADVANCED PARTICLE SYSTEM ====================
class AdvancedParticleSystem {
    constructor() {
        this.particleContainer = document.querySelector('.particles');
        if (!this.particleContainer) {
            this.createParticleContainer();
        }
        this.particles = [];
        this.init();
    }

    createParticleContainer() {
        this.particleContainer = document.createElement('div');
        this.particleContainer.className = 'particles';
        document.querySelector('#hero').appendChild(this.particleContainer);
    }

    init() {
        this.createParticles();
        this.animateParticles();
        this.setupInteractiveParticles();
    }

    createParticles() {
        const particleCount = window.innerWidth < 768 ? 30 : 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random properties
            const size = Math.random() * 6 + 2;
            const startX = Math.random() * window.innerWidth;
            const delay = Math.random() * 10;
            const duration = Math.random() * 15 + 10;
            
            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${startX}px;
                animation-delay: ${delay}s;
                animation-duration: ${duration}s;
            `;
            
            // Add special particles
            if (i % 7 === 0) {
                particle.classList.add('star-particle');
            } else if (i % 5 === 0) {
                particle.classList.add('glow-particle');
            }
            
            this.particleContainer.appendChild(particle);
            this.particles.push(particle);
        }
    }

    animateParticles() {
        this.particles.forEach((particle, index) => {
            // Add random movement
            setInterval(() => {
                const moveX = (Math.random() - 0.5) * 20;
                const currentLeft = parseFloat(particle.style.left);
                particle.style.left = `${currentLeft + moveX}px`;
            }, 3000 + index * 100);
        });
    }

    setupInteractiveParticles() {
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            this.particles.forEach(particle => {
                const rect = particle.getBoundingClientRect();
                const particleX = rect.left + rect.width / 2;
                const particleY = rect.top + rect.height / 2;
                
                const distance = Math.sqrt(
                    Math.pow(mouseX - particleX, 2) + 
                    Math.pow(mouseY - particleY, 2)
                );
                
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    particle.style.transform = `scale(${1 + force * 0.5}) brightness(${1 + force})`;
                } else {
                    particle.style.transform = 'scale(1) brightness(1)';
                }
            });
        });
    }
}

// ==================== ULTRA SMOOTH SCROLL ANIMATIONS ====================
class UltraSmoothAnimations {
    constructor() {
        this.observer = null;
        this.elements = [];
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.observeElements();
        this.setupScrollTriggers();
    }

    setupIntersectionObserver() {
        const options = {
            threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
            rootMargin: '-50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target, entry.intersectionRatio);
                }
            });
        }, options);
    }

    observeElements() {
        // Advanced selectors for different animation types
        const animatedElements = document.querySelectorAll(`
            .fade-in, .slide-in-left, .slide-in-right, .scale-in,
            .service, .result-item, .testimonial, .mens-service,
            h2, h3, .expert-info, .contact-details, .hero-button
        `);

        animatedElements.forEach(el => {
            this.observer.observe(el);
        });
    }

    animateElement(element, ratio) {
        // Different animations based on element type and scroll position
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
        const normalizedDistance = distanceFromCenter / viewportCenter;

        if (element.classList.contains('service')) {
            this.animateServiceCard(element, ratio, normalizedDistance);
        } else if (element.classList.contains('result-item')) {
            this.animateResultItem(element, ratio);
        } else if (element.classList.contains('testimonial')) {
            this.animateTestimonial(element, ratio);
        } else {
            this.animateGeneric(element, ratio);
        }
    }

    animateServiceCard(element, ratio, distance) {
        const transform = `
            translateY(${(1 - ratio) * 50}px) 
            scale(${0.9 + ratio * 0.1})
            rotateX(${(1 - ratio) * 10}deg)
        `;
        const opacity = ratio;
        const blur = (1 - ratio) * 5;

        element.style.cssText += `
            transform: ${transform};
            opacity: ${opacity};
            filter: blur(${blur}px);
            transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        `;

        // Add glow effect when fully visible
        if (ratio > 0.8) {
            element.style.boxShadow = '0 20px 60px rgba(200,168,130,0.3)';
        }
    }

    animateResultItem(element, ratio) {
        const number = element.querySelector('.result-number');
        if (number && ratio > 0.5) {
            this.animateCounter(number);
        }

        element.style.cssText += `
            transform: translateY(${(1 - ratio) * 30}px) scale(${0.8 + ratio * 0.2});
            opacity: ${ratio};
            transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        `;
    }

    animateTestimonial(element, ratio) {
        element.style.cssText += `
            transform: translateX(${(1 - ratio) * 100}px) rotateY(${(1 - ratio) * 15}deg);
            opacity: ${ratio};
            transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
        `;
    }

    animateGeneric(element, ratio) {
        element.style.cssText += `
            transform: translateY(${(1 - ratio) * 40}px);
            opacity: ${ratio};
            transition: all 0.8s ease-out;
        `;
    }

    animateCounter(element) {
        if (element.dataset.animated) return;
        element.dataset.animated = 'true';

        const text = element.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        const suffix = text.replace(/\d/g, '');
        
        let current = 0;
        const increment = number / 60; // 60 frames
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 16);
    }

    setupScrollTriggers() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.onScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    onScroll() {
        const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        
        // Parallax effect for hero
        const hero = document.querySelector('#hero');
        if (hero) {
            hero.style.transform = `translateY(${window.scrollY * 0.3}px)`;
        }

        // Dynamic blur effect for header
        const header = document.querySelector('header');
        if (header && window.scrollY > 100) {
            header.style.backdropFilter = `blur(${Math.min(window.scrollY / 20, 25)}px)`;
        }
    }
}

// ==================== MAGNETIC CURSOR EFFECTS ====================
class MagneticCursor {
    constructor() {
        this.cursor = null;
        this.cursorFollower = null;
        this.init();
    }

    init() {
        this.createCursor();
        this.bindEvents();
        this.setupMagneticElements();
    }

    createCursor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        
        this.cursorFollower = document.createElement('div');
        this.cursorFollower.className = 'cursor-follower';
        
        document.body.appendChild(this.cursor);
        document.body.appendChild(this.cursorFollower);
    }

    bindEvents() {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            this.cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });

        // Smooth follower animation
        const animate = () => {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            this.cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
            requestAnimationFrame(animate);
        };
        animate();

        // Hover effects
        document.addEventListener('mouseenter', (e) => {
            if (e.target.matches('a, button, .service, .result-item')) {
                this.cursor.classList.add('cursor-hover');
                this.cursorFollower.classList.add('cursor-hover');
            }
        }, true);

        document.addEventListener('mouseleave', (e) => {
            if (e.target.matches('a, button, .service, .result-item')) {
                this.cursor.classList.remove('cursor-hover');
                this.cursorFollower.classList.remove('cursor-hover');
            }
        }, true);
    }

    setupMagneticElements() {
        const magneticElements = document.querySelectorAll('.hero-button, .cta-button, .mens-cta-button');
        
        magneticElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0px, 0px) scale(1)';
            });
        });
    }
}

// ==================== DYNAMIC BACKGROUND EFFECTS ====================
class DynamicBackgrounds {
    constructor() {
        this.init();
    }

    init() {
        this.setupHeroBackground();
        this.setupSectionBackgrounds();
        this.setupFloatingShapes();
    }

    setupHeroBackground() {
        const hero = document.querySelector('#hero');
        if (!hero) return;

        // Create animated gradient overlay
        const gradientOverlay = document.createElement('div');
        gradientOverlay.className = 'gradient-overlay';
        hero.appendChild(gradientOverlay);

        // Animate gradient position
        let gradientPosition = 0;
        setInterval(() => {
            gradientPosition += 1;
            gradientOverlay.style.background = `
                linear-gradient(
                    ${gradientPosition}deg,
                    rgba(200,168,130,0.3) 0%,
                    transparent 30%,
                    rgba(122,107,86,0.2) 70%,
                    transparent 100%
                )
            `;
        }, 100);
    }

    setupSectionBackgrounds() {
        // Add dynamic patterns to sections
        const sections = document.querySelectorAll('#services, #about, #results, #contact');
        
        sections.forEach((section, index) => {
            const pattern = document.createElement('div');
            pattern.className = 'section-pattern';
            pattern.style.backgroundImage = this.generatePattern(index);
            section.appendChild(pattern);
        });
    }

    generatePattern(index) {
        const patterns = [
            // Geometric circles
            `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='20' fill='none' stroke='rgba(200,168,130,0.1)' stroke-width='1'/></svg>")`,
            
            // Organic waves
            `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><path d='M0,50 Q25,20 50,50 T100,50 V100 H0 Z' fill='rgba(200,168,130,0.05)'/></svg>")`,
            
            // Hexagonal grid
            `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'><polygon points='25,5 40,15 40,35 25,45 10,35 10,15' fill='none' stroke='rgba(200,168,130,0.1)' stroke-width='0.5'/></svg>")`,
            
            // Dotted pattern
            `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><circle cx='10' cy='10' r='1' fill='rgba(200,168,130,0.15)'/></svg>")`
        ];
        
        return patterns[index % patterns.length];
    }

    setupFloatingShapes() {
        const shapes = ['circle', 'square', 'triangle', 'hexagon'];
        const hero = document.querySelector('#hero');
        
        shapes.forEach((shape, index) => {
            const element = document.createElement('div');
            element.className = `floating-shape floating-${shape}`;
            element.style.cssText = `
                position: absolute;
                width: ${Math.random() * 50 + 20}px;
                height: ${Math.random() * 50 + 20}px;
                left: ${Math.random() * 80 + 10}%;
                top: ${Math.random() * 60 + 20}%;
                animation: floatComplex ${Math.random() * 10 + 10}s infinite ease-in-out;
                animation-delay: ${index * 2}s;
                opacity: 0.3;
            `;
            hero.appendChild(element);
        });
    }
}

// ==================== ADVANCED INTERACTIVE CARDS ====================
class InteractiveCards {
    constructor() {
        this.cards = [];
        this.init();
    }

    init() {
        this.setupServiceCards();
        this.setupResultCards();
        this.setupMensServiceCards();
    }

    setupServiceCards() {
        const serviceCards = document.querySelectorAll('.service');
        
        serviceCards.forEach(card => {
            this.enhanceCard(card, 'service');
            this.addParallaxEffect(card);
            this.addHoverSound(card);
        });
    }

    setupResultCards() {
        const resultCards = document.querySelectorAll('.result-item');
        
        resultCards.forEach(card => {
            this.enhanceCard(card, 'result');
            this.addPulseEffect(card);
        });
    }

    setupMensServiceCards() {
        const mensCards = document.querySelectorAll('.mens-service');
        
        mensCards.forEach(card => {
            this.enhanceCard(card, 'mens');
            this.addGlowEffect(card);
        });
    }

    enhanceCard(card, type) {
        // Add 3D tilt effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = (e.clientX - centerX) / (rect.width / 2);
            const deltaY = (e.clientY - centerY) / (rect.height / 2);
            
            const rotateX = deltaY * -10;
            const rotateY = deltaX * 10;
            const scale = 1.05;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(${scale})
                translateZ(20px)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1) translateZ(0)';
        });

        // Add ripple effect on click
        card.addEventListener('click', (e) => {
            this.createRipple(e, card);
        });
    }

    addParallaxEffect(card) {
        const img = card.querySelector('img');
        if (!img) return;

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
            
            img.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
        });
        
        card.addEventListener('mouseleave', () => {
            img.style.transform = 'translate(0px, 0px) scale(1)';
        });
    }

    addPulseEffect(card) {
        const number = card.querySelector('.result-number');
        if (!number) return;

        card.addEventListener('mouseenter', () => {
            number.style.animation = 'pulse 0.8s ease-in-out infinite';
        });
        
        card.addEventListener('mouseleave', () => {
            number.style.animation = 'none';
        });
    }

    addGlowEffect(card) {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 0 30px rgba(200,168,130,0.6)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 8px 25px rgba(122, 107, 86, 0.2)';
        });
    }

    addHoverSound(card) {
        // Create audio context for hover sounds (optional)
        card.addEventListener('mouseenter', () => {
            // Subtle hover feedback without actual sound
            card.style.filter = 'brightness(1.05) saturate(1.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.filter = 'brightness(1) saturate(1)';
        });
    }

    createRipple(event, element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(200,168,130,0.3) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
            z-index: 1000;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// ==================== SMART HEADER SYSTEM ====================
class SmartHeader {
    constructor() {
        this.header = document.querySelector('header');
        this.lastScrollY = window.scrollY;
        this.ticking = false;
        this.init();
    }

    init() {
        this.setupScrollBehavior();
        this.setupActiveNavigation();
        this.setupLanguageSelector();
        this.addHeaderEffects();
    }

    setupScrollBehavior() {
        window.addEventListener('scroll', () => {
            if (!this.ticking) {
                requestAnimationFrame(() => {
                    this.updateHeader();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        });
    }

    updateHeader() {
        const currentScrollY = window.scrollY;
        const scrollDifference = Math.abs(currentScrollY - this.lastScrollY);
        
        // Add/remove scrolled class
        if (currentScrollY > 100) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
        
        // Smart hide/show behavior
        if (scrollDifference > 10) {
            if (currentScrollY > this.lastScrollY && currentScrollY > 500) {
                this.header.style.transform = 'translateY(-100%)';
            } else {
                this.header.style.transform = 'translateY(0)';
            }
        }
        
        // Dynamic blur based on scroll speed
        const blurAmount = Math.min(scrollDifference * 2, 20);
        this.header.style.backdropFilter = `blur(${10 + blurAmount}px)`;
        
        this.lastScrollY = currentScrollY;
    }

    setupActiveNavigation() {
        const navLinks = document.querySelectorAll('nav a');
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 200;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    setupLanguageSelector() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                langButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Add visual feedback
                btn.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    btn.style.transform = 'scale(1)';
                }, 150);
            });
        });
    }

    addHeaderEffects() {
        // Add subtle animations to header elements
        const logo = this.header.querySelector('.logo img');
        const navLinks = this.header.querySelectorAll('nav a');
        
        // Logo hover effect
        if (logo) {
            logo.addEventListener('mouseenter', () => {
                logo.style.transform = 'scale(1.1) rotate(5deg)';
            });
            
            logo.addEventListener('mouseleave', () => {
                logo.style.transform = 'scale(1) rotate(0deg)';
            });
        }
        
        // Nav links enhanced hover
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
}

// ==================== FORM ENHANCEMENT SYSTEM ====================
class FormEnhancements {
    constructor() {
        this.form = document.querySelector('form');
        this.init();
    }

    init() {
        if (!this.form) return;
        
        this.enhanceInputs();
        this.addValidation();
        this.addSubmitEffects();
    }

    enhanceInputs() {
        const inputs = this.form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            // Add focus effects
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('input-focused');
                input.style.transform = 'scale(1.02)';
                input.style.boxShadow = '0 5px 15px rgba(200,168,130,0.3)';
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('input-focused');
                input.style.transform = 'scale(1)';
                input.style.boxShadow = 'none';
            });
            
            // Add typing animation
            input.addEventListener('input', () => {
                input.style.borderColor = '#c8a882';
                setTimeout(() => {
                    input.style.borderColor = 'rgba(200,168,130,0.3)';
                }, 300);
            });
        });
    }

    addValidation() {
        const inputs = this.form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (!input.value.trim()) {
                    input.style.borderColor = '#ff6b6b';
                    input.style.animation = 'shake 0.5s ease-in-out';
                } else {
                    input.style.borderColor = '#2ecc71';
                }
            });
        });
    }

    addSubmitEffects() {
        const submitBtn = this.form.querySelector('.whatsapp-submit-btn');
        
        if (submitBtn) {
            submitBtn.addEventListener('click', (e) => {
                // Add loading animation
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Enviando...';
                submitBtn.style.background = 'linear-gradient(45deg, #128c7e, #25d366)';
                
                // Reset after delay (since it's a link, this is just visual feedback)
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = 'linear-gradient(45deg, #25d366, #128c7e)';
                }, 1000);
            });
        }
    }
}

// ==================== PERFORMANCE MONITOR ====================
class PerformanceMonitor {
    constructor() {
        this.fps = 0;
        this.lastTime = performance.now();
        this.frameCount = 0;
        this.init();
    }

    init() {
        this.monitorPerformance();
        this.optimizeAnimations();
    }

    monitorPerformance() {
        const checkFPS = (currentTime) => {
            this.frameCount++;
            
            if (currentTime - this.lastTime >= 1000) {
                this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
                this.frameCount = 0;
                this.lastTime = currentTime;
                
                // Adjust animations based on performance
                this.adjustQuality();
            }
            
            requestAnimationFrame(checkFPS);
        };
        
        requestAnimationFrame(checkFPS);
    }

    adjustQuality() {
        const body = document.body;
        
        if (this.fps < 30) {
            body.classList.add('low-performance');
            console.log('Performance optimizations applied');
        } else {
            body.classList.remove('low-performance');
        }
    }

    optimizeAnimations() {
        // Reduce animations on low-end devices
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
            document.body.classList.add('reduced-animations');
        }
        
        // Respect user preferences
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.classList.add('respect-motion-preference');
        }
    }
}

// ==================== MAIN APPLICATION CONTROLLER ====================
class BellaDermeUltraApp {
    constructor() {
        this.components = {};
        this.translations = this.getTranslations();
        this.currentLang = 'pt';
        this.init();
    }

    init() {
        this.waitForDOMReady(() => {
            this.initializeComponents();
            this.setupGlobalEvents();
            this.addUtilityFeatures();
        });
    }

    waitForDOMReady(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }

    initializeComponents() {
        // Initialize all components
        this.components.preloader = new UltraPreloader();
        this.components.particles = new AdvancedParticleSystem();
        this.components.animations = new UltraSmoothAnimations();
        this.components.cursor = new MagneticCursor();
        this.components.backgrounds = new DynamicBackgrounds();
        this.components.cards = new InteractiveCards();
        this.components.header = new SmartHeader();
        this.components.forms = new FormEnhancements();
        this.components.performance = new PerformanceMonitor();
        
        console.log('🎯 Bella Derme Ultra Enhanced - All systems initialized');
    }

    setupGlobalEvents() {
        // Global keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 'h':
                        e.preventDefault();
                        this.scrollToSection('hero');
                        break;
                    case 's':
                        e.preventDefault();
                        this.scrollToSection('services');
                        break;
                    case 'c':
                        e.preventDefault();
                        this.scrollToSection('contact');
                        break;
                }
            }
        });

        // Global smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    addUtilityFeatures() {
        // Add scroll to top button
        this.createScrollToTop();
        
        // Add loading states to external links
        this.enhanceExternalLinks();
        
        // Add easter eggs
        this.addEasterEggs();
    }

    createScrollToTop() {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '↑';
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(45deg, #c8a882, #7a6b56);
            color: white;
            border: none;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            transform: scale(0);
            transition: all 0.3s ease;
            z-index: 1000;
        `;
        
        document.body.appendChild(scrollBtn);
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.transform = 'scale(1)';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.transform = 'scale(0)';
            }
        });
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    enhanceExternalLinks() {
        document.querySelectorAll('a[target="_blank"]').forEach(link => {
            link.addEventListener('click', () => {
                link.style.opacity = '0.7';
                setTimeout(() => {
                    link.style.opacity = '1';
                }, 300);
            });
        });
    }

    addEasterEggs() {
        // Konami code easter egg
        const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        let konamiIndex = 0;
        
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    this.activateSpecialMode();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });
    }

    activateSpecialMode() {
        document.body.classList.add('special-mode');
        
        // Add rainbow effect to all headings
        document.querySelectorAll('h1, h2, h3').forEach(heading => {
            heading.style.background = 'linear-gradient(45deg, #ff006e, #fb5607, #ffbe0b, #8338ec, #3a86ff)';
            heading.style.backgroundSize = '400% 400%';
            heading.style.animation = 'rainbow 2s ease infinite';
            heading.style.webkitBackgroundClip = 'text';
            heading.style.webkitTextFillColor = 'transparent';
        });
        
        // Show congratulations message
        const message = document.createElement('div');
        message.innerHTML = '🎉 Modo Especial Ativado! 🎉';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.9);
            color: white;
            padding: 20px 40px;
            border-radius: 10px;
            font-size: 24px;
            z-index: 10000;
            animation: bounce 1s ease-in-out;
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    getTranslations() {
        // Simplified translations object (keeping the original structure)
        return window.translations || {};
    }
}

// ==================== INITIALIZATION ====================
// Initialize the ultra-enhanced application
const app = new BellaDermeUltraApp();

// Export for global access if needed
window.BellaDermeApp = app;
