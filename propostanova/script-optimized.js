/* ===========================
   BELLA DERME - JAVASCRIPT REFINADO
   =========================== */

// === VARIÁVEIS GLOBAIS ===
let isScrolling = false;
let currentLanguage = 'pt';

// === CONFIGURAÇÕES ===
const CONFIG = {
    particleCount: 25,
    scrollThrottle: 16,
    animationDuration: 1000,
    observerThreshold: 0.15
};

// === PRELOADER ===
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 600);
            }
        }, 1200);
    });
}

// === HEADER DINÂMICO ===
function initHeaderEffects() {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    
    function updateHeader() {
        if (!isScrolling) {
            requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                
                if (currentScrollY > 100) {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                    header.style.boxShadow = '0 4px 25px rgba(102, 126, 234, 0.08)';
                    header.style.padding = '0.5rem 0';
                } else {
                    header.style.background = 'rgba(245, 243, 240, 0.95)';
                    header.style.boxShadow = 'none';
                    header.style.padding = '1rem 0';
                }
                
                // Auto-hide header on scroll down
                if (currentScrollY > lastScrollY && currentScrollY > 200) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
                
                lastScrollY = currentScrollY;
                isScrolling = false;
            });
        }
    }
    
    window.addEventListener('scroll', () => {
        isScrolling = true;
        updateHeader();
    });
}

// === SCROLL SUAVE ===
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Atualizar link ativo
                updateActiveNavLink(link);
            }
        });
    });
}

// === ATUALIZAR LINK ATIVO ===
function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// === SCROLL REVEAL ANIMAÇÕES ===
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: CONFIG.observerThreshold,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Elementos para animar
    const animatedElements = document.querySelectorAll(
        '.fade-in, .slide-in-left, .slide-in-right, .scale-in'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// === SISTEMA DE PARTÍCULAS ===
function initParticleSystem() {
    const particleContainer = document.querySelector('.particles');
    
    if (!particleContainer) return;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posicionamento aleatório
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 12 + 's';
        particle.style.animationDuration = (12 + Math.random() * 8) + 's';
        
        particleContainer.appendChild(particle);
        
        // Remover partícula após animação
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 20000);
    }
    
    // Criar partículas iniciais
    for (let i = 0; i < CONFIG.particleCount; i++) {
        setTimeout(() => createParticle(), i * 200);
    }
    
    // Continuar criando partículas
    setInterval(createParticle, 800);
}

// === EFEITOS DE PARALLAX ===
function initParallaxEffect() {
    const heroSection = document.querySelector('#hero');
    
    if (!heroSection) return;
    
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const parallaxSpeed = scrolled * 0.3;
                
                heroSection.style.transform = `translateY(${parallaxSpeed}px)`;
                isScrolling = false;
            });
        }
    });
}

// === BOTÕES FLUTUANTES ===
function initFloatingButtons() {
    const floatingButtons = document.querySelectorAll('.floating');
    
    floatingButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.animationPlayState = 'paused';
            button.style.transform = 'translateY(-12px) scale(1.03)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.animationPlayState = 'running';
            button.style.transform = '';
        });
    });
}

// === SISTEMA DE IDIOMAS ===
const translations = {
    pt: {
        'nav-home': 'Home',
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
        'hero-title': 'Regain Confidence in Your Hair',
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
        'hero-description': 'Arrêtez de souffrir de chute de cheveux, calvitie ou problèmes du cuir chevelu. Découvrez le traitement personnalisé qui transformera la santé de vos cheveux.',
        'hero-button': 'Je Veux Mon Évaluation ✨'
    }
};

function initLanguageSelector() {
    const languageButtons = document.querySelectorAll('.lang-btn');
    
    languageButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = btn.getAttribute('data-lang');
            changeLanguage(newLang);
            
            // Atualizar botão ativo
            languageButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Definir idioma inicial
    const defaultBtn = document.querySelector('.lang-btn[data-lang="pt"]');
    if (defaultBtn) defaultBtn.classList.add('active');
}

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Atualizar todos os elementos com data-key
    const elementsToTranslate = document.querySelectorAll('[data-key]');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Salvar preferência no localStorage
    localStorage.setItem('preferred-language', lang);
}

// === EFEITOS DE HOVER NOS CARTÕES ===
function initCardEffects() {
    const serviceCards = document.querySelectorAll('.service');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// === FORMULÁRIO DE CONTATO ===
function initContactForm() {
    const form = document.querySelector('form');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validação simples
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (input.required && !input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#e74c3c';
                input.focus();
            } else {
                input.style.borderColor = '';
            }
        });
        
        if (isValid) {
            showSuccessMessage();
        }
    });
}

function showSuccessMessage() {
    const message = document.createElement('div');
    message.textContent = 'Mensagem enviada com sucesso!';
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent-gold);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 500;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(message)) {
                document.body.removeChild(message);
            }
        }, 300);
    }, 3000);
}

// === NAVEGAÇÃO ATIVA BASEADA NO SCROLL ===
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = '#' + entry.target.id;
                const correspondingLink = document.querySelector(`nav a[href="${targetId}"]`);
                
                if (correspondingLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-80px 0px -80px 0px'
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// === PERFORMANCE OPTIMIZATION ===
function optimizePerformance() {
    // Lazy loading para imagens
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// === SCROLL TO TOP ===
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Adicionar botão scroll to top
function addScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--gradient-primary);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    `;
    
    button.addEventListener('click', scrollToTop);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
            button.style.transform = 'scale(1)';
        } else {
            button.style.opacity = '0';
            button.style.transform = 'scale(0.8)';
        }
    });
    
    document.body.appendChild(button);
}

// === INICIALIZAÇÃO ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎨 Bella Derme - Inicializando sistema refinado...');
    
    // Carregar idioma salvo
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        changeLanguage(savedLanguage);
    }
    
    // Inicializar todos os módulos
    initPreloader();
    initHeaderEffects();
    initSmoothScroll();
    initScrollReveal();
    initParticleSystem();
    initParallaxEffect();
    initFloatingButtons();
    initLanguageSelector();
    initCardEffects();
    initContactForm();
    initActiveNavigation();
    optimizePerformance();
    
    // Adicionar botão scroll to top após 2 segundos
    setTimeout(addScrollToTopButton, 2000);
    
    console.log('✨ Bella Derme - Sistema carregado com sucesso!');
});

// === TRATAMENTO DE ERROS ===
window.addEventListener('error', (e) => {
    console.error('Erro detectado:', e.error);
});

// === REDIMENSIONAMENTO DA JANELA ===
window.addEventListener('resize', () => {
    // Recalcular partículas se necessário
    const particles = document.querySelectorAll('.particle');
    if (particles.length > CONFIG.particleCount * 2) {
        particles.forEach((particle, index) => {
            if (index < particles.length / 2) {
                particle.remove();
            }
        });
    }
});
