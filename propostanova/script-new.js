// Enhanced JavaScript for Bella Derme with animations and modern effects

// Translations object (keeping existing translations)
const translations = {
    pt: {
        // Navigation
        'nav-home': 'Início',
        'nav-services': 'Serviços',
        'nav-about': 'Sobre',
        'nav-results': 'Resultados',
        'nav-contact': 'Contato',
        
        // Hero section
        'hero-title': 'Recupere a Confiança nos Seus Cabelos, Barba e Sobrancelhas',
        'hero-subtitle': 'Com Jackeline Ferreira • Especialista em Tricologia em Genève',
        'hero-description': 'Pare de sofrer com queda capilar, calvície, falhas na barba ou sobrancelhas ralas. Descubra o tratamento personalizado que vai transformar sua aparência.',
        'hero-button': 'Quero Minha Avaliação ✨',
        
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
        
        // Men's section
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
        
        // Contact section
        'contact-title': 'Pronto Para Transformar Seus Cabelos?',
        'contact-urgency': '⚡ Vagas Limitadas para Este Mês',
        'contact-hours': 'Segunda à Sábado: 09:00 - 18:00',
        'contact-price': 'Avaliação Completa: CHF 80',
        'contact-package': 'Avaliação Tricoscópica + Protocolo Personalizado',
        'consultation-note': 'Não perca mais tempo. Sua transformação capilar começa agora.',
        'contact-testimonial': '"A Jackeline mudou completamente minha relação com meus cabelos. Profissional excepcional!"',
        'contact-testimonial-author': '- Sophie L., Genève',
        'form-name': 'Nome:',
        'form-email': 'Email:',
        'form-message': 'Qual é sua maior preocupação capilar:',
        'form-submit': 'GARANTIR MINHA VAGA 🚀',
        
        // Footer
        'footer-description': 'Especialista em Tricologia em Genève',
        'footer-services': 'Serviços',
        'footer-service1': 'Tricoscopia Digital',
        'footer-service2': 'Tratamento Capilar',
        'footer-service3': 'Cuidados com Barba',
        'footer-service4': 'Reconstrução de Sobrancelhas',
        'footer-hours': 'Horários',
        'footer-schedule': 'Segunda à Sábado<br>09:00 - 18:00',
        'footer-follow': 'Siga-nos',
        'footer-copyright': '&copy; 2025 BellaDerme - Jackeline Ferreira. Todos os direitos reservados.',
        'footer-privacy': 'Política de Privacidade',
        'footer-terms': 'Termos de Uso',
        
        // CTA buttons
        'cta-text': '⭐ Mais de 500 clientes satisfeitos em Genève',
        'cta-button': 'Quero Minha Consulta 🚀',
        
        // Footer
        'footer-copyright': '&copy; 2025 BellaDerme - Jackeline Ferreira. Todos os direitos reservados.',
        'footer-description': 'Especialista em Tricologia em Genève',
        'footer-services': 'Serviços',
        'footer-service1': 'Tricoscopia Digital',
        'footer-service2': 'Tratamento Capilar',
        'footer-service3': 'Cuidados com Barba',
        'footer-service4': 'Reconstrução de Sobrancelhas',
        'footer-hours': 'Horários',
        'footer-schedule': 'Segunda à Sábado<br>09:00 - 18:00',
        'footer-follow': 'Siga-nos',
        'footer-privacy': 'Política de Privacidade',
        'footer-terms': 'Termos de Uso'
    },
    
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-results': 'Results',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-title': 'Restore Confidence in Your Hair, Beard and Eyebrows',
        'hero-subtitle': 'With Jackeline Ferreira • Trichology Specialist in Geneva',
        'hero-description': 'Stop suffering from hair loss, baldness, beard gaps or sparse eyebrows. Discover the personalized treatment that will transform your appearance.',
        'hero-button': 'Get My Assessment ✨',
        
        // Services section
        'services-title': 'Stop Suffering from Hair Problems',
        'services-subtitle': 'Discover how hundreds of people have already regained their self-esteem and confidence',
        'service1-title': '🔬 Precise Diagnosis with Trichoscopy',
        'service1-desc': 'Through digital trichoscopy, I precisely identify the root cause of your hair problems. No guesswork - just science-based results.',
        'service2-title': '💫 100% Personalized Treatment',
        'service2-desc': 'Your unique protocol, developed especially for you. Because each person has different needs and deserves extraordinary results.',
        'service3-title': '🧔 Specialized Beard Treatment',
        'service3-desc': 'Specific protocol for men who want a denser, more uniform and healthy beard. Complete treatment of skin and hair follicles.',
        'service4-title': '👁️ Eyebrow Reconstruction',
        'service4-desc': 'Restore naturally full and well-defined eyebrows. Advanced techniques to stimulate growth and restore the beauty of your look.',
        
        // Benefits
        'benefit1': 'Excessive hair loss',
        'benefit2': 'Alopecia and early baldness',
        'benefit3': 'Dermatitis and scalp itching',
        'benefit4': 'Post-chemotherapy recovery',
        'benefit5': 'Hormonal changes of menopause',
        'benefit6': 'Pre and post hair transplant support',
        'benefit7': 'Control of oiliness and dryness',
        'benefit8': 'Elimination of dandruff and inflammation',
        'benefit9': 'Stimulation of healthy growth',
        'benefit10': 'Increased density and volume',
        
        // Beard benefits
        'beard-benefit1': 'Beard gaps',
        'beard-benefit2': 'Irregular growth',
        'beard-benefit3': 'Itching and irritation',
        'beard-benefit4': 'Ingrown hairs',
        'beard-benefit5': 'Growth stimulation',
        
        // Eyebrow benefits
        'eyebrow-benefit1': 'Sparse eyebrows',
        'eyebrow-benefit2': 'Gaps from excessive plucking',
        'eyebrow-benefit3': 'Alopecia areata',
        'eyebrow-benefit4': 'Natural stimulation',
        'eyebrow-benefit5': 'Recovery of original shape',
        
        // About section
        'about-title': 'Why Do 90% of Hair Treatments Fail?',
        'about-desc': 'The answer is simple: because they only treat symptoms, not the root cause. Unlike other professionals, I use digital trichoscopy to see exactly what is happening on your scalp.',
        'about-process': 'With over 10 years of experience and hundreds of success cases, I have developed a unique method that combines cutting-edge technology with humanized care. Each protocol is created specifically for you - because no two people are alike.',
        
        // Results section
        'results-title': 'Results That Speak for Themselves',
        'results-subtitle': 'See the real transformations of our clients',
        'result1': 'of clients see improvement in 30 days',
        'result2': 'lives transformed in Geneva',
        'result3': 'years of proven experience',
        'result4': 'personalized treatments',
        'testimonial-text': '"After years of suffering from hair loss, I finally found the solution. Jackeline not only identified the cause, but created a protocol that really worked. Today my self-esteem is sky high!"',
        'testimonial-author': '- Maria S., 42 years old',
        
        // Men's section
        'mens-title': 'Specialized Treatments for Men',
        'mens-subtitle': 'Because masculine care deserves specialized attention',
        'mens-beard-title': 'Complete Beard Treatment',
        'mens-beard-1': 'Trichoscopic analysis of the beard region',
        'mens-beard-2': 'Protocols to densify gaps',
        'mens-beard-3': 'Treatment of ingrown hairs',
        'mens-beard-4': 'Specialized post-shave care',
        'mens-hair-title': 'Male Baldness and Alopecia',
        'mens-hair-1': 'Precise diagnosis of androgenetic alopecia',
        'mens-hair-2': 'Hair stimulation protocols',
        'mens-hair-3': 'Pre/post transplant support',
        'mens-hair-4': 'Personalized preventive care',
        'mens-cta-text': '💪 More than 200 men have already transformed their appearance',
        'mens-cta-button': 'I Want to Treat My Beard/Hair',
        
        // Contact section
        'contact-title': 'Ready to Transform Your Hair?',
        'contact-urgency': '⚡ Limited Spots for This Month',
        'contact-hours': 'Monday to Saturday: 09:00 - 18:00',
        'contact-price': 'Complete Assessment: CHF 80',
        'contact-package': 'Trichoscopic Assessment + Personalized Protocol',
        'consultation-note': "Don't waste any more time. Your hair transformation starts now.",
        'contact-testimonial': '"Jackeline completely changed my relationship with my hair. Exceptional professional!"',
        'contact-testimonial-author': '- Sophie L., Geneva',
        'form-name': 'Name:',
        'form-email': 'Email:',
        'form-message': 'What is your biggest hair concern:',
        'form-submit': 'SECURE MY SPOT 🚀',
        
        // Footer
        'footer-description': 'Trichology Specialist in Geneva',
        'footer-services': 'Services',
        'footer-service1': 'Digital Trichoscopy',
        'footer-service2': 'Hair Treatment',
        'footer-service3': 'Beard Care',
        'footer-service4': 'Eyebrow Reconstruction',
        'footer-hours': 'Hours',
        'footer-schedule': 'Monday to Saturday<br>09:00 - 18:00',
        'footer-follow': 'Follow us',
        'footer-copyright': '&copy; 2025 BellaDerme - Jackeline Ferreira. All rights reserved.',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Use'
    },
    
    fr: {
        // Navigation
        'nav-home': 'Accueil',
        'nav-services': 'Services',
        'nav-about': 'À propos',
        'nav-results': 'Résultats',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-title': 'Retrouvez Confiance en Vos Cheveux, Barbe et Sourcils',
        'hero-subtitle': 'Avec Jackeline Ferreira • Spécialiste en Trichologie à Genève',
        'hero-description': 'Arrêtez de souffrir de chute de cheveux, calvitie, trous dans la barbe ou sourcils clairsemés. Découvrez le traitement personnalisé qui transformera votre apparence.',
        'hero-button': 'Mon Évaluation ✨',
        
        // Services section
        'services-title': 'Arrêtez de Souffrir de Problèmes Capillaires',
        'services-subtitle': 'Découvrez comment des centaines de personnes ont déjà retrouvé leur estime de soi et leur confiance',
        'service1-title': '🔬 Diagnostic Précis avec Trichoscopie',
        'service1-desc': 'Grâce à la trichoscopie numérique, j\'identifie avec précision la cause racine de vos problèmes capillaires. Pas de devinettes - seulement des résultats basés sur la science.',
        'service2-title': '💫 Traitement 100% Personnalisé',
        'service2-desc': 'Votre protocole unique, développé spécialement pour vous. Parce que chaque personne a des besoins différents et mérite des résultats extraordinaires.',
        'service3-title': '🧔 Traitement Spécialisé de la Barbe',
        'service3-desc': 'Protocole spécifique pour les hommes qui veulent une barbe plus dense, uniforme et saine. Traitement complet de la peau et des follicules pileux.',
        'service4-title': '👁️ Reconstruction des Sourcils',
        'service4-desc': 'Retrouvez des sourcils naturellement pleins et bien définis. Techniques avancées pour stimuler la croissance et restaurer la beauté de votre regard.',
        
        // Benefits
        'benefit1': 'Chute excessive des cheveux',
        'benefit2': 'Alopécie et calvitie précoce',
        'benefit3': 'Dermatite et démangeaisons du cuir chevelu',
        'benefit4': 'Récupération post-chimiothérapie',
        'benefit5': 'Changements hormonaux de la ménopause',
        'benefit6': 'Support pré et post greffe capillaire',
        'benefit7': 'Contrôle de la graisse et de la sécheresse',
        'benefit8': 'Élimination des pellicules et inflammations',
        'benefit9': 'Stimulation de la croissance saine',
        'benefit10': 'Augmentation de la densité et du volume',
        
        // Beard benefits
        'beard-benefit1': 'Trous dans la barbe',
        'beard-benefit2': 'Croissance irrégulière',
        'beard-benefit3': 'Démangeaisons et irritation',
        'beard-benefit4': 'Poils incarnés',
        'beard-benefit5': 'Stimulation de la croissance',
        
        // Eyebrow benefits
        'eyebrow-benefit1': 'Sourcils clairsemés',
        'eyebrow-benefit2': 'Trous par épilation excessive',
        'eyebrow-benefit3': 'Alopécie areata',
        'eyebrow-benefit4': 'Stimulation naturelle',
        'eyebrow-benefit5': 'Récupération de la forme originale',
        
        // About section
        'about-title': 'Pourquoi 90% des Traitements Capillaires Échouent?',
        'about-desc': 'La réponse est simple: parce qu\'ils ne traitent que les symptômes, pas la cause racine. Contrairement à d\'autres professionnels, j\'utilise la trichoscopie numérique pour voir exactement ce qui se passe sur votre cuir chevelu.',
        'about-process': 'Avec plus de 10 ans d\'expérience et des centaines de cas de succès, j\'ai développé une méthode unique qui combine technologie de pointe et soins humanisés. Chaque protocole est créé spécifiquement pour vous - parce qu\'il n\'y a pas deux personnes identiques.',
        
        // Results section
        'results-title': 'Résultats Qui Parlent d\'Eux-Mêmes',
        'results-subtitle': 'Voyez les vraies transformations de nos clients',
        'result1': 'des clients voient une amélioration en 30 jours',
        'result2': 'vies transformées à Genève',
        'result3': 'années d\'expérience prouvée',
        'result4': 'traitements personnalisés',
        'testimonial-text': '"Après des années de souffrance avec la chute des cheveux, j\'ai enfin trouvé la solution. Jackeline a non seulement identifié la cause, mais a créé un protocole qui a vraiment fonctionné. Aujourd\'hui mon estime de moi est au plus haut!"',
        'testimonial-author': '- Maria S., 42 ans',
        
        // Men's section
        'mens-title': 'Traitements Spécialisés pour Hommes',
        'mens-subtitle': 'Parce que les soins masculins méritent une attention spécialisée',
        'mens-beard-title': 'Traitement Complet de la Barbe',
        'mens-beard-1': 'Analyse trichoscopique de la région de la barbe',
        'mens-beard-2': 'Protocoles pour densifier les trous',
        'mens-beard-3': 'Traitement des poils incarnés',
        'mens-beard-4': 'Soins post-rasage spécialisés',
        'mens-hair-title': 'Calvitie et Alopécie Masculine',
        'mens-hair-1': 'Diagnostic précis de l\'alopécie androgénétique',
        'mens-hair-2': 'Protocoles de stimulation capillaire',
        'mens-hair-3': 'Support pré/post greffe',
        'mens-hair-4': 'Soins préventifs personnalisés',
        'mens-cta-text': '💪 Plus de 200 hommes ont déjà transformé leur apparence',
        'mens-cta-button': 'Je Veux Traiter Ma Barbe/Cheveux',
        
        // Contact section
        'contact-title': 'Prêt à Transformer Vos Cheveux?',
        'contact-urgency': '⚡ Places Limitées pour Ce Mois',
        'contact-hours': 'Lundi au Samedi: 09:00 - 18:00',
        'contact-price': 'Évaluation Complète: CHF 80',
        'contact-package': 'Évaluation Trichoscopique + Protocole Personnalisé',
        'consultation-note': 'Ne perdez plus de temps. Votre transformation capillaire commence maintenant.',
        'contact-testimonial': '"Jackeline a complètement changé ma relation avec mes cheveux. Professionnelle exceptionnelle!"',
        'contact-testimonial-author': '- Sophie L., Genève',
        'form-name': 'Nom:',
        'form-email': 'Email:',
        'form-message': 'Quelle est votre plus grande préoccupation capillaire:',
        'form-submit': 'GARANTIR MA PLACE 🚀',
        
        // CTA buttons
        'cta-text': '⭐ Plus de 500 clients satisfaits à Genève',
        'cta-button': 'Ma Consultation 🚀',
        
        // Footer
        'footer-description': 'Spécialiste en Trichologie à Genève',
        'footer-services': 'Services',
        'footer-service1': 'Trichoscopie Numérique',
        'footer-service2': 'Traitement Capillaire',
        'footer-service3': 'Soins de la Barbe',
        'footer-service4': 'Reconstruction des Sourcils',
        'footer-hours': 'Horaires',
        'footer-schedule': 'Lundi au Samedi<br>09:00 - 18:00',
        'footer-follow': 'Suivez-nous',
        'footer-copyright': '&copy; 2025 BellaDerme - Jackeline Ferreira. Tous droits réservés.',
        'footer-privacy': 'Politique de Confidentialité',
        'footer-terms': "Conditions d'Utilisation"
    }
};

