// 🎯 Bella Derme - Modern Interactive Website
// ⭐ Enhanced with Modern Animations & Features

// ==================== PRELOADER ====================
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 600);
        }, 1000);
    }
});

// ==================== PARTICLE BACKGROUND ====================
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random horizontal position
        particle.style.left = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random animation duration
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }

    // Create particles continuously
    setInterval(createParticle, 300);
}

// ==================== SCROLL ANIMATIONS ====================
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver(
            this.handleIntersection.bind(this),
            this.observerOptions
        );
        
        this.init();
    }

    init() {
        // Observe all animation elements
        const animatedElements = document.querySelectorAll(
            '.fade-in, .slide-in-left, .slide-in-right, .scale-in'
        );
        
        animatedElements.forEach(el => {
            this.observer.observe(el);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// ==================== MODERN HEADER EFFECTS ====================
class ModernHeader {
    constructor() {
        this.header = document.querySelector('header');
        this.init();
    }

    init() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        if (window.scrollY > 100) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }
}

// ==================== ENHANCED SERVICE CARDS ====================
class ServiceCards {
    constructor() {
        this.init();
    }

    init() {
        const serviceCards = document.querySelectorAll('.service');
        
        serviceCards.forEach((card, index) => {
            // Add staggered animation delay
            card.style.animationDelay = `${index * 0.2}s`;
            
            // Enhanced hover effects
            card.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
            card.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
            
            // Add ripple effect on click
            card.addEventListener('click', this.createRipple.bind(this));
        });
    }

    handleMouseEnter(e) {
        const card = e.currentTarget;
        const img = card.querySelector('img');
        
        // Animate image with slight rotation
        if (img) {
            img.style.transform = 'scale(1.1) rotate(2deg)';
        }
        
        // Add glow effect
        card.style.boxShadow = '0 20px 40px rgba(200, 168, 130, 0.3)';
    }

    handleMouseLeave(e) {
        const card = e.currentTarget;
        const img = card.querySelector('img');
        
        if (img) {
            img.style.transform = 'scale(1) rotate(0deg)';
        }
        
        card.style.boxShadow = '';
    }

    createRipple(e) {
        const card = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        ripple.classList.add('ripple-effect');
        
        card.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// ==================== FLOATING CTA BUTTONS ====================
class FloatingButtons {
    constructor() {
        this.init();
    }

    init() {
        const buttons = document.querySelectorAll('.hero-button, .cta-button');
        
        buttons.forEach(button => {
            // Add floating animation
            button.classList.add('floating');
            
            // Enhanced click effects
            button.addEventListener('click', this.handleClick.bind(this));
        });
    }

    handleClick(e) {
        const button = e.currentTarget;
        
        // Success feedback animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
        
        // Add success icon temporarily
        const originalText = button.textContent;
        button.innerHTML = '✅ Redirecionando...';
        
        setTimeout(() => {
            button.innerHTML = originalText;
        }, 2000);
    }
}

// ==================== ENHANCED GALLERY EFFECTS ====================
class GalleryEffects {
    constructor() {
        this.init();
    }

    init() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            item.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
            item.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
        });
    }

    handleMouseEnter(e) {
        const item = e.currentTarget;
        const overlay = item.querySelector('.gallery-overlay');
        
        if (overlay) {
            overlay.style.transform = 'translateY(0)';
            overlay.style.opacity = '1';
        }
    }

    handleMouseLeave(e) {
        const item = e.currentTarget;
        const overlay = item.querySelector('.gallery-overlay');
        
        if (overlay) {
            overlay.style.transform = 'translateY(100%)';
            overlay.style.opacity = '0';
        }
    }
}

// ==================== DYNAMIC COUNTER ANIMATION ====================
class CounterAnimation {
    constructor() {
        this.init();
    }

    init() {
        const counters = document.querySelectorAll('.result-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const targetText = element.textContent;
        const targetNumber = parseInt(targetText.replace(/\D/g, ''));
        const suffix = targetText.replace(/\d/g, '');
        
        let current = 0;
        const increment = targetNumber / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= targetNumber) {
                current = targetNumber;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 40);
    }
}

// ==================== SMOOTH SCROLL NAVIGATION ====================
class SmoothNavigation {
    constructor() {
        this.init();
    }

    init() {
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', this.handleClick.bind(this));
        });
    }

    handleClick(e) {
        e.preventDefault();
        
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}

// ==================== FORM ENHANCEMENT ====================
class FormEnhancements {
    constructor() {
        this.init();
    }

    init() {
        const inputs = document.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('focus', this.handleFocus.bind(this));
            input.addEventListener('blur', this.handleBlur.bind(this));
            input.addEventListener('input', this.handleInput.bind(this));
        });
    }

    handleFocus(e) {
        const input = e.currentTarget;
        input.parentElement.classList.add('focused');
    }

    handleBlur(e) {
        const input = e.currentTarget;
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    }

    handleInput(e) {
        const input = e.currentTarget;
        if (input.value) {
            input.parentElement.classList.add('has-value');
        } else {
            input.parentElement.classList.remove('has-value');
        }
    }
}

