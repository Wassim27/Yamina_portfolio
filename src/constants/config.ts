type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Yamina Merzkani — Contrôleuse des opérations",
    fullName: "Yamina Merzkani",
    email: "merzkani.y@gmail.com",
  },
  hero: {
    name: "Yamina Merzkani",
    p: ["Passionnée par l'épanouissement professionnel et constamment avide d'apprentissage"],
  },
  contact: {
    p: "Me joindre",
    h2: "Contacter.",
    form: {
      name: {
        span: "Votre nom",
        placeholder: "Quel est votre nom?",
      },
      email: { span: "Votre Email", placeholder: "Quel est votre email?" },
      message: {
        span: "Votre message",
        placeholder: "Que souhaitez vous me dire?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Aperçu.",
      content: `Avec trois années d'expérience au sein de la banque ABC et de la Société générale, j'ai développé une aptitude
       à apprendre vite et une véritable passion pour l'acquisition de nouvelles connaissances. Mon engagement envers la qualité
        du service client et ma rigueur dans le traitement des transactions bancaires m'ont permis d'apporter une valeur ajoutée
         aux équipes avec lesquelles j'ai travaillé. Je suis motivée à l'idée de rejoindre votre équipe et de contribuer à nos
          succès communs par mon adaptabilité et mon esprit d'équipe. Animée par une passion pour les défis et une volonté de constamment me surpasser,
          je suis prête à exploiter mes compétences et mon expérience au profit de votre institution. Je suis persuadée 
          que ma rapidité à m'adapter, ma soif d'apprendre et ma facilité à travailler en équipe contribueront de manière
           significative au dynamisme de votre équipe. Ensemble, visons à enrichir l'expérience client et à optimiser
            nos opérations avec engagement et innovation !`,
    },
    experience: {
      p: "Ce que j'ai accompli jusqu'à présent.",
      h2: "Expériences Professionnelles.",
    },
    feedbacks: {
      p: "Mon feedback",
      h2: "Témoignages",
    },
    works: {
      p: "Mes réalisations",
      h2: "Projets.",
      content: `Les projets suivants mettent en avant mes compétences et mon expérience à travers des exemples concrets de mon travail. Chaque projet est brièvement décrit avec un lien vers les démonstrations. Cela reflète ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies et à gérer efficacement des projets.`,
    },
  },
};
