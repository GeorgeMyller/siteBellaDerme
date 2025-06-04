/**
 * BELLADERM - SISTEMA AVANÇADO DE ANIMAÇÕES E INTERATIVIDADE
 * Versão: Ultimate Edition
 * Desenvolvido para máxima experiência visual e performance
 */

// ========================================================================================
// 🎯 CONFIGURAÇÕES GLOBAIS
// ========================================================================================

const BellaDermConfig = {
    animations: {
        duration: {
            fast: 300,
            normal: 600,
            slow: 1000,
            ultra: 1500
        },
        easing: {
            smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
            bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }
    },
    effects: {
        parallaxIntensity: 0.5,
        glowIntensity: 20,
        morphSpeed: 0.3
    }
};

// ========================================================================================
// 🌟 SISTEMA DE PARTÍCULAS FLUTUANTES
// ========================================================================================

class ParticleSystem {
    constructor() {
        this.particles = [];
        this.container = null;
        this.maxParticles = 15;
        this.init();
    }

    init() {
        this.createContainer();
        this.generateParticles();
        this.animate();
    }

    createContainer() {
        this.container = document.createElement('div');
        this.container.className = 'particle-system';
        this.container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        `;
        document.body.appendChild(this.container);
    }

    generateParticles() {
        for (let i = 0; i < this.maxParticles; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const opacity = Math.random() * 0.3 + 0.1;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, #FF6B9D, #4ECDC4);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            opacity: ${opacity};
            animation: float ${Math.random() * 20 + 15}s infinite linear;
        `;

        this.container.appendChild(particle);
        this.particles.push({
            element: particle,
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }

    animate() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
            if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

            particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ========================================================================================
// 🎭 SISTEMA DE MORPHING AVANÇADO
// ========================================================================================

class MorphingSystem {
    constructor() {
        this.morphTargets = document.querySelectorAll('.morph-element');
        this.init();
    }

    init() {
        this.morphTargets.forEach(element => {
            this.setupMorphing(element);
        });
    }

    setupMorphing(element) {
        let isHovered = false;
        
        element.addEventListener('mouseenter', () => {
            if (!isHovered) {
                isHovered = true;
                this.morphIn(element);
            }
        });

        element.addEventListener('mouseleave', () => {
            isHovered = false;
            this.morphOut(element);
        });
    }

    morphIn(element) {
        element.style.transition = `all ${BellaDermConfig.animations.duration.normal}ms ${BellaDermConfig.animations.easing.bounce}`;
        element.style.transform = 'scale(1.05) perspective(1000px) rotateX(5deg)';
        element.style.boxShadow = '0 20px 40px rgba(255, 107, 157, 0.3)';
        element.style.filter = 'brightness(1.1) saturate(1.2)';
    }

    morphOut(element) {
        element.style.transform = 'scale(1) perspective(1000px) rotateX(0deg)';
        element.style.boxShadow = '0 10px 30px rgba(255, 107, 157, 0.1)';
        element.style.filter = 'brightness(1) saturate(1)';
    }
}

// ========================================================================================
// 🌊 SISTEMA DE PARALLAX MULTI-CAMADAS
// ========================================================================================

class AdvancedParallax {
    constructor() {
        this.elements = [];
        this.lastScrollY = 0;
        this.ticking = false;
        this.init();
    }

    init() {
        this.setupElements();
        this.bindEvents();
    }

    setupElements() {
        // Elementos com diferentes velocidades de parallax
        const parallaxSelectors = [
            { selector: '.hero-content', speed: 0.3 },
            { selector: '.service-card', speed: 0.5 },
            { selector: '.about-image', speed: 0.7 },
            { selector: '.testimonial-card', speed: 0.4 }
        ];

        parallaxSelectors.forEach(item => {
            const elements = document.querySelectorAll(item.selector);
            elements.forEach(element => {
                this.elements.push({
                    element: element,
                    speed: item.speed,
                    offset: element.offsetTop
                });
            });
        });
    }

    bindEvents() {
        window.addEventListener('scroll', () => {
            this.lastScrollY = window.scrollY;
            this.requestTick();
        });
    }

    requestTick() {
        if (!this.ticking) {
            requestAnimationFrame(() => this.updateElements());
            this.ticking = true;
        }
    }

    updateElements() {
        this.elements.forEach(item => {
            const yPos = -(this.lastScrollY - item.offset) * item.speed;
            item.element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        this.ticking = false;
    }
}

// ========================================================================================
// ✨ SISTEMA DE GLOWING INTERATIVO
// ========================================================================================

class InteractiveGlow {
    constructor() {
        this.glowElements = document.querySelectorAll('.glow-effect');
        this.init();
    }

    init() {
        this.glowElements.forEach(element => {
            this.setupGlow(element);
        });
    }

    setupGlow(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            element.style.background = `
                radial-gradient(circle at ${x}% ${y}%, 
                rgba(255, 107, 157, 0.3) 0%, 
                rgba(78, 205, 196, 0.2) 50%, 
                transparent 70%)
            `;
        });

        element.addEventListener('mouseleave', () => {
            element.style.background = '';
        });
    }
}

// ========================================================================================
// 🎪 SISTEMA DE ANIMAÇÕES SEQUENCIAIS
// ========================================================================================

class SequentialAnimations {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        this.createObserver();
        this.observeElements();
    }

    createObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSequence(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
    }

    observeElements() {
        const sequences = document.querySelectorAll('.sequence-animation');
        sequences.forEach(element => {
            this.observer.observe(element);
        });
    }

    animateSequence(container) {
        const children = container.children;
        Array.from(children).forEach((child, index) => {
            setTimeout(() => {
                child.style.transform = 'translateY(0) scale(1)';
                child.style.opacity = '1';
                child.style.filter = 'blur(0px)';
            }, index * 150);
        });
    }
}

// ========================================================================================
// 🎯 SISTEMA DE MICRO-INTERAÇÕES
// ========================================================================================

class MicroInteractions {
    constructor() {
        this.init();
    }

    init() {
        this.setupButtonEffects();
        this.setupCardEffects();
        this.setupFormEffects();
        this.setupScrollIndicator();
    }

    setupButtonEffects() {
        const buttons = document.querySelectorAll('.btn, .cta-button, .service-btn');
        
        buttons.forEach(button => {
            // Efeito de ripple
            button.addEventListener('click', (e) => {
                this.createRipple(e, button);
            });

            // Efeito de hover magnético
            button.addEventListener('mousemove', (e) => {
                this.magneticEffect(e, button);
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'scale(1) translate(0, 0)';
            });
        });
    }

    createRipple(event, button) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }

    magneticEffect(event, element) {
        const rect = element.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 20;
        
        element.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
    }

    setupCardEffects() {
        const cards = document.querySelectorAll('.service-card, .testimonial-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
                card.style.boxShadow = '0 25px 50px rgba(255, 107, 157, 0.2)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '0 10px 30px rgba(255, 107, 157, 0.1)';
            });
        });
    }

    setupFormEffects() {
        const inputs = document.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.style.transform = 'scale(1.02)';
                input.style.boxShadow = '0 0 20px rgba(78, 205, 196, 0.3)';
            });

            input.addEventListener('blur', () => {
                input.parentElement.style.transform = 'scale(1)';
                input.style.boxShadow = 'none';
            });
        });
    }

    setupScrollIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        indicator.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, #FF6B9D, #4ECDC4);
            z-index: 9999;
            transform-origin: left;
            transform: scaleX(0);
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(indicator);

        window.addEventListener('scroll', () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
            indicator.style.transform = `scaleX(${scrollPercentage})`;
        });
    }
}

