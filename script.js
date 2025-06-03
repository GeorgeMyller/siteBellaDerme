// JavaScript for the skincare clinic landing page

// Translations object
const translations = {
    pt: {
        // Navigation
        'nav-home': 'Início',
        'nav-services': 'Serviços',
        'nav-about': 'Sobre Nós',
        'nav-contact': 'Contato',
        
        // Hero section
        'hero-title': 'Bem-vindos à BellaDerme',
        'hero-subtitle': 'Sua Beleza, Nossa Paixão',
        'hero-button': 'Agendar Consulta',
        
        // Services section
        'services-title': 'Nossos Serviços',
        'service1-title': 'Cuidados Faciais',
        'service1-desc': 'Oferecemos uma gama de tratamentos faciais projetados para rejuvenescer e refrescar sua pele. Nossos serviços incluem limpeza profunda, terapias avançadas de hidratação e tratamentos anti-envelhecimento eficazes, adaptados ao seu tipo específico de pele e preocupações.',
        'service2-title': 'Tricologia',
        'service2-desc': 'Especializando-se na saúde do seu cabelo e couro cabeludo, fornecemos soluções especializadas para tratamento de queda de cabelo e programas abrangentes de recuperação do couro cabeludo. Nossos tricologistas usam técnicas avançadas para restaurar a vitalidade do seu cabelo.',
        
        // About section
        'about-title': 'Sobre Nós',
        'about-desc': 'BellaDerme é uma clínica de primeira linha especializada em cuidados faciais avançados e tricologia. Nossa equipe dedicada de especialistas é apaixonada por fornecer tratamentos personalizados para realçar sua beleza natural e bem-estar. Utilizamos as mais recentes tecnologias e produtos da mais alta qualidade para garantir que você receba o melhor cuidado possível.',
        
        // Contact section
        'contact-title': 'Entre em Contato',
        'form-name': 'Nome:',
        'form-email': 'Email:',
        'form-message': 'Mensagem:',
        'form-submit': 'Enviar Mensagem',
        
        // Footer
        'footer-copyright': '© 2023 BellaDerme. Todos os direitos reservados.',
        
        // Form messages
        'form-success': 'Obrigado pela sua mensagem! Entraremos em contato em breve.',
        'form-error': 'Por favor, preencha todos os campos obrigatórios.'
    },
    
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-title': 'Welcome to BellaDerme',
        'hero-subtitle': 'Your Beauty, Our Passion',
        'hero-button': 'Book a Consultation',
        
        // Services section
        'services-title': 'Our Services',
        'service1-title': 'Facial Care',
        'service1-desc': 'We offer a range of facial treatments designed to rejuvenate and refresh your skin. Our services include deep cleansing, advanced hydration therapies, and effective anti-aging treatments tailored to your specific skin type and concerns.',
        'service2-title': 'Trichology',
        'service2-desc': 'Specializing in the health of your hair and scalp, we provide expert solutions for hair loss treatment and comprehensive scalp recovery programs. Our trichologists use advanced techniques to restore vitality to your hair.',
        
        // About section
        'about-title': 'About Us',
        'about-desc': 'BellaDerme is a premier clinic specializing in advanced facial care and trichology. Our dedicated team of experts is passionate about providing personalized treatments to enhance your natural beauty and well-being. We utilize the latest technologies and highest quality products to ensure you receive the best possible care.',
        
        // Contact section
        'contact-title': 'Contact Us',
        'form-name': 'Name:',
        'form-email': 'Email:',
        'form-message': 'Message:',
        'form-submit': 'Send Message',
        
        // Footer
        'footer-copyright': '© 2023 BellaDerme. All rights reserved.',
        
        // Form messages
        'form-success': 'Thank you for your message! We will get back to you soon.',
        'form-error': 'Please fill in all required fields.'
    },
    
    fr: {
        // Navigation
        'nav-home': 'Accueil',
        'nav-services': 'Services',
        'nav-about': 'À Propos',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-title': 'Bienvenue chez BellaDerme',
        'hero-subtitle': 'Votre Beauté, Notre Passion',
        'hero-button': 'Réserver une Consultation',
        
        // Services section
        'services-title': 'Nos Services',
        'service1-title': 'Soins du Visage',
        'service1-desc': 'Nous offrons une gamme de traitements faciaux conçus pour rajeunir et rafraîchir votre peau. Nos services incluent le nettoyage en profondeur, les thérapies d\'hydratation avancées et les traitements anti-âge efficaces adaptés à votre type de peau spécifique et à vos préoccupations.',
        'service2-title': 'Trichologie',
        'service2-desc': 'Spécialisés dans la santé de vos cheveux et de votre cuir chevelu, nous fournissons des solutions expertes pour le traitement de la perte de cheveux et des programmes complets de récupération du cuir chevelu. Nos trichologues utilisent des techniques avancées pour restaurer la vitalité de vos cheveux.',
        
        // About section
        'about-title': 'À Propos de Nous',
        'about-desc': 'BellaDerme est une clinique de premier plan spécialisée dans les soins faciaux avancés et la trichologie. Notre équipe dévouée d\'experts est passionnée par la fourniture de traitements personnalisés pour améliorer votre beauté naturelle et votre bien-être. Nous utilisons les dernières technologies et les produits de la plus haute qualité pour vous assurer de recevoir les meilleurs soins possibles.',
        
        // Contact section
        'contact-title': 'Contactez-Nous',
        'form-name': 'Nom:',
        'form-email': 'Email:',
        'form-message': 'Message:',
        'form-submit': 'Envoyer le Message',
        
        // Footer
        'footer-copyright': '© 2023 BellaDerme. Tous droits réservés.',
        
        // Form messages
        'form-success': 'Merci pour votre message! Nous vous recontacterons bientôt.',
        'form-error': 'Veuillez remplir tous les champs obligatoires.'
    }
};

// Current language
let currentLanguage = 'pt'; // Default to Portuguese

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update all elements with data-key attributes
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Save language preference
    localStorage.setItem('selectedLanguage', lang);
}

// Initialize language system
function initializeLanguage() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Set up language button event listeners
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Apply initial language
    changeLanguage(currentLanguage);
}

// Example: Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Form submission handling (basic)
const form = document.querySelector('#contact form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real application, you would send this data to a server
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            console.log('Form submitted:', { name, email, message });
            alert(translations[currentLanguage]['form-success']);
            form.reset();
        } else {
            alert(translations[currentLanguage]['form-error']);
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
});
