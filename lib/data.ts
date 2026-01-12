export const skills = {
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
}

export const projects = [
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
]