// ========================================================================================
// 🎨 SISTEMA DE TEMAS DINÂMICOS
// ========================================================================================

class DynamicThemes {
    constructor() {
        this.currentTheme = 'default';
        this.themes = {
            default: {
                primary: '#FF6B9D',
                secondary: '#4ECDC4',
                accent: '#FFD93D'
            },
            evening: {
                primary: '#8B5A8C',
                secondary: '#2E8B8B',
                accent: '#F4A460'
            },
            elegant: {
                primary: '#C8A2C8',
                secondary: '#708090',
                accent: '#DDA0DD'
            }
        };
        this.init();
    }

    init() {
        this.autoThemeSwitch();
        this.createThemeSelector();
    }

    autoThemeSwitch() {
        const hour = new Date().getHours();
        if (hour >= 18 || hour <= 6) {
            this.applyTheme('evening');
        } else if (hour >= 14 && hour < 18) {
            this.applyTheme('elegant');
        }
    }

    applyTheme(themeName) {
        const theme = this.themes[themeName];
        if (!theme) return;

        document.documentElement.style.setProperty('--primary-color', theme.primary);
        document.documentElement.style.setProperty('--secondary-color', theme.secondary);
        document.documentElement.style.setProperty('--accent-color', theme.accent);
        
        this.currentTheme = themeName;
    }

