// ==================== ENHANCED JAVASCRIPT FOR ADVANCED ANIMATIONS ====================

class AdvancedWebsiteAnimations {
    constructor() {
        this.init();
        this.createParticles();
        this.setupScrollAnimations();
        this.setupPreloader();
        this.setupMagneticEffects();
        this.setupAdvancedInteractions();
        this.setupPerformanceOptimizations();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }

    start() {
        this.setupHeader();
        this.createAdvancedParticles();
        this.initializeIntersectionObserver();
        this.setupMouseFollower();
        this.createFloatingElements();
        this.setupAdvancedScrollEffects();
    }

    // ==================== ADVANCED PRELOADER ====================
    setupPreloader() {
        const preloader = document.querySelector('.preloader');
        if (!preloader) return;

        // Create morphing loader
        const loader = document.querySelector('.loader');
        if (loader) {
            this.createMorphingLoader(loader);
        }

        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 600);
            }, 1000);
        });
    }

    createMorphingLoader(loader) {
        const shapes = ['circle', 'square', 'triangle'];
        let currentShape = 0;

        setInterval(() => {
            loader.style.borderRadius = shapes[currentShape] === 'circle' ? '50%' : 
                                      shapes[currentShape] === 'square' ? '10%' : '0%';
            currentShape = (currentShape + 1) % shapes.length;
        }, 1000);
    }

    // ==================== ADVANCED HEADER EFFECTS ====================
    setupHeader() {
        const header = document.querySelector('header');
        if (!header) return;

        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateHeader = () => {
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Hide/show header based on scroll direction
            if (scrollY > lastScrollY && scrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }

            lastScrollY = scrollY;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
    }

    // ==================== ADVANCED PARTICLE SYSTEM ====================
    createAdvancedParticles() {
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;

        // Clear existing particles
        particlesContainer.innerHTML = '';

        const particleCount = window.innerWidth < 768 ? 30 : 50;
        
        for (let i = 0; i < particleCount; i++) {
            this.createParticle(particlesContainer, i);
        }
    }

    createParticle(container, index) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 4 + 2;
        const startX = Math.random() * window.innerWidth;
        const animationDuration = Math.random() * 10 + 15;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.3;

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${startX}px;
            animation-duration: ${animationDuration}s;
            animation-delay: ${delay}s;
            opacity: ${opacity};
        `;

        container.appendChild(particle);

        // Remove and recreate particle when animation ends
        particle.addEventListener('animationend', () => {
            particle.remove();
            this.createParticle(container, index);
        });
    }

    // ==================== ADVANCED SCROLL ANIMATIONS ====================
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Special animations for specific elements
                    if (entry.target.classList.contains('result-number')) {
                        this.animateNumber(entry.target);
                    }
                    
                    if (entry.target.classList.contains('service')) {
                        this.animateService(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .result-number, .service').forEach(el => {
            observer.observe(el);
        });
    }

    animateNumber(element) {
        const finalNumber = element.textContent;
        const numericValue = parseInt(finalNumber.replace(/\D/g, ''));
        
        if (isNaN(numericValue)) return;

        let currentNumber = 0;
        const increment = numericValue / 50;
        const suffix = finalNumber.replace(/\d/g, '');

        const timer = setInterval(() => {
            currentNumber += increment;
            
            if (currentNumber >= numericValue) {
                element.textContent = finalNumber;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(currentNumber) + suffix;
            }
        }, 30);
    }

    animateService(element) {
        const children = element.children;
        Array.from(children).forEach((child, index) => {
            child.style.animationDelay = `${index * 0.1}s`;
            child.classList.add('service-child-animate');
        });
    }

    // ==================== MAGNETIC EFFECTS ====================
    setupMagneticEffects() {
        const magneticElements = document.querySelectorAll('.hero-button, .cta-button, .mens-cta-button, .lang-btn');
        
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const moveX = x * 0.1;
                const moveY = y * 0.1;
                
                el.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0, 0) scale(1)';
            });
        });
    }

    // ==================== MOUSE FOLLOWER ====================
    setupMouseFollower() {
        // Create custom cursor
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(200,168,130,0.8) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            opacity: 0;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
            cursor.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });

        // Enhance cursor on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .service, .lang-btn');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.background = 'radial-gradient(circle, rgba(200,168,130,0.6) 0%, transparent 70%)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'radial-gradient(circle, rgba(200,168,130,0.8) 0%, transparent 70%)';
            });
        });
    }

    // ==================== FLOATING ELEMENTS ====================
    createFloatingElements() {
        const hero = document.querySelector('#hero');
        if (!hero) return;

        // Create floating geometric shapes
        for (let i = 0; i < 5; i++) {
            const shape = document.createElement('div');
            shape.className = 'floating-shape';
            
            const shapeTypes = ['circle', 'square', 'triangle'];
            const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
            
            shape.style.cssText = `
                position: absolute;
                width: ${Math.random() * 50 + 20}px;
                height: ${Math.random() * 50 + 20}px;
                background: rgba(200,168,130,${Math.random() * 0.3 + 0.1});
                border-radius: ${shapeType === 'circle' ? '50%' : '10%'};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatRandom ${Math.random() * 10 + 5}s ease-in-out infinite;
                z-index: 1;
            `;
            
            hero.appendChild(shape);
        }

        // Add floating animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatRandom {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                25% { transform: translateY(-20px) rotate(90deg); }
                50% { transform: translateY(10px) rotate(180deg); }
                75% { transform: translateY(-15px) rotate(270deg); }
            }
        `;
        document.head.appendChild(style);
    }

    // ==================== ADVANCED SCROLL EFFECTS ====================
    setupAdvancedScrollEffects() {
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateParallax();
                    this.updateProgressBar();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        // Create progress bar
        this.createProgressBar();
    }

    updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('#hero, .about-image img');
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    }

    createProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #c8a882, #7a6b56);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }

    updateProgressBar() {
        const progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) return;

        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    }

    // ==================== ADVANCED INTERACTIONS ====================
    setupAdvancedInteractions() {
        // Enhanced form interactions
        const formInputs = document.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', (e) => {
                e.target.parentElement.classList.add('input-focused');
            });
            
            input.addEventListener('blur', (e) => {
                e.target.parentElement.classList.remove('input-focused');
            });
        });

        // Image hover effects
        const images = document.querySelectorAll('.service img, .about-image img');
        images.forEach(img => {
            img.addEventListener('mouseenter', () => {
                img.style.filter = 'brightness(1.2) saturate(1.3) contrast(1.1)';
            });
            
            img.addEventListener('mouseleave', () => {
                img.style.filter = 'brightness(1) saturate(1) contrast(1)';
            });
        });

        // Advanced button ripple effect
        const buttons = document.querySelectorAll('.hero-button, .cta-button, .mens-cta-button');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.createRipple(e, button);
            });
        });
    }

    createRipple(event, element) {
        const ripple = document.createElement('span');
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
            background: rgba(255,255,255,0.4);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Add ripple animation if not exists
        if (!document.querySelector('#rippleStyle')) {
            const style = document.createElement('style');
            style.id = 'rippleStyle';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // ==================== PERFORMANCE OPTIMIZATIONS ====================
    setupPerformanceOptimizations() {
        // Lazy load images
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));

        // Reduce motion for users who prefer it
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        }

        // Optimize scroll performance
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.createAdvancedParticles();
            }, 250);
        });
    }

    // ==================== INTERSECTION OBSERVER SETUP ====================
    initializeIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Add staggered animation for children
                    const children = entry.target.querySelectorAll('*');
                    children.forEach((child, index) => {
                        child.style.animationDelay = `${index * 0.1}s`;
                    });
                }
            });
        }, observerOptions);

        // Observe all animation elements
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
            observer.observe(el);
        });
    }
}

