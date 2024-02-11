import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  robot,
  microsoftoffice,
  autocad,
  societegenerale,
  bankabc,
  mohand,
  sabrina,
  yanis,
  lounes,
  zakaria,
  deltabank,
  myholiday,
  benevolat,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Carrière",
  },
  {
    id: "contact",
    title: "Contacter",
  },
  {
    id: "pdf",
    title: "Curriculum Vitae",
  },
];

const services: TService[] = [
  {
    title: "Analyste KYC",
    icon: web,
  },
  {
    title: "Agent Vacataire",
    icon: mobile,
  },
  {
    title: "Responsable des Caisses",
    icon: backend,
  },
  {
    title: "Contrôleuse des opérations",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Delta Bank",
    icon: deltabank,
  },
  {
    name: "Microsoft Office",
    icon: microsoftoffice,
  },
  {
    name: "Autocad",
    icon: autocad,
  },
  {
    name: "Robot Structural Analysis",
    icon: robot,
  },
];

const experiences: TExperience[] = [
  {
    title: "Agent vacataire - Analyste KYC",
    companyName: "Société générale",
    icon: societegenerale,
    iconBg: "#383E56",
    date: "Oct 2021 - Dec 2022",
    points: [
      "Traitement des anomalies liées à la déclaration CREM.",
      "Traitement des entrée en relation (Ouvertures des comptes).",
      "Réactivation des comptes sur système d'information.",
      "Rattachement des clients sur amplitude.",
    ],
  },
  {
    title: "Guichetière payeuse",
    companyName: "Société générale",
    icon: societegenerale,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Avril 2023",
    points: [
      "Accueillir les clients et prospects un accueil de qualité.",
      "Ouverture/ajustage/fermeture de caisse.",
      "Effectuer les opérations espèces de la clientèle (retraits ou versements ) en respectant les procédures et instructions en vigueur.",
      "Recevoir et saisir les demandes de chéquier et délivrer les chéquiers.",
      "Edition des extraits de compte et consultations de solde.",
      "Vente devise (change généralement pour les allocations touristiques).",
      "Traitement des ordres de virements domestiques, vérification et transmission des virements interbancaires conformes.",
      "Recevoir les remises de chèques à l’encaissement et les traîter en télécompensation sur TEKLINE.",
    ],
  },
  {
    title: "Contrôleuse des opérations",
    companyName: "Bank ABC",
    icon: bankabc,
    iconBg: "#E6DEDD",
    date: "Avril 2023 - Oct 2023",
    points: [
      "Les extractions des opérations traitées par les agences à leurs charge à partir du SharePoint application.",
      "Au quotidien, faire un contrôle minutieux des JC dans les délais fixés.",
      "Identification des écarts et/ou anomalies éventuelles.",
      "L'élaboration des reporting quotidiens des anomalies relevées.",
      "Transmission des reporting aux responsables des agences et le suivi de leur prise en charge pour régularisation.",
      "Participation aux missions des contrôles inopinés et de fin de mois des caisses, ou autres inventaires sur des formules numérotées.",
      "Prendre part à des missions thématiques et spéciales auprès des agences.",
    ],
  },
  {
    title: "Contrôleuse des opérations - Maîtresse de stage.",
    companyName: "Bank ABC",
    icon: bankabc,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Suite à la rapidité d’adaptation que j’ai eue dans mon poste actuel, on a fini par me confier la responsabilité de partager mes connaissances en tant que maîtresse de stage, ce qui m’aidera à développer mes compétences managériales.",
      "Mon objectif est de partager soigneusement mes connaissances avec la stagiaire sous mon aile",
      "L'encadrer et la conseiller afin de l’aider à se développer professionnellement.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Je recommande vivement notre collègue Mlle Yamina Merzkani pour son excellence au sein de notre banque ABC. Elle excelle dans tous les aspects de son rôle et apporte une contribution inestimable. Bravo.",
    name: "Lounes Sahraoui",
    designation: "Credit Admin Supervisor",
    company: "Bank ABC Algeria",
    image: lounes,
  },
  {
    testimonial:
      "En tant que manager, j'ai vraiment apprécié travailler côte à côte avec Yamina Merzkani, dynamique, fiable et disponible, qui a un vrai sens du travail en équipe. Une collaboratrice remarquable et brillante, qui répond aux attentes. Le grand succès t'attend, comme récompense à tes efforts. S.O.",
    name: "Sabrina Ouali",
    designation: "Responsable administrative et financière",
    company: "Tea.co s.p.a",
    image: sabrina,
  },
  {
    testimonial:
      "J'ai eu l'occasion de travailler avec Yamina à Société Générale. C'est une collaboratrice engagée, dévouée, mais surtout organisée. Je recommande fortement son profil, compte tenu de sa persévérance et de son dynamisme. Bonne continuation.",
    name: "Mohand Aberkane",
    designation: "Responsable Département Ventes Leasing",
    company: "Société Générale Algérie",
    image: mohand,
  },
  {
    testimonial:
      "Yamina est tout simplement la collaboratrice que l'on aimerait tous avoir : toujours à l'écoute, d'une intelligence inouïe. Sa rapidité d'intégration et d'adaptation dans notre équipe est bluffante, dotée d'un sérieux professionnel qui témoigne de sa profonde implication et de sa volonté de se démarquer . [...] Je recommande vivement Yamina.",
    name: "Zakaria Meghazi",
    designation: "Contrôleur des opérations",
    company: "BANK ABC Algérie",
    image: zakaria,
  },
  {
    testimonial:
      "Yamina Merzkani est une personne exceptionnelle. […] ce qui m'a le plus frappé, c'est sa motivation, ses compétences et sa volonté d'apprendre […]. Elle partage généreusement ses connaissances, collabore parfaitement bien, et est une personne sur laquelle on peut compter […]. Elle est sérieuse, ponctuelle et attentionnée […].",
    name: "Yanis Benhamou",
    designation: "Ingénieur en structures spécialisé dans l'étude des bâtiments résidentiels",
    company: "(En recherche d'emploi)",
    image: yanis,
  },
];

const projects: TProject[] = [
  {
    name: "Création de produit et communication publicitaire",
    description:
      "Notre projet consiste à créer un produit innovant qui répondra aux besoins de notre public cible. En utilisant des stratégies de communication publicitaire, nous avons choisi, pour ce projet, une communication média (télévision et internet). Notre objectif est de captiver l'attention de notre public cible et de susciter l'intérêt pour notre produit.",
    tags: [
      {
        name: "powerpoint",
        color: "blue-text-gradient",
      },
      {
        name: "inshot",
        color: "green-text-gradient",
      },
      {
        name: "youtube",
        color: "pink-text-gradient",
      },
    ],
    image: myholiday,
    sourceCodeLink: "https://www.youtube.com/watch?v=c1fpp6HBKpE",
  },
  {
    name: "Bénévolat",
    description: 
      "Lors de mon cursus universitaire à l'Université des Sciences et Technologies Houari Boumediene, j'ai eu la chance d'occuper le poste de responsable de communication dans le cadre d'un bénévolat. En tant que bénévole, j'ai pu contribuer à l'organisation d'événements scientifiques, aider les membres du club à la mise en place de leurs idées, ce qui m'a permis de développer le sens de la responsabilité et d'améliorer mes compétences professionnelles.",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      {
        name: "youtube",
        color: "pink-text-gradient",
      },
    ],
    image: benevolat,
    sourceCodeLink: "https://www.youtube.com/watch?v=Vm2G2kzNVzw",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   sourceCodeLink: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
