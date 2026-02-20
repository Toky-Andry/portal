"use strict";
exports.__esModule = true;
exports.T = void 0;
// lib/translations.ts
exports.T = {
    fr: {
        nav: ['À propos', 'Expérience', 'Projets', 'Stack', 'Contact'],
        cv: 'CV',
        hero: {
            sub: 'Développeur Fullstack JS',
            tag: 'Code. Créativité. Connexion.',
            explore: 'Explorer'
        },
        about: {
            label: '01 — À propos',
            h2a: 'Un développeur qui pense',
            h2b: 'comme un organisme',
            p1: 'Je suis <b>Tokiniaina Andriamanantsoa</b>, développeur Fullstack JavaScript avec une solide maîtrise des environnements front-end et back-end. J\'aime transformer des idées en produits concrets, performants et maintenables.',
            p2: 'Mes projets fusionnent l\'ingénierie rigoureuse avec une sensibilité créative rare. Du backend à l\'interface, je construis des systèmes cohérents, performants et mémorables.',
            p3: 'Disponible pour des <teal>projets freelance</teal> ou un <teal>poste fullstack</teal> dans une équipe ambitieuse.',
            infinity: 'Curiosité infinie',
            stats: [
                { number: '2+', label: "Ans d'exp." },
                { number: '8+', label: 'Projets' },
                { number: '∞', label: 'Curiosité' },
            ]
        },
        experience: {
            label: '02 — Expérience',
            h2: 'Mon parcours',
            expand: 'Voir plus',
            collapse: 'Réduire',
            jobs: [
                {
                    period: 'Décembre 2025 — Présent',
                    role: 'Développeur Fullstack JavaScript',
                    company: 'Freelance', location: 'Remote',
                    description: "Conception et mise en ligne de sites e-commerce performants et responsive. Développement d'applications web complètes (front-end & back-end) pour des clients variés.",
                    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind'],
                    color: '#00ffcc'
                },
                {
                    period: 'Juin 2025 — Septembre 2025',
                    role: 'Stagiaire Développeur Web',
                    company: 'ARATO', location: 'Fianarantsoa',
                    description: "Conception et développement d'applications web de gestion de chat interne avec intégration de GitLab. Stack : React.js, TypeScript, Fastify.",
                    tags: ['React', 'TypeScript', 'Fastify', 'GitLab'],
                    color: '#9b5de5'
                },
                {
                    period: 'Septembre 2024 — Décembre 2024',
                    role: 'Développeur Web',
                    company: 'Time Tracker Project', location: 'Remote',
                    description: "Développé une application web de suivi du temps avec gestion de projet avec React.js et Node.js en équipe à distance.",
                    tags: ['React.js', 'Node.js', 'Express', 'MongoDB'],
                    color: '#ffd93d'
                },
                {
                    period: 'Juillet 2024 — Septembre 2024',
                    role: 'Stagiaire Développeur Web',
                    company: 'Sidina (Manao Group)', location: 'Fianarantsoa',
                    description: "Conception et implémentation d'un système de gestion des accès aux utilisateurs avec PHP, incluant authentification sécurisée et interface d'administration.",
                    tags: ['PHP', 'MySQL', 'Bootstrap', 'JWT'],
                    color: '#ff6b6b'
                },
            ]
        },
        projects: {
            label: '03 — Projets',
            h2: "Ce que j'ai créé",
            all: 'Tous les projets',
            see: 'Voir captures',
            inProgress: 'En cours',
            confidential: 'Projet professionnel confidentiel',
            confidential_sub: 'Code source et visuels sous NDA entreprise',
            items: [
                {
                    id: '01',
                    title: "Plateforme d'Annonces Madagascar",
                    category: 'Fullstack',
                    color: '#00ffcc',
                    description: "Plateforme de publication d'annonces d'emploi à Madagascar. Backend Node.js avec TypeScript, PostgreSQL, frontend React.js avec interface moderne et système de filtres avancés.",
                    tags: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'Tailwind', 'REST API'],
                    images: ['/annonce/1.png', '/annonce/2.png', '/annonce/3.png', '/annonce/4.png', '/annonce/5.png'],
                    github: null, gitlab: null, confidential: false, inProgress: false
                },
                {
                    id: '02',
                    title: 'Income Expense Tracker',
                    category: 'Fullstack',
                    color: '#ffd93d',
                    description: "Application web de gestion de dépenses personnelles avec tableaux de bord et graphiques. Backend Node.js/Express, frontend React.js avec visualisation des données.",
                    tags: ['Node.js', 'Express', 'React', 'PostgreSQL', 'Chart.js'],
                    images: ['/income tracker/1.png', '/income tracker/2.png', '/income tracker/3.png', '/income tracker/4.png', '/income tracker/5.png', '/income tracker/6.png', '/income tracker/7.png', '/income tracker/8.png'],
                    github: null, gitlab: null, confidential: false, inProgress: false
                },
                {
                    id: '03',
                    title: 'GitLab Chat Interface',
                    category: 'Frontend',
                    color: '#ff6b6b',
                    description: "Interface de chat interne avec intégration GitLab et suivi de tâches. Développée avec React.js et TypeScript lors de mon stage chez ARATO.",
                    tags: ['React.js', 'TypeScript', 'Tailwind', 'GitLab API'],
                    images: ['/Chat interne/1.png', '/Chat interne/2.png', '/Chat interne/3.png', '/Chat interne/4.png', '/Chat interne/5.png'],
                    github: null, gitlab: 'https://gitlab.com/khaleb_toky/chat_k', confidential: false, inProgress: false
                },
                {
                    id: '04',
                    title: 'Network Attack Simulator',
                    category: 'Frontend',
                    color: '#00ffcc',
                    description: "Simulateur frontend d'attaques réseau avec visualisation en temps réel. Projet de collaboration avec des entreprises tech spécialisées en infrastructure réseau.",
                    tags: ['React', 'D3.js', 'WebSockets', 'CSS Animations'],
                    images: ['/simulateur attack/1.png', '/simulateur attack/2.png', '/simulateur attack/3.png', '/simulateur attack/4.png'],
                    github: 'https://github.com/Toky-Andry/simulator_attack_frontend', gitlab: null, confidential: false, inProgress: false
                },
                {
                    id: '05',
                    title: 'Planificateur de Repas Mobile',
                    category: 'Mobile',
                    color: '#9b5de5',
                    description: "Application mobile de planification de repas avec suggestions personnalisées et liste de courses automatique. Développée avec Flutter et Dart pour iOS et Android.",
                    tags: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
                    images: ['/mobile/1.jpg', '/mobile/2.jpg', '/mobile/3.jpg', '/mobile/4.jpg', '/mobile/5.jpg', '/mobile/6.jpg', '/mobile/7.jpg'],
                    github: null, gitlab: null, confidential: false, inProgress: false
                },
                {
                    id: '06',
                    title: 'Time Tracker Web App',
                    category: 'Fullstack',
                    color: '#9b5de5',
                    description: "Application de suivi du temps avec gestion de projets, équipes et rapports détaillés. Collaboration en remote avec stack moderne JavaScript.",
                    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
                    images: [],
                    github: null, gitlab: null, confidential: true, inProgress: false
                },
                {
                    id: '07',
                    title: 'User Access Management',
                    category: 'Backend',
                    color: '#ffd93d',
                    description: "Système de gestion des accès utilisateurs avec authentification sécurisée JWT, rôles et permissions. Interface d'administration complète.",
                    tags: ['PHP', 'MySQL', 'JWT', 'Bootstrap'],
                    images: [],
                    github: null, gitlab: null, confidential: true, inProgress: false
                },
                {
                    id: '08',
                    title: 'E-commerce Platform',
                    category: 'Fullstack',
                    color: '#ff6b6b',
                    description: "Site e-commerce performant et responsive avec panier, paiement en ligne, gestion des stocks et tableau de bord administrateur.",
                    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
                    images: [],
                    github: null, gitlab: null, confidential: false, inProgress: true
                },
            ]
        },
        skills: {
            label: '04 — Stack',
            h2: 'Mon écosystème',
            others: 'Autres outils',
            tech: 'technologies',
            categories: [
                { name: 'Frontend', color: '#00ffcc', icon: '◈' },
                { name: 'Backend', color: '#9b5de5', icon: '◉' },
                { name: 'DevOps & Tools', color: '#ffd93d', icon: '◎' },
            ]
        },
        contact: {
            label: '05 — Contact',
            h2: 'Créons ensemble',
            sub: "Un projet, une idée, une collaboration ? Mon organisme est prêt à se connecter au vôtre.",
            direct: 'Contact direct',
            socials: 'Réseaux',
            availability: 'Disponibilité',
            availText: 'Ouvert aux projets freelance et opportunités fullstack. Délai de réponse :',
            delay: 'sous 48h',
            name: 'Nom', email: 'Email', message: 'Message',
            placeholder_name: 'Votre nom',
            placeholder_email: 'votre@email.com',
            placeholder_msg: 'Décrivez votre projet...',
            send: 'Envoyer le message',
            sending: 'Envoi en cours...',
            sent_title: 'Message envoyé',
            sent_sub: "Je reviendrai vers vous très vite. L'organisme pulse.",
            // ✅ Message d'erreur traduit
            error_msg: "✕ Erreur lors de l'envoi. Réessaie ou contacte-moi directement.",
            footer: "© 2025 Tokiniaina Andriamanantsoa — Construit avec Next.js & une touche d'organique"
        }
    },
    en: {
        nav: ['About', 'Experience', 'Projects', 'Stack', 'Contact'],
        cv: 'Resume',
        hero: {
            sub: 'Fullstack JS Developer',
            tag: 'Code. Creativity. Connection.',
            explore: 'Explore'
        },
        about: {
            label: '01 — About',
            h2a: 'A developer who thinks',
            h2b: 'like an organism',
            p1: 'I am <b>Tokiniaina Andriamanantsoa</b>, a Fullstack JavaScript developer with solid expertise in front-end and back-end environments. I love turning ideas into concrete, performant, and maintainable products.',
            p2: 'My projects merge rigorous engineering with a rare creative sensibility. From backend to interface, I build coherent, performant, and memorable systems.',
            p3: 'Available for <teal>freelance projects</teal> or a <teal>fullstack position</teal> in an ambitious team.',
            infinity: 'Infinite curiosity',
            stats: [
                { number: '2+', label: 'Yrs exp.' },
                { number: '8+', label: 'Projects' },
                { number: '∞', label: 'Curiosity' },
            ]
        },
        experience: {
            label: '02 — Experience',
            h2: 'My journey',
            expand: 'See more',
            collapse: 'Collapse',
            jobs: [
                {
                    period: 'December 2025 — Present',
                    role: 'Fullstack JavaScript Developer',
                    company: 'Freelance', location: 'Remote',
                    description: "Design and deployment of performant and responsive e-commerce sites. Complete web application development (front-end & back-end) for various clients.",
                    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind'],
                    color: '#00ffcc'
                },
                {
                    period: 'June 2025 — September 2025',
                    role: 'Web Developer Intern',
                    company: 'ARATO', location: 'Fianarantsoa',
                    description: "Design and development of internal chat management web applications with GitLab integration. Stack: React.js, TypeScript, Fastify.",
                    tags: ['React', 'TypeScript', 'Fastify', 'GitLab'],
                    color: '#9b5de5'
                },
                {
                    period: 'September 2024 — December 2024',
                    role: 'Web Developer',
                    company: 'Time Tracker Project', location: 'Remote',
                    description: "Developed a time tracking web application with project management using React.js and Node.js in a remote team.",
                    tags: ['React.js', 'Node.js', 'Express', 'MongoDB'],
                    color: '#ffd93d'
                },
                {
                    period: 'July 2024 — September 2024',
                    role: 'Web Developer Intern',
                    company: 'Sidina (Manao Group)', location: 'Fianarantsoa',
                    description: "Design and implementation of a user access management system with PHP, including secure authentication and admin interface.",
                    tags: ['PHP', 'MySQL', 'Bootstrap', 'JWT'],
                    color: '#ff6b6b'
                },
            ]
        },
        projects: {
            label: '03 — Projects',
            h2: "What I've built",
            all: 'All projects',
            see: 'View screenshots',
            inProgress: 'In progress',
            confidential: 'Confidential Professional Project',
            confidential_sub: 'Source code and visuals under company NDA',
            items: [
                {
                    id: '01',
                    title: 'Madagascar Job Board',
                    category: 'Fullstack',
                    color: '#00ffcc',
                    description: "Job posting platform for Madagascar. Node.js/TypeScript backend, PostgreSQL, React.js frontend with modern interface and advanced filtering system.",
                    tags: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'Tailwind', 'REST API'],
                    images: ['/annonce/1.png', '/annonce/2.png', '/annonce/3.png', '/annonce/4.png', '/annonce/5.png'],
                    github: null, gitlab: null, confidential: false, inProgress: false
                },
                {
                    id: '02',
                    title: 'Income Expense Tracker',
                    category: 'Fullstack',
                    color: '#ffd93d',
                    description: "Personal expense management web app with dashboards and charts. Node.js/Express backend, React.js frontend with data visualization.",
                    tags: ['Node.js', 'Express', 'React', 'PostgreSQL', 'Chart.js'],
                    images: ['/income tracker/1.png', '/income tracker/2.png', '/income tracker/3.png', '/income tracker/4.png', '/income tracker/5.png', '/income tracker/6.png', '/income tracker/7.png', '/income tracker/8.png'],
                    github: null, gitlab: null, confidential: false, inProgress: false
                },
                {
                    id: '03',
                    title: 'GitLab Chat Interface',
                    category: 'Frontend',
                    color: '#ff6b6b',
                    description: "Internal chat interface with GitLab integration and task tracking. Built with React.js and TypeScript during my internship at ARATO.",
                    tags: ['React.js', 'TypeScript', 'Tailwind', 'GitLab API'],
                    images: ['/Chat interne/1.png', '/Chat interne/2.png', '/Chat interne/3.png', '/Chat interne/4.png', '/Chat interne/5.png'],
                    github: null, gitlab: 'https://gitlab.com/khaleb_toky/chat_k', confidential: false, inProgress: false
                },
                {
                    id: '04',
                    title: 'Network Attack Simulator',
                    category: 'Frontend',
                    color: '#00ffcc',
                    description: "Frontend network attack simulator with real-time visualization. Collaboration project with tech companies specialized in network infrastructure.",
                    tags: ['React', 'D3.js', 'WebSockets', 'CSS Animations'],
                    images: ['/simulateur attack/1.png', '/simulateur attack/2.png', '/simulateur attack/3.png', '/simulateur attack/4.png'],
                    github: 'https://github.com/Toky-Andry/simulator_attack_frontend', gitlab: null, confidential: false, inProgress: false
                },
                {
                    id: '05',
                    title: 'Meal Planner Mobile App',
                    category: 'Mobile',
                    color: '#9b5de5',
                    description: "Mobile meal planning application with personalized suggestions and automatic shopping list. Developed with Flutter and Dart for iOS and Android.",
                    tags: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
                    images: ['/mobile/1.jpg', '/mobile/2.jpg', '/mobile/3.jpg', '/mobile/4.jpg', '/mobile/5.jpg', '/mobile/6.jpg', '/mobile/7.jpg'],
                    github: null, gitlab: null, confidential: false, inProgress: false
                },
                {
                    id: '06',
                    title: 'Time Tracker Web App',
                    category: 'Fullstack',
                    color: '#9b5de5',
                    description: "Time tracking application with project, team, and detailed reports management. Remote collaboration with modern JavaScript stack.",
                    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
                    images: [],
                    github: null, gitlab: null, confidential: true, inProgress: false
                },
                {
                    id: '07',
                    title: 'User Access Management',
                    category: 'Backend',
                    color: '#ffd93d',
                    description: "User access management system with secure JWT authentication, roles and permissions. Complete admin interface.",
                    tags: ['PHP', 'MySQL', 'JWT', 'Bootstrap'],
                    images: [],
                    github: null, gitlab: null, confidential: true, inProgress: false
                },
                {
                    id: '08',
                    title: 'E-commerce Platform',
                    category: 'Fullstack',
                    color: '#ff6b6b',
                    description: "Performant and responsive e-commerce site with cart, online payment, inventory management and admin dashboard.",
                    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
                    images: [],
                    github: null, gitlab: null, confidential: false, inProgress: true
                },
            ]
        },
        skills: {
            label: '04 — Stack',
            h2: 'My ecosystem',
            others: 'Other tools',
            tech: 'technologies',
            categories: [
                { name: 'Frontend', color: '#00ffcc', icon: '◈' },
                { name: 'Backend', color: '#9b5de5', icon: '◉' },
                { name: 'DevOps & Tools', color: '#ffd93d', icon: '◎' },
            ]
        },
        contact: {
            label: '05 — Contact',
            h2: "Let's build together",
            sub: "A project, an idea, a collaboration? My organism is ready to connect with yours.",
            direct: 'Direct contact',
            socials: 'Socials',
            availability: 'Availability',
            availText: 'Open to freelance projects and fullstack opportunities. Response time:',
            delay: 'within 48h',
            name: 'Name', email: 'Email', message: 'Message',
            placeholder_name: 'Your name',
            placeholder_email: 'your@email.com',
            placeholder_msg: 'Describe your project...',
            send: 'Send message',
            sending: 'Sending...',
            sent_title: 'Message sent',
            sent_sub: "I'll get back to you very soon. The organism pulses.",
            // ✅ Error message translated
            error_msg: '✕ Failed to send. Please retry or contact me directly.',
            footer: '© 2025 Tokiniaina Andriamanantsoa — Built with Next.js & a touch of organic'
        }
    }
};
