export const CvFormField = [
  {
    class: "",
    name: "title",
    placeholder:
      "Profil du candidat (Ingénieur, Développeur, Gestionnaire, Secrétaire  etc.)",
    type: "text",
    required: true,
  },
  {
    class: "",
    name: "summary",
    placeholder: "Résumé",
    type: "textarea",
    required: true,
  },
  {
    class: "",
    name: "experience",
    placeholder: "Expériences",
    type: "array",
    fields: [
      {
        class: "",
        name: "company",
        placeholder: "Employeur",
        type: "text",
        required: true,
      },

      {
        class: "",
        name: "role",
        placeholder: "Poste",
        type: "text",
        required: true,
      },
      {
        class: "",
        name: "begin",
        placeholder: "Date de debut",
        type: "date",
        required: true,
      },
      {
        class: "",
        name: "end",
        placeholder: "Date de fin",
        type: "date",
        required: true,
      },
      {
        class: "",
        name: "details",
        placeholder: "Détails",
        type: "text",
        required: true,
      },
    ],
    required: true,
  },
  {
    class: "",
    name: "education",
    placeholder: "Éducations",
    type: "array",
    required: true,
    fields: [
      {
        class: "",
        name: "degree",
        placeholder: "Diplôme",
        type: "text",
        required: true,
      },

      {
        class: "",
        name: "institution",
        placeholder: "Université - Ecole",
        type: "text",
        required: true,
      },
      {
        class: "",
        name: "begin",
        placeholder: "Date de debut",
        type: "date",
        required: true,
      },
      {
        class: "",
        name: "end",
        placeholder: "Date de fin",
        type: "date",
        required: true,
      },
      {
        class: "",
        name: "details",
        placeholder: "Détails",
        type: "text",
        required: true,
      },
    ],
  },
  {
    class: "",
    name: "skills",
    placeholder: "Atouts",
    type: "array",
    required: true,
    fields: [
      {
        class: "",
        name: "name",
        placeholder: "Intitulé",
        type: "text",
        required: true,
      },

      {
        class: "",
        name: "level",
        placeholder: "Niveau",
        type: "text",
        required: true,
      },
    ],
  },
  {
    class: "",
    name: "certification",
    placeholder: "Certifications",
    type: "array",
    required: true,
    fields: [
      {
        class: "",
        name: "name",
        placeholder: "Nom",
        type: "text",
        required: true,
      },
      {
        class: "",
        name: "institut",
        placeholder: "Institution",
        type: "text",
        required: true,
      },

      {
        class: "",
        name: "annee",
        placeholder: "Année",
        type: "date",
        required: true,
      },
    ],
  },
  {
    class: "",
    name: "languages",
    placeholder: "Langues",
    type: "array",
    required: true,
    fields: [
      {
        class: "",
        name: "name",
        placeholder: "Langue",
        type: "text",
        required: true,
      },

      {
        class: "",
        name: "niveau",
        placeholder: "Niveau",
        type: "text",
        required: true,
      },
    ],
  },
  {
    class: "",
    name: "projects",
    placeholder: "Projets",
    type: "array",
    required: true,
    fields: [
      {
        class: "",
        name: "name",
        placeholder: "Intitulé",
        type: "text",
        required: true,
      },

      {
        class: "",
        name: "annee",
        placeholder: "Année",
        type: "text",
        required: true,
      },
    ],
  },

  {
    class: "",
    name: "lacation",
    placeholder: "Adresse",
    type: "array",
    required: true,
    fields: [
      {
        class: "",
        name: "city",
        placeholder: "Ville",
        type: "text",
        required: true,
      },
      {
        class: "",
        name: "position",
        placeholder: "Localisation",
        type: "text",
        required: true,
      },
    ],
  },
  {
    class: "",
    name: "video",
    placeholder: "Video",
    type: "text",
    required: true,
  },

  {
    class: "",
    name: "linkedin",
    placeholder: "Linkedin",
    type: "text",
    required: true,
  },
  {
    class: "",
    name: "portfolio",
    placeholder: "Portfolio",
    type: "text",
    required: true,
  },
];