// ==================== ENHANCED LANGUAGE SWITCHER ====================
const translations = {
    pt: {
        'nav-home': 'Início',
        'nav-services': 'Serviços',
        'nav-about': 'Sobre',
        'nav-contact': 'Contato',
        'hero-title': 'Recupere a Confiança nos Seus Cabelos',
        'hero-subtitle': 'Com Jackeline Ferreira • Especialista em Tricologia em Genève',
        'hero-description': 'Pare de sofrer com queda capilar, calvície ou problemas no couro cabeludo. Descubra o tratamento personalizado que vai transformar a saúde dos seus cabelos.',
        'hero-button': 'Quero Minha Avaliação ✨',
        'services-title': 'Pare de Sofrer com Problemas Capilares',
        'services-subtitle': 'Descubra como centenas de pessoas já recuperaram a autoestima e confiança',
        'cta-button': 'Quero Minha Consulta 🚀'
    },
    en: {
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'hero-title': 'Restore Confidence in Your Hair',
        'hero-subtitle': 'With Jackeline Ferreira • Trichology Specialist in Geneva',
        'hero-description': 'Stop suffering from hair loss, baldness or scalp problems. Discover the personalized treatment that will transform your hair health.',
        'hero-button': 'Get My Assessment ✨',
        'services-title': 'Stop Suffering from Hair Problems',
        'services-subtitle': 'Discover how hundreds of people have already regained self-esteem and confidence',
        'cta-button': 'Book My Consultation 🚀'
    },
    fr: {
        'nav-home': 'Accueil',
        'nav-services': 'Services',
        'nav-about': 'À propos',
        'nav-contact': 'Contact',
        'hero-title': 'Retrouvez Confiance en Vos Cheveux',
        'hero-subtitle': 'Avec Jackeline Ferreira • Spécialiste en Trichologie à Genève',
        'hero-description': 'Arrêtez de souffrir de chute de cheveux, calvitie ou problèmes du cuir chevelu. Découvrez le traitement personnalisé qui transformera la santé de vos cheveux.',
        'hero-button': 'Je veux mon Évaluation ✨',
        'services-title': 'Arrêtez de Souffrir de Problèmes Capillaires',
        'services-subtitle': 'Découvrez comment des centaines de personnes ont déjà retrouvé estime de soi et confiance',
        'cta-button': 'Je veux ma Consultation 🚀'
    }
};

class LanguageSwitcher {
    constructor() {
        this.currentLang = 'pt';
        this.init();
    }

    init() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(button => {
            button.addEventListener('click', this.handleLanguageChange.bind(this));
        });
        
        // Set initial active language
        this.setActiveLanguage('pt');
    }

    handleLanguageChange(e) {
        const newLang = e.currentTarget.dataset.lang;
        this.switchLanguage(newLang);
        this.setActiveLanguage(newLang);
    }

    switchLanguage(lang) {
        const elements = document.querySelectorAll('[data-key]');
        
        elements.forEach(element => {
            const key = element.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        this.currentLang = lang;
    }

    setActiveLanguage(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    }
}

// ==================== PERFORMANCE OPTIMIZATIONS ====================
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Lazy load images
        this.lazyLoadImages();
        
        // Throttle scroll events
        this.throttleScrollEvents();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    throttleScrollEvents() {
        let ticking = false;
        
        function updateScrollEffects() {
            // Add parallax effects here if needed
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    new ScrollAnimations();
    new ModernHeader();
    new ServiceCards();
    new FloatingButtons();
    new GalleryEffects();
    new CounterAnimation();
    new SmoothNavigation();
    new FormEnhancements();
    new LanguageSwitcher();
    new PerformanceOptimizer();
    
    // Create particle background
    createParticles();
    
    // Add loading complete class
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// ==================== CSS DYNAMIC INJECTION ====================
const dynamicStyles = `
    /* Ripple Effect */
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(200, 168, 130, 0.4);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    /* Enhanced floating animation */
    .floating {
        animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }

    /* Particle styles */
    .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255,255,255,0.5);
        border-radius: 50%;
        animation: particle-float 8s infinite linear;
    }

    @keyframes particle-float {
        from {
            transform: translateY(100vh) rotate(0deg);
            opacity: 1;
        }
        to {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }

    /* Gallery overlay effects */
    .gallery-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, rgba(0,0,0,0.8));
        color: white;
        padding: 2rem;
        transform: translateY(100%);
        transition: all 0.4s ease;
        opacity: 0;
    }

    /* Form focus effects */
    .focused input,
    .focused textarea {
        border-color: #c8a882 !important;
        box-shadow: 0 0 15px rgba(200, 168, 130, 0.3) !important;
    }

    /* Enhanced scroll behavior */
    .loaded * {
        transition: transform 0.3s ease, opacity 0.3s ease !important;
    }
`;

// Inject dynamic styles
const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);

console.log('🎯 Bella Derme - Enhanced with modern animations and interactions!');