// ==================== LANGUAGE SWITCHER ENHANCEMENT ====================
class AdvancedLanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('selectedLanguage') || 'pt';
        this.setupLanguageSwitcher();
        this.applyLanguage(this.currentLang);
    }

    setupLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = btn.dataset.lang;
                this.switchLanguage(lang);
                
                // Add visual feedback
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Animate button
                btn.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    btn.style.transform = 'scale(1)';
                }, 200);
            });
        });
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);
        this.applyLanguage(lang);
    }

    applyLanguage(lang) {
        // Set active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Apply translations (implement your translation logic here)
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(el => {
            const key = el.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }
}

// ==================== SMOOTH SCROLL ENHANCEMENT ====================
class SmoothScrollEnhancement {
    constructor() {
        this.setupSmoothScroll();
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    this.smoothScrollTo(targetPosition, 1000);
                }
            });
        });
    }

    smoothScrollTo(target, duration) {
        const start = window.pageYOffset;
        const distance = target - start;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.easeInOutQuad(timeElapsed, start, distance, duration);
            
            window.scrollTo(0, run);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    }

    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
}

// ==================== INITIALIZE ALL ENHANCEMENTS ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all advanced features
    new AdvancedWebsiteAnimations();
    new AdvancedLanguageSwitcher();
    new SmoothScrollEnhancement();
    
    // Add additional CSS for enhanced effects
    const additionalStyles = document.createElement('style');
    additionalStyles.textContent = `
        /* Additional dynamic styles */
        .service-child-animate {
            animation: slideInUp 0.6s ease forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .input-focused {
            transform: scale(1.02);
            transition: transform 0.3s ease;
        }
        
        .custom-cursor {
            mix-blend-mode: difference;
        }
        
        @media (hover: none) {
            .custom-cursor {
                display: none;
            }
        }
    `;
    document.head.appendChild(additionalStyles);
});

// ==================== TRANSLATIONS (if needed) ====================
const translations = {
    pt: {
        'nav-home': 'Início',
        'nav-services': 'Serviços',
        'nav-about': 'Sobre',
        'nav-contact': 'Contato',
        'hero-title': 'Recupere a Confiança nos Seus Cabelos',
        'hero-subtitle': 'Com Jackeline Ferreira • Especialista em Tricologia em Genève',
        'hero-description': 'Pare de sofrer com queda capilar, calvície ou problemas no couro cabeludo. Descubra o tratamento personalizado que vai transformar a saúde dos seus cabelos.',
        'hero-button': 'Quero Minha Avaliação ✨'
    },
    en: {
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'hero-title': 'Restore Confidence in Your Hair',
        'hero-subtitle': 'With Jackeline Ferreira • Trichology Specialist in Geneva',
        'hero-description': 'Stop suffering from hair loss, baldness or scalp problems. Discover the personalized treatment that will transform your hair health.',
        'hero-button': 'I Want My Evaluation ✨'
    },
    fr: {
        'nav-home': 'Accueil',
        'nav-services': 'Services',
        'nav-about': 'À Propos',
        'nav-contact': 'Contact',
        'hero-title': 'Retrouvez Confiance en Vos Cheveux',
        'hero-subtitle': 'Avec Jackeline Ferreira • Spécialiste en Trichologie à Genève',
        'hero-description': 'Arrêtez de souffrir de chute de cheveux, calvitie ou problèmes de cuir chevelu. Découvrez le traitement personnalisé qui transformera la santé de vos cheveux.',
        'hero-button': 'Je Veux Mon Évaluation ✨'
    }
};

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}
