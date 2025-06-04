// JavaScript for the skincare clinic landing page

// Translations object
const translations = {
    pt: {
        // Navigation
        'nav-home': 'Início',
        'nav-services': 'Serviços',
        'nav-about': 'Sobre',
        'nav-contact': 'Contato',
        
        // Hero section
        'hero-title': 'Recupere a Confiança nos Seus Cabelos, Barba e Sobrancelhas',
        'hero-subtitle': 'Com Jackeline Ferreira • Especialista em Tricologia em Genève',
        'hero-description': 'Pare de sofrer com queda capilar, calvície, falhas na barba ou sobrancelhas ralas. Descubra o tratamento personalizado que vai transformar sua aparência.',
        'hero-button': 'Quero Minha Avaliação ',
        
        // Services section
        'services-title': 'Pare de Sofrer com Problemas Capilares',
        'services-subtitle': 'Descubra como centenas de pessoas já recuperaram a autoestima e confiança',
        'service1-title': '🔬 Diagnóstico Preciso com Tricoscopia',
        'service1-desc': 'Através da tricoscopia digital, identifico com precisão a causa raiz dos seus problemas capilares. Sem adivinhações - apenas resultados baseados em ciência.',
        'service2-title': '💫 Tratamento 100% Personalizado',
        'service2-desc': 'Seu protocolo único, desenvolvido especialmente para você. Porque cada pessoa tem necessidades diferentes e merece resultados extraordinários.',
        'service3-title': '🧔 Tratamento Especializado de Barba',
        'service3-desc': 'Protocolo específico para homens que desejam uma barba mais densa, uniforme e saudável. Tratamento completo da pele e folículos pilosos.',
        'service4-title': '👁️ Reconstrução de Sobrancelhas',
        'service4-desc': 'Recupere sobrancelhas naturalmente cheias e bem definidas. Técnicas avançadas para estimular o crescimento e restaurar a beleza do seu olhar.',
        
        // Benefits
        'benefit1': 'Queda capilar excessiva',
        'benefit2': 'Alopecia e calvície precoce',
        'benefit3': 'Dermatite e coceira no couro cabeludo',
        'benefit4': 'Recuperação pós-quimioterapia',
        'benefit5': 'Alterações hormonais da menopausa',
        'benefit6': 'Suporte pré e pós transplante capilar',
        'benefit7': 'Controle de oleosidade e ressecamento',
        'benefit8': 'Eliminação de caspa e inflamações',
        'benefit9': 'Estimulação do crescimento saudável',
        'benefit10': 'Aumento da densidade e volume',
        
        // Beard benefits
        'beard-benefit1': 'Falhas na barba',
        'beard-benefit2': 'Crescimento irregular',
        'beard-benefit3': 'Coceira e irritação',
        'beard-benefit4': 'Pelos encravados',
        'beard-benefit5': 'Estimulação do crescimento',
        
        // Eyebrow benefits
        'eyebrow-benefit1': 'Sobrancelhas ralas',
        'eyebrow-benefit2': 'Falhas por depilação excessiva',
        'eyebrow-benefit3': 'Alopecia areata',
        'eyebrow-benefit4': 'Estimulação natural',
        'eyebrow-benefit5': 'Recuperação da forma original',
        
        // Men's treatments section
        'mens-title': 'Tratamentos Especializados para Homens',
        'mens-subtitle': 'Porque o cuidado masculino merece atenção especializada',
        'mens-beard-title': 'Tratamento de Barba Completo',
        'mens-beard-1': 'Análise tricoscópica da região da barba',
        'mens-beard-2': 'Protocolos para densificar falhas',
        'mens-beard-3': 'Tratamento de pelos encravados',
        'mens-beard-4': 'Cuidados pós-barbear especializados',
        'mens-hair-title': 'Calvície e Alopecia Masculina',
        'mens-hair-1': 'Diagnóstico preciso da alopecia androgenética',
        'mens-hair-2': 'Protocolos de estímulo capilar',
        'mens-hair-3': 'Suporte pré/pós transplante',
        'mens-hair-4': 'Cuidados preventivos personalizados',
        'mens-cta-text': '💪 Mais de 200 homens já transformaram sua aparência',
        'mens-cta-button': 'Quero Tratar Minha Barba/Cabelo',
        
        // Men's treatments section
        'mens-title': 'Tratamentos Especializados para Homens',
        'mens-subtitle': 'Porque o cuidado masculino merece atenção especializada',
        'mens-beard-title': 'Tratamento de Barba Completo',
        'mens-beard-1': 'Análise tricoscópica da região da barba',
        'mens-beard-2': 'Protocolos para densificar falhas',
        'mens-beard-3': 'Tratamento de pelos encravados',
        'mens-beard-4': 'Cuidados pós-barbear especializados',
        'mens-hair-title': 'Calvície e Alopecia Masculina',
        'mens-hair-1': 'Diagnóstico preciso da alopecia androgenética',
        'mens-hair-2': 'Protocolos de estímulo capilar',
        'mens-hair-3': 'Suporte pré/pós transplante',
        'mens-hair-4': 'Cuidados preventivos personalizados',
        'mens-cta-text': '💪 Mais de 200 homens já transformaram sua aparência',
        'mens-cta-button': 'Quero Tratar Minha Barba/Cabelo',
        
        // CTA
        'cta-text': '⭐ Mais de 500 clientes satisfeitos em Genève',
        'cta-button': 'Quero Minha Consulta ',
        
        // Gallery section
        'gallery-title': 'Galeria dos Nossos Tratamentos',
        'gallery-subtitle': 'Conheça nossos equipamentos e técnicas especializadas',
        'gallery-diagnostic-title': 'Diagnóstico Avançado',
        'gallery-diagnostic-desc': 'Tricoscopia digital de alta precisão',
        'gallery-hair-title': 'Tratamento Capilar',
        'gallery-hair-desc': 'Protocolos personalizados',
        'gallery-beard-title': 'Cuidados da Barba',
        'gallery-beard-desc': 'Técnicas especializadas masculinas',
        'gallery-eyebrow-title': 'Sobrancelhas',
        'gallery-eyebrow-desc': 'Reconstrução e fortalecimento',
        
        // About section
        'about-title': 'Por que 90% dos Tratamentos Capilares Falham?',
        'about-desc': 'A resposta é simples: porque tratam apenas os sintomas, não a causa raiz. Diferente de outros profissionais, eu utilizo a tricoscopia digital para ver exatamente o que está acontecendo no seu couro cabeludo.',
        'about-process': 'Com mais de 10 anos de experiência e centenas de casos de sucesso, desenvolvi um método único que combina tecnologia de ponta com cuidado humanizado. Cada protocolo é criado especificamente para você - porque não existem duas pessoas iguais.',
        
        // Results section
        'results-title': 'Resultados Que Falam Por Si',
        'results-subtitle': 'Veja as transformações reais dos nossos clientes',
        'result1': 'dos clientes veem melhoria em 30 dias',
        'result2': 'vidas transformadas em Genève',
        'result3': 'anos de experiência comprovada',
        'result4': 'tratamentos personalizados',
        'testimonial-text': '"Depois de anos sofrendo com queda capilar, finalmente encontrei a solução. Jackeline não só identificou a causa, como criou um protocolo que funcionou de verdade. Hoje minha autoestima está nas alturas!"',
        'testimonial-author': '- Maria S., 42 anos',
        
        // Contact section
        'contact-title': 'Pronto Para Transformar Seus Cabelos?',
        'contact-urgency': '⚡ Vagas Limitadas para Este Mês',
        'consultation-note': 'Não perca mais tempo. Sua transformação capilar começa agora.',
        'form-name': 'Nome:',
        'form-email': 'Email:',
        'form-message': 'Qual é sua maior preocupação capilar:',
        'form-submit': 'GARANTIR MINHA VAGA ',
        
        // Footer
        'footer-copyright': '© 2025 Jackeline Ferreira - Bella Derme. Todos os direitos reservados.',
        
        // Form messages
        'form-success': 'Obrigada pela sua mensagem! Entraremos em contato em breve para agendar sua consulta.',
        'form-error': 'Por favor, preencha todos os campos para que possamos ajudá-la melhor.'
    },
    
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-title': 'Restore Confidence in Your Hair, Beard & Eyebrows',
        'hero-subtitle': 'With Jackeline Ferreira • Trichology Specialist in Geneva',
        'hero-description': 'Stop suffering from hair loss, baldness, beard gaps or thin eyebrows. Discover the personalized treatment that will transform your appearance.',
        'hero-button': 'I Want My Assessment',
        
        // Services section
        'services-title': 'Stop Suffering from Hair Problems',
        'services-subtitle': 'Discover how hundreds of people have already regained self-esteem and confidence',
        'service1-title': '🔬 Accurate Diagnosis with Trichoscopy',
        'service1-desc': 'Through digital trichoscopy, I precisely identify the root cause of your hair problems. No guessing - only science-based results.',
        'service2-title': '💫 100% Personalized Treatment',
        'service2-desc': 'Your unique protocol, developed especially for you. Because each person has different needs and deserves extraordinary results.',
        'service3-title': '🧔 Specialized Beard Treatment',
        'service3-desc': 'Specific protocol for men who desire a denser, uniform and healthy beard. Complete treatment of skin and hair follicles.',
        'service4-title': '👁️ Eyebrow Reconstruction',
        'service4-desc': 'Restore naturally full and well-defined eyebrows. Advanced techniques to stimulate growth and restore the beauty of your gaze.',
        
        // Benefits
        'benefit1': 'Hair loss',
        'benefit2': 'Alopecia and baldness',
        'benefit3': 'Seborrheic dermatitis',
        'benefit4': 'Post-chemotherapy',
        'benefit5': 'Menopausal hair',
        'benefit6': 'Pre and post hair transplant',
        'benefit7': 'Oiliness or dryness',
        'benefit8': 'Dandruff, dermatitis, folliculitis',
        'benefit9': 'Growth failures',
        'benefit10': 'Changes in hair density',
        
        // CTA
        'cta-text': '✨ Care in a welcoming and professional environment',
        'cta-button': 'Book Your Consultation',
        
        // Gallery section
        'gallery-title': 'Our Treatment Gallery',
        'gallery-subtitle': 'Discover our specialized equipment and techniques',
        'gallery-diagnostic-title': 'Advanced Diagnosis',
        'gallery-diagnostic-desc': 'High-precision digital trichoscopy',
        'gallery-hair-title': 'Hair Treatment',
        'gallery-hair-desc': 'Personalized protocols',
        'gallery-beard-title': 'Beard Care',
        'gallery-beard-desc': 'Specialized masculine techniques',
        'gallery-eyebrow-title': 'Eyebrows',
        'gallery-eyebrow-desc': 'Reconstruction and strengthening',
        
        // About section
        'about-title': 'Did you know that many hair problems start with the scalp?',
        'about-desc': 'Trichoscopy is an essential examination to deeply understand scalp and hair health.',
        'about-process': 'This is the first step towards truly effective, personalized hair treatment with real results. In my assessment, I use cutting-edge technology combined with technical knowledge to create the best care plan for you.',
        
        // Contact section
        'contact-title': 'Contact',
        'consultation-note': 'Book your personalized assessment and restore balance.',
        'form-name': 'Name:',
        'form-email': 'Email:',
        'form-message': 'Message:',
        'form-submit': 'Send Message',
        
        // Footer
        'footer-copyright': '© 2025 Jackeline Ferreira - Bella Derme. All rights reserved.',
        
        // Form messages
        'form-success': 'Thank you for your message! We will contact you soon to schedule your consultation.',
        'form-error': 'Please fill in all fields so we can better assist you.'
    },
    
    fr: {
        // Navigation
        'nav-home': 'Accueil',
        'nav-services': 'Services',
        'nav-about': 'À Propos',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-title': 'Retrouvez Confiance en Vos Cheveux, Barbe et Sourcils',
        'hero-subtitle': 'Avec Jackeline Ferreira • Spécialiste en Trichologie à Genève',
        'hero-description': 'Arrêtez de souffrir de chute de cheveux, calvitie, trous dans la barbe ou sourcils clairsemés. Découvrez le traitement personnalisé qui transformera votre apparence.',
        'hero-button': 'Je Veux Mon Évaluation',
        
        // Services section
        'services-title': 'Arrêtez de Souffrir de Problèmes Capillaires',
        'services-subtitle': 'Découvrez comment des centaines de personnes ont déjà retrouvé estime de soi et confiance',
        'service1-title': '🔬 Diagnostic Précis avec Trichoscopie',
        'service1-desc': 'Grâce à la trichoscopie numérique, j\'identifie avec précision la cause racine de vos problèmes capillaires. Aucune supposition - seulement des résultats basés sur la science.',
        'service2-title': '💫 Traitement 100% Personnalisé',
        'service2-desc': 'Votre protocole unique, développé spécialement pour vous. Parce que chaque personne a des besoins différents et mérite des résultats extraordinaires.',
        'service3-title': '🧔 Traitement Spécialisé de la Barbe',
        'service3-desc': 'Protocole spécifique pour les hommes qui désirent une barbe plus dense, uniforme et saine. Traitement complet de la peau et des follicules pileux.',
        'service4-title': '👁️ Reconstruction des Sourcils',
        'service4-desc': 'Retrouvez des sourcils naturellement pleins et bien définis. Techniques avancées pour stimuler la croissance et restaurer la beauté de votre regard.',
        
        // Benefits
        'benefit1': 'Chute de cheveux',
        'benefit2': 'Alopécie et calvitie',
        'benefit3': 'Dermatite séborrhéique',
        'benefit4': 'Post-chimiothérapie',
        'benefit5': 'Cheveux de la ménopause',
        'benefit6': 'Pré et post greffe capillaire',
        'benefit7': 'Gras ou sécheresse',
        'benefit8': 'Pellicules, dermatite, folliculite',
        'benefit9': 'Échecs de croissance',
        'benefit10': 'Changements dans la densité des cheveux',
        
        // CTA
        'cta-text': '✨ Soins dans un environnement accueillant et professionnel',
        'cta-button': 'Réservez Votre Consultation',
        
        // Gallery section
        'gallery-title': 'Galerie de Nos Traitements',
        'gallery-subtitle': 'Découvrez nos équipements et techniques spécialisées',
        'gallery-diagnostic-title': 'Diagnostic Avancé',
        'gallery-diagnostic-desc': 'Trichoscopie numérique de haute précision',
        'gallery-hair-title': 'Traitement Capillaire',
        'gallery-hair-desc': 'Protocoles personnalisés',
        'gallery-beard-title': 'Soins de la Barbe',
        'gallery-beard-desc': 'Techniques spécialisées masculines',
        'gallery-eyebrow-title': 'Sourcils',
        'gallery-eyebrow-desc': 'Reconstruction et renforcement',
        
        // About section
        'about-title': 'Saviez-vous que de nombreux problèmes capillaires commencent par le cuir chevelu ?',
        'about-desc': 'La trichoscopie est un examen essentiel pour comprendre en profondeur la santé du cuir chevelu et des cheveux.',
        'about-process': 'C\'est la première étape vers un traitement capillaire vraiment efficace, personnalisé et avec de vrais résultats. Dans mon évaluation, j\'utilise une technologie de pointe combinée à des connaissances techniques pour créer le meilleur plan de soins pour vous.',
        
        // Contact section
        'contact-title': 'Contact',
        'consultation-note': 'Réservez votre évaluation personnalisée et retrouvez l\'équilibre.',
        'form-name': 'Nom:',
        'form-email': 'Email:',
        'form-message': 'Message:',
        'form-submit': 'Envoyer le Message',
        
        // Footer
        'footer-copyright': '© 2025 Jackeline Ferreira - Bella Derme. Tous droits réservés.',
        
        // Form messages
        'form-success': 'Merci pour votre message! Nous vous contacterons bientôt pour programmer votre consultation.',
        'form-error': 'Veuillez remplir tous les champs pour que nous puissions mieux vous aider.'
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
    
    // Update WhatsApp links based on language
    const heroButton = document.querySelector('.hero-button');
    const ctaButton = document.querySelector('.cta-button');
    const formButton = document.querySelector('.whatsapp-submit-btn');
    const mensButton = document.querySelector('.mens-cta-button');
    
    // Use the same message for all buttons
    let message = '';
    let mensMessage = '';
    switch(lang) {
        case 'pt':
            message = 'Olá%20Jackeline!%20Gostaria%20de%20agendar%20uma%20avaliação%20personalizada%20para%20cuidados%20capilares.%20Poderia%20me%20ajudar%20com%20mais%20informações?';
            mensMessage = 'Olá%20Jackeline!%20Sou%20homem%20e%20gostaria%20de%20saber%20mais%20sobre%20tratamentos%20de%20barba%20e%20cabelo.%20Poderia%20me%20ajudar?';
            break;
        case 'en':
            message = 'Hello%20Jackeline!%20I%20would%20like%20to%20schedule%20a%20personalized%20assessment%20for%20hair%20care.%20Could%20you%20help%20me%20with%20more%20information?';
            mensMessage = 'Hello%20Jackeline!%20I%20am%20a%20man%20and%20would%20like%20to%20know%20more%20about%20beard%20and%20hair%20treatments.%20Could%20you%20help%20me?';
            break;
        case 'fr':
            message = 'Bonjour%20Jackeline!%20J\'aimerais%20programmer%20une%20évaluation%20personnalisée%20pour%20les%20soins%20capillaires.%20Pourriez-vous%20m\'aider%20avec%20plus%20d\'informations?';
            mensMessage = 'Bonjour%20Jackeline!%20Je%20suis%20un%20homme%20et%20j\'aimerais%20en%20savoir%20plus%20sur%20les%20traitements%20de%20barbe%20et%20cheveux.%20Pourriez-vous%20m\'aider?';
            break;
    }
    
    const whatsappUrl = `https://wa.me/41786919208?text=${message}`;
    const mensWhatsappUrl = `https://wa.me/41786919208?text=${mensMessage}`;
    
    if (heroButton) {
        heroButton.href = whatsappUrl;
    }
    
    if (ctaButton) {
        ctaButton.href = whatsappUrl;
    }
    
    if (formButton) {
        formButton.href = whatsappUrl;
    }
    
    if (mensButton) {
        mensButton.href = mensWhatsappUrl;
    }
    
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
});
