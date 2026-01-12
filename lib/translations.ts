export const translations = {
  fr: {
    nav: {
      about: "À propos",
      expertise: "Expertise",
      education: "Formation",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      title: "Développeur back-end Java Python / Cloud engineer",
      subtitle: "Java & Python",
      tagline: "Je construis des solutions robustes, scalables et maintenables.",
      experience: "10+ ans d'expérience",
      cta: "Me contacter",
    },
    about: {
      title: "À propos",
      content: [
        "Développeur logiciel freelance avec plus de 10 ans d'expérience, je conçois des solutions techniques sur mesure qui répondent précisément aux enjeux de mes clients. Mon approche allie autonomie, rigueur et expertise approfondie pour transformer des défis complexes en résultats concrets.",
        "Spécialisé dans l'accompagnement de la transformation digitale, je comprends rapidement les besoins métiers et techniques pour proposer des solutions adaptées, évolutives et performantes. Ma méthode de travail privilégie une collaboration agile et étroite, garantissant que chaque livrable apporte une valeur stratégique maximale.",
        "En me choisissant, vous bénéficiez d'un partenaire fiable et polyvalent, engagé à relever vos défis techniques tout en contribuant activement à la réussite et à l'impact de vos projets.",
      ],
    },
    expertise: {
      title: "Expertise",
      cards: [
        {
          title: "Esprit Clean Code",
          description:
            "Développement de qualité avec les pratiques eXtreme Programming et Software Craftsmanship. Code maintenable, testable et évolutif.",
        },
        {
          title: "Architecture",
          description:
            "Conception de solutions cloud scalables et performantes. Migration vers le serverless et infrastructure as code avec Terraform.",
        },
        {
          title: "Qualité",
          description:
            "Intégration continue, TDD, BDD. Automatisation des tests et des déploiements pour garantir la fiabilité des livrables.",
        },
      ],
    },
    education: {
      title: "Formation & Langues",
      degrees: "Diplômes",
      languages: "Langues",
      degreesList: [
        { year: "2014", title: "Master 2 Architecte Logiciel", school: "AFCEPF" },
        { year: "2013", title: "Master 1 Génie du Traitement de l'Information", school: "AFCEPF" },
        { year: "2009-2012", title: "Doctorat de Chimie Organique", school: "Université de Cergy-Pontoise" },
      ],
      languagesList: [
        { language: "Français", level: "Natif" },
        { language: "Anglais", level: "Professionnel" },
      ],
    },
    skills: {
      title: "Compétences",
      categories: {
        languages: "Langages",
        frameworks: "Frameworks & Cloud",
        tools: "Outils",
        methods: "Méthodologie",
        databases: "Bases de données",
        os: "Systèmes",
      },
      data: {
        languages: ["Java", "Python", "Scala", "Groovy", "JavaScript"],
        frameworks: [
          "AWS",
          "Kafka",
          "Spark",
          "Hadoop",
          "Spark Streaming",
          "Kafka Stream",
          "Terraform",
          "Lambda",
          "SNS",
          "SQS",
          "Kinesis",
        ],
        tools: ["IntelliJ", "Git", "Jenkins", "Ansible", "Prometheus", "Grafana", "SOAPUI", "Sonar"],
        methods: ["Intégration Continue", "TDD", "BDD", "eXtreme Programming", "Software Craftsmanship"],
        databases: ["MySQL", "PostgreSQL"],
        os: ["Windows", "Unix"],
      },
    },
    projects: {
      title: "Projets",
      company: "L'entreprise",
      mission: "La mission",
      tasks: "Tâches réalisées",
      technologies: "Technologies utilisées",
      data: [
        {
          company: "AXA",
          position: "Cloud Engineer",
          location: "Paris",
          startDate: "06/2018",
          endDate: "Présent",
          projectName: "TEX",
          companyDescription:
            "AXA est un leader mondial de l'assurance et de la gestion d'actifs. La plateforme TEX est dédiée à la télématique automobile.",
          missionDescription:
            "Développement et migration de la plateforme de télématique qui récolte les données de véhicules connectés et calcule des scores de conduite pour personnaliser les offres d'assurance.",
          tasks: [
            "Développement et corrections sur la plateforme legacy",
            "Migration des projets de la plateforme legacy (EC2) vers du full serverless",
            "Développement de nouveaux projets télématique en full serverless",
          ],
          technologies: ["Python", "Java", "AWS", "Lambda", "SNS", "SQS", "Kinesis", "Terraform"],
        },
        {
          company: "Galeries Lafayette",
          position: "Data Engineer",
          location: "Paris",
          startDate: "06/2017",
          endDate: "05/2018",
          projectName: "Datalab",
          companyDescription:
            "Galeries Lafayette est un groupe français de grands magasins et de distribution spécialisé dans la mode et le luxe.",
          missionDescription:
            "Développement du Datalab permettant la collecte et l'analyse des données clients en temps réel et batch pour créer de la valeur business, notamment via l'envoi de promotions ciblées.",
          tasks: [
            "Intégration de données batch (CSV) et temps réel (tickets de caisse, trafic web)",
            "Traitement de données batch avec Spark",
            "Traitement de données temps réel avec Spark Streaming et Kafka Stream",
            "Mise en place du monitoring avec Prometheus/Grafana",
            "Industrialisation des déploiements avec Jenkins/Ansible",
          ],
          technologies: [
            "Scala",
            "Spark",
            "Spark Streaming",
            "Kafka",
            "Kafka Stream",
            "Jenkins",
            "Ansible",
            "Prometheus",
            "Grafana",
          ],
        },
        {
          company: "Voyages SNCF",
          position: "Développeur Back-end",
          location: "Paris",
          startDate: "06/2016",
          endDate: "05/2017",
          projectName: "Eurostar & Calendrier des prix",
          companyDescription:
            "Voyages-sncf.com (aujourd'hui OUI.sncf) est la plateforme de réservation de billets de train et de voyages du groupe SNCF.",
          missionDescription:
            "Développement et maintenance du back-end du site Eurostar ainsi que refonte complète du calendrier des prix pour améliorer l'expérience utilisateur.",
          tasks: [
            "Automatisation de tests via SOAPUI",
            "Développement de webservices SOAP",
            "Développement de nouvelles fonctionnalités",
            "Refactoring du code existant",
            "Apport des pratiques Software Craftsmanship",
          ],
          technologies: ["Java", "Groovy", "SOAPUI", "Jenkins"],
        },
        {
          company: "Henix",
          position: "Développeur Fullstack",
          location: "Paris",
          startDate: "06/2014",
          endDate: "05/2016",
          projectName: "Squash-TM",
          companyDescription:
            "Henix est un cabinet de conseil en qualité logicielle développant Squash-TM, une solution open source de gestion de référentiel de tests.",
          missionDescription:
            "Développement de fonctionnalités sur Squash-TM, une plateforme de gestion des exigences, cas de tests et campagnes de tests avec intégration aux bugtrackers majeurs (Mantis, Redmine, Jira).",
          tasks: [
            "Conception technique des nouvelles fonctionnalités",
            "Développement des features front et back",
            "Refactoring du code existant",
            "Mise en place de pratiques BDD et TDD",
          ],
          technologies: ["Java", "Groovy", "JavaScript", "MySQL", "PostgreSQL", "Jenkins", "Sonar"],
        },
        {
          company: "Capgemini",
          position: "Développeur Junior",
          location: "Bordeaux",
          startDate: "09/2017",
          endDate: "08/2018",
          projectName: "Consulting",
          companyDescription:
            "Capgemini est un leader mondial du conseil, de la transformation digitale et des services technologiques.",
          missionDescription:
            "Première expérience en consulting sur des missions variées de développement web pour différents clients.",
          tasks: [
            "Développement d'applications web avec Angular",
            "Participation à des projets de migration",
            "Support et maintenance d'applications existantes",
            "Formation aux méthodologies Agile",
            "Veille technologique et montée en compétences",
          ],
          technologies: ["Angular", "TypeScript", "Java", "Spring Boot", "MySQL", "Jira"],
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Vous avez un projet ? Discutons-en !",
      intro: "Je suis disponible pour discuter de votre projet. N'hésitez pas à me contacter !",
      email: "Email",
      phone: "Téléphone",
      cta: "Réserver un appel découverte",
    },
    footer: {
      rights: "Tous droits réservés",
      company: "SIMON AND CAREFULL CODE",
    },
  },
  en: {
    nav: {
      about: "About",
      expertise: "Expertise",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Back-end Developer Java Python / Cloud Engineer",
      subtitle: "Java & Python",
      tagline: "I build robust, scalable and maintainable solutions.",
      experience: "10+ years of experience",
      cta: "Contact me",
    },
    about: {
      title: "About",
      content: [
        "Freelance software developer with over 10 years of experience, I design custom technical solutions that precisely address my clients' challenges. My approach combines autonomy, rigor and deep expertise to transform complex challenges into concrete results.",
        "Specialized in supporting digital transformation, I quickly understand business and technical needs to propose adapted, scalable and high-performance solutions. My working method favors agile and close collaboration, ensuring that each deliverable brings maximum strategic value.",
        "By choosing me, you benefit from a reliable and versatile partner, committed to tackling your technical challenges while actively contributing to the success and impact of your projects.",
      ],
    },
    expertise: {
      title: "Expertise",
      cards: [
        {
          title: "Clean Code Spirit",
          description:
            "Quality development with eXtreme Programming and Software Craftsmanship practices. Maintainable, testable and scalable code.",
        },
        {
          title: "Architecture",
          description:
            "Design of scalable and high-performance cloud solutions. Migration to serverless and infrastructure as code with Terraform.",
        },
        {
          title: "Quality",
          description:
            "Continuous integration, TDD, BDD. Test and deployment automation to ensure deliverable reliability.",
        },
      ],
    },
    education: {
      title: "Education & Languages",
      degrees: "Degrees",
      languages: "Languages",
      degreesList: [
        { year: "2014", title: "Master's Degree in Software Architecture", school: "AFCEPF" },
        { year: "2013", title: "Master's Degree in Information Processing", school: "AFCEPF" },
        { year: "2009-2012", title: "PhD in Organic Chemistry", school: "University of Cergy-Pontoise" },
      ],
      languagesList: [
        { language: "French", level: "Native" },
        { language: "English", level: "Professional" },
      ],
    },
    skills: {
      title: "Skills",
      categories: {
        languages: "Languages",
        frameworks: "Frameworks & Cloud",
        tools: "Tools",
        methods: "Methodology",
        databases: "Databases",
        os: "Systems",
      },
      data: {
        languages: ["Java", "Python", "Scala", "Groovy", "JavaScript"],
        frameworks: [
          "AWS",
          "Kafka",
          "Spark",
          "Hadoop",
          "Spark Streaming",
          "Kafka Stream",
          "Terraform",
          "Lambda",
          "SNS",
          "SQS",
          "Kinesis",
        ],
        tools: ["IntelliJ", "Git", "Jenkins", "Ansible", "Prometheus", "Grafana", "SOAPUI", "Sonar"],
        methods: ["Continuous Integration", "TDD", "BDD", "eXtreme Programming", "Software Craftsmanship"],
        databases: ["MySQL", "PostgreSQL"],
        os: ["Windows", "Unix"],
      },
    },
    projects: {
      title: "Projects",
      company: "The Company",
      mission: "The Mission",
      tasks: "Tasks Performed",
      technologies: "Technologies Used",
      data: [
        {
          company: "AXA",
          position: "Cloud Engineer",
          location: "Paris",
          startDate: "06/2018",
          endDate: "Present",
          projectName: "TEX",
          companyDescription:
            "AXA is a global leader in insurance and asset management. The TEX platform is dedicated to automotive telematics.",
          missionDescription:
            "Development and migration of the telematics platform that collects connected vehicle data and calculates driving scores to personalize insurance offers.",
          tasks: [
            "Development and bug fixes on the legacy platform",
            "Migration of legacy platform projects (EC2) to full serverless",
            "Development of new telematics projects in full serverless",
          ],
          technologies: ["Python", "Java", "AWS", "Lambda", "SNS", "SQS", "Kinesis", "Terraform"],
        },
        {
          company: "Galeries Lafayette",
          position: "Data Engineer",
          location: "Paris",
          startDate: "06/2017",
          endDate: "05/2018",
          projectName: "Datalab",
          companyDescription:
            "Galeries Lafayette is a French retail group specializing in fashion and luxury department stores.",
          missionDescription:
            "Development of the Datalab enabling real-time and batch customer data collection and analysis to create business value, particularly through targeted promotions.",
          tasks: [
            "Integration of batch data (CSV) and real-time data (receipts, web traffic)",
            "Batch data processing with Spark",
            "Real-time data processing with Spark Streaming and Kafka Stream",
            "Implementation of monitoring with Prometheus/Grafana",
            "Deployment industrialization with Jenkins/Ansible",
          ],
          technologies: [
            "Scala",
            "Spark",
            "Spark Streaming",
            "Kafka",
            "Kafka Stream",
            "Jenkins",
            "Ansible",
            "Prometheus",
            "Grafana",
          ],
        },
        {
          company: "Voyages SNCF",
          position: "Back-end Developer",
          location: "Paris",
          startDate: "06/2016",
          endDate: "05/2017",
          projectName: "Eurostar & Price Calendar",
          companyDescription:
            "Voyages-sncf.com (now OUI.sncf) is the SNCF group's train ticket and travel booking platform.",
          missionDescription:
            "Development and maintenance of the Eurostar website back-end, as well as complete redesign of the price calendar to improve user experience.",
          tasks: [
            "Test automation via SOAPUI",
            "Development of SOAP web services",
            "Development of new features",
            "Refactoring of existing code",
            "Introduction of Software Craftsmanship practices",
          ],
          technologies: ["Java", "Groovy", "SOAPUI", "Jenkins"],
        },
        {
          company: "Henix",
          position: "Fullstack Developer",
          location: "Paris",
          startDate: "06/2014",
          endDate: "05/2016",
          projectName: "Squash-TM",
          companyDescription:
            "Henix is a software quality consulting firm developing Squash-TM, an open-source test repository management solution.",
          missionDescription:
            "Development of features on Squash-TM, a platform for managing requirements, test cases and test campaigns with integration to major bugtrackers (Mantis, Redmine, Jira).",
          tasks: [
            "Technical design of new features",
            "Development of front-end and back-end features",
            "Refactoring of existing code",
            "Implementation of BDD and TDD practices",
          ],
          technologies: ["Java", "Groovy", "JavaScript", "MySQL", "PostgreSQL", "Jenkins", "Sonar"],
        },
        {
          company: "Capgemini",
          position: "Junior Developer",
          location: "Bordeaux",
          startDate: "09/2017",
          endDate: "08/2018",
          projectName: "Consulting",
          companyDescription:
            "Capgemini is a global leader in consulting, digital transformation and technology services.",
          missionDescription:
            "First consulting experience on various web development missions for different clients.",
          tasks: [
            "Development of web applications with Angular",
            "Participation in migration projects",
            "Support and maintenance of existing applications",
            "Training in Agile methodologies",
            "Technology watch and skills development",
          ],
          technologies: ["Angular", "TypeScript", "Java", "Spring Boot", "MySQL", "Jira"],
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project? Let's talk!",
      intro: "I am available to discuss your project. Feel free to reach out!",
      email: "Email",
      phone: "Phone",
      cta: "Book a discovery call",
    },
    footer: {
      rights: "All rights reserved",
      company: "SIMON AND CAREFULL CODE",
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKey = typeof translations.fr