    createThemeSelector() {
        const selector = document.createElement('div');
        selector.className = 'theme-selector';
        selector.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            gap: 10px;
            background: rgba(255,255,255,0.9);
            padding: 10px;
            border-radius: 25px;
            backdrop-filter: blur(10px);
        `;

        Object.keys(this.themes).forEach(themeName => {
            const button = document.createElement('button');
            button.style.cssText = `
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: 2px solid transparent;
                background: ${this.themes[themeName].primary};
                cursor: pointer;
                transition: all 0.3s ease;
            `;
            
            button.addEventListener('click', () => {
                this.applyTheme(themeName);
                this.updateSelectorButtons(selector, themeName);
            });

            selector.appendChild(button);
        });

        document.body.appendChild(selector);
    }

    updateSelectorButtons(selector, activeTheme) {
        const buttons = selector.querySelectorAll('button');
        buttons.forEach((button, index) => {
            const themeName = Object.keys(this.themes)[index];
            button.style.borderColor = themeName === activeTheme ? '#333' : 'transparent';
            button.style.transform = themeName === activeTheme ? 'scale(1.2)' : 'scale(1)';
        });
    }
}

// ========================================================================================
// 🚀 INICIALIZAÇÃO DO SISTEMA
// ========================================================================================

class BellaDermApp {
    constructor() {
        this.systems = {};
        this.init();
    }

    init() {
        // Aguarda o DOM estar pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeSystems());
        } else {
            this.initializeSystems();
        }
    }

    initializeSystems() {
        try {
            // Inicializa todos os sistemas
            this.systems.particles = new ParticleSystem();
            this.systems.morphing = new MorphingSystem();
            this.systems.parallax = new AdvancedParallax();
            this.systems.glow = new InteractiveGlow();
            this.systems.sequences = new SequentialAnimations();
            this.systems.micro = new MicroInteractions();
            this.systems.themes = new DynamicThemes();

            // Adiciona classes necessárias aos elementos
            this.enhanceElements();
            
            // Adiciona estilos dinâmicos
            this.addDynamicStyles();

            console.log('🌟 BellaDerm Ultimate System Initialized');
        } catch (error) {
            console.error('Erro na inicialização:', error);
        }
    }

    enhanceElements() {
        // Adiciona classes para animações
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.classList.add('morph-element', 'glow-effect', 'sequence-animation');
        });

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.add('sequence-animation');
        });
    }

    addDynamicStyles() {
        const styles = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
            }

            @keyframes ripple {
                0% { transform: scale(0); opacity: 1; }
                100% { transform: scale(2); opacity: 0; }
            }

            .sequence-animation > * {
                transform: translateY(50px) scale(0.9);
                opacity: 0;
                filter: blur(5px);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .morph-element {
                transition: all 0.3s ease;
                transform-style: preserve-3d;
            }

            .glow-effect {
                position: relative;
                overflow: hidden;
            }

            .scroll-indicator {
                width: 100%;
            }

            .theme-selector button:hover {
                transform: scale(1.3) !important;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            }

            /* Otimizações de performance */
            * {
                will-change: transform;
            }

            .service-card, .testimonial-card {
                transform: translateZ(0);
                backface-visibility: hidden;
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
}

// ========================================================================================
// 🎯 INICIALIZAÇÃO GLOBAL
// ========================================================================================

// Inicializa o sistema
const bellaDermApp = new BellaDermApp();

// Exporta para uso externo se necessário
window.BellaDerm = {
    app: bellaDermApp,
    config: BellaDermConfig
};