// Enhanced Modern JavaScript
class BellaDermeApp {
    constructor() {
        this.currentLang = 'pt';
        this.isLoaded = false;
        this.init();
    }

    init() {
        this.setupPreloader();
        this.setupScrollAnimations();
        this.setupLanguageSelector();
        this.setupHeaderEffects();
        this.setupParticles();
        this.setupCounters();
        this.setupTypingEffect();
        this.setupInteractiveElements();
        this.setupSmoothScrolling();
    }

    // Preloader with smooth transition
    setupPreloader() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const preloader = document.querySelector('.preloader');
                preloader.classList.add('fade-out');
                
                setTimeout(() => {
                    preloader.style.display = 'none';
                    this.isLoaded = true;
                    this.triggerEntranceAnimations();
                }, 600);
            }, 1000);
        });
    }

    // Entrance animations after preloader
    triggerEntranceAnimations() {
        const hero = document.querySelector('#hero');
        const heroElements = hero.querySelectorAll('h1, p, .hero-button');
        
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.animation = `fadeInUp 1s ease-out forwards`;
            }, index * 200);
        });
    }

    // Advanced scroll reveal animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Special animations for different elements
                    if (entry.target.classList.contains('service')) {
                        setTimeout(() => {
                            entry.target.classList.add('scale-in');
                        }, Math.random() * 300);
                    }
                }
            });
        }, observerOptions);

        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
        animatedElements.forEach(el => observer.observe(el));
    }

    // Language selector with smooth transitions
    setupLanguageSelector() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.getAttribute('data-lang');
                this.changeLanguage(lang);
                
                // Update active state with animation
                langButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Add ripple effect
                this.createRipple(button);
            });
        });
        
        // Set initial active language
        document.querySelector(`[data-lang="${this.currentLang}"]`).classList.add('active');
    }

    // Ripple effect for buttons
    createRipple(button) {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(200,168,130,0.4)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '100%';
        ripple.style.height = '100%';
        ripple.style.pointerEvents = 'none';
        
        button.style.position = 'relative';
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }

    // Enhanced header effects
    setupHeaderEffects() {
        const header = document.querySelector('header');
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Add/remove scrolled class
            if (currentScrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Hide/show header on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 500) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    }

    // Floating particles animation
    setupParticles() {
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;
        
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
            
            particlesContainer.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 8000);
        };
        
        // Create particles periodically
        setInterval(createParticle, 300);
    }

    // Animated counters
    setupCounters() {
        const counters = document.querySelectorAll('.result-number');
        
        const animateCounter = (counter) => {
            const target = counter.textContent;
            const isPercentage = target.includes('%');
            const isPlus = target.includes('+');
            const numericValue = parseInt(target.replace(/[^\d]/g, ''));
            
            let current = 0;
            const increment = numericValue / 60; // Animation duration
            
            const updateCounter = () => {
                current += increment;
                if (current < numericValue) {
                    let displayValue = Math.floor(current);
                    if (isPercentage) displayValue += '%';
                    if (isPlus) displayValue = '+' + displayValue;
                    counter.textContent = displayValue;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        };
        
        // Observe counters
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        });
        
        counters.forEach(counter => counterObserver.observe(counter));
    }

    // Typing effect for hero section
    setupTypingEffect() {
        const heroTitle = document.querySelector('#hero h1');
        if (!heroTitle) return;
        
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        setTimeout(() => {
            let index = 0;
            const typeText = () => {
                if (index < originalText.length) {
                    heroTitle.textContent += originalText.charAt(index);
                    index++;
                    setTimeout(typeText, 50);
                }
            };
            typeText();
        }, 1500);
    }

    // Interactive hover effects
    setupInteractiveElements() {
        // Service cards tilt effect
        const serviceCards = document.querySelectorAll('.service');
        serviceCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
        
        // Button hover effects
        const buttons = document.querySelectorAll('.hero-button, .cta-button, .mens-cta-button, .whatsapp-submit-btn');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.animation = 'pulse 0.5s ease-in-out';
            });
            
            button.addEventListener('animationend', () => {
                button.style.animation = '';
            });
        });
    }

    // Smooth scrolling for navigation
    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Language change with smooth transition
    changeLanguage(lang) {
        this.currentLang = lang;
        
        // Add fade effect during translation
        document.body.style.opacity = '0.7';
        
        setTimeout(() => {
            const elementsToTranslate = document.querySelectorAll('[data-key]');
            elementsToTranslate.forEach(element => {
                const key = element.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translations[lang][key];
                    } else {
                        element.innerHTML = translations[lang][key];
                    }
                }
            });
            
            // Restore opacity
            document.body.style.opacity = '1';
        }, 150);
    }
}

// Advanced CSS animations
const additionalStyles = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

.hero-button:hover {
    animation: pulse 0.5s ease-in-out;
}

.service {
    transition: transform 0.3s ease;
}

.service:hover {
    transform: translateY(-10px) !important;
}
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BellaDermeApp();
});

// Performance optimization
window.addEventListener('load', () => {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
});

// Add resize handler for responsive animations
window.addEventListener('resize', () => {
    // Recalculate animations on resize
    const animatedElements = document.querySelectorAll('.visible');
    animatedElements.forEach(el => {
        el.style.transform = 'none';
        el.offsetHeight; // Trigger reflow
        el.style.transform = '';
    });
});
