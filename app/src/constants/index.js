
export const jobsFIelds = [
    {
        class: "",
        name: "titre",
        placeholder: "Titre",
        type: "text",
        required: true,
    },
    {
        class: "",
        name: "description",
        placeholder: "Description",
        type: "textarea",
        required: true,
    },
    {
        class: "",
        name: "lieu",
        placeholder: "Lieu",
        type: "text",
        required: true,
    },

    {
        class: "",
        name: "skills",
        placeholder: "Excel, Word, Powerpoint",
        type: "textarea",
        required: true,
    },
    {
        class: "",
        name: "date",
        placeholder: "Date",
        type: "date",
        required: true,
    },
    {
        class: "",
        name: "company",
        placeholder: "Entreprise",
        type: "select",
        required: true,
        options: [
            {
                name: "BMS",
                value: "BMS"
            }
        ]
    },
    {
        class: "",
        name: "objectif",
        placeholder: "Objectif",
        type: "array",
        fields: [
            {
                class: "",
                name: "titleObjectif",
                placeholder: "Titre",
                type: "text",
                required: true,
            },
            {
                class: "",
                name: "description",
                placeholder: "Description",
                type: "textarea",
                required: true,
            },
            {
                class: "",
                name: "contratType",
                placeholder: "type de contrat",
                type: "select",
                options: [
                    { name: "CDI", value: "CDI" },
                    { name: "CDD", value: "CDD" },
                    { name: "Stage", value: "Stage" },
                    { name: "Alternance", value: "Alternance" },
                    { name: "Freelance", value: "Freelance" },
                    { name: "Consultant", value: "Consultant" },
                    { name: "Prestataire de services", value: "Prestataire de services" },
                    { name: "Autre", value: "Autre" },
                ],
                required: true,
            },

        ],
        required: true,
    },
    {
        class: "",
        name: "education",
        placeholder: "Profil recherché",
        type: "array",
        fields: [
            {
                class: "",
                name: "titleProfil",
                placeholder: "Titre",
                type: "text",
                required: true,
            },

            {
                class: "",
                name: "niveau",
                placeholder: "Niveau d'étude",
                type: "select",
                options: [
                    { name: "Bac", value: "Bac" },
                    { name: "Bac + 2", value: "Bac + 2" },
                    { name: "Bac + 3", value: "Bac + 3" },
                    { name: "Bac + 4", value: "Bac + 4" },
                    { name: "Bac + 5", value: "Bac + 5" },
                    { name: "Doctorat", value: "Doctorat" },
                ],
                required: true,
            },

            {
                class: "",
                name: "atouts",
                placeholder: "Atouts",
                type: "textarea",
                options: [
                    { name: "Bac", value: "Bac" },
                    { name: "Bac + 2", value: "Bac + 2" },
                    { name: "Bac + 3", value: "Bac + 3" },
                    { name: "Bac + 4", value: "Bac + 4" },
                    { name: "Bac + 5", value: "Bac + 5" },
                    { name: "Doctorat", value: "Doctorat" },
                ],
                required: true,
            },

        ],
        required: true,
    },
]


export const companyFields = [
    {
        class: "",
        name: "name",
        placeholder: "Nom",
        type: "text",
        required: true,
    },
    {
        class: "",
        name: "adresse",
        placeholder: "Adresse",
        type: "text",
        required: true,
    },
    {
        class: "",
        name: "email",
        placeholder: "Email",
        type: "email",
        required: true,
    },

    {
        class: "",
        name: "phone",
        placeholder: "Téléphone",
        type: "text",
        required: true,
    },
    {
        class: "",
        name: "site",
        placeholder: "Site",
        type: "text",

    },
    {
        class: "",
        name: "activite",
        placeholder: "Domaine d'activité",
        type: "text",

    },
    {
        class: "",
        name: "nb_employees",
        placeholder: "Nombre d'employées",
        type: "number",

    },

]

export const actualiteField = [
    {
        class: "",
        name: "title",
        placeholder: "Titre",
        type: "text",

    },
    {
        class: "",
        name: "slug",
        placeholder: "Slug",
        type: "text",

    },
    {
        class: "",
        name: "content",
        placeholder: "Content",
        type: "text",

    },
    {
        class: "",
        name: "images",
        placeholder: "images",
        type: "file",

    },
    {
        class: "",
        name: "author",
        placeholder: "Auteur",
        type: "text",

    },

    {
        class: "",
        name: "categorie",
        placeholder: "Catégorie",
        type: "text",

    },
]