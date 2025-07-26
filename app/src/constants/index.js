
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
             
            },
            {
                class: "",
                name: "descriptionObjectif",
                placeholder: "Description",
                type: "textarea",
                
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
                
            },

        ],
     
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
            
            },

        ],

    },
    {
        class: "",
        name: "experience",
        placeholder: "Expérience",
        type: "number",
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
        name: "content",
        placeholder: "Content",
        type: "array",
        fields: [
            {
                class: "",
                name: "contentTitle",
                placeholder: "Titre",
                type: "text",
            },
            {
                class: "",
                name: "descriptionContent",
                placeholder: "Description",
                type: "textarea",
            },
            
        ],

    },

    {
        class: "",
        name: "sousContent",
        placeholder: "Sous Contenu",
        type: "array",
        fields: [
            {
                class: "",
                name: "SoustContentTitle",
                placeholder: "Titre",
                type: "text",
            },
            {
                class: "",
                name: "SousContentText",
                placeholder: "Sous Contenu text",
                type: "textarea",
            },
            
        ],

    },
    {
        class: "",
        name: "categorie",
        placeholder: "Catégorie",
        type: "text",

    },
]

export const bulletinField = [
    {
        class: "",
        name: "intitule",
        placeholder: "Intitulé",
        type: "text",
        required: true,
    },
    {
        class: "",
        name: "documents",
        placeholder: "Documents",
        type: "file",
        required: true,
    },
    {
        class: "",
        name: "month_nb",
        placeholder: "Numéro du mois",
        type: "number",
        required: true,
    },
    {
        class: "",
        name: "user",
        placeholder: "Utilisateur",
        type: "select",
        required: true,
        options: [
            {
                name: "User 1",
                value: 1
            }
        ]
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
                value: 1
            }
        ]
    },
]

export const daoField = [
    {
        class: "",
        name: "name",
        placeholder: "Nom du DAO",
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
        name: "website",
        placeholder: "Site web",
        type: "url",
    },
   
    {
        class: "",
        name: "status",
        placeholder: "Statut",
        type: "select",
        options: [
            { value: true, name: "Actif" },
            { value: false, name: "Inactif" }
        ]
    },
];


export const userFields = [
    {
        class: "",
        name: "username",
        placeholder: "Nom d'utilisateur",
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
        name: "password",
        placeholder: "Mot de passe",
        type: "password",
        required: true,
    },
    {
        class: "",
        name: "role",
        placeholder: "Role",
        type: "select",
        options: [
            { value: 3, name: "Administrateur" },
            { value: 1, name: "Agent" },
            { value: "user", name: "Utilisateur" }
        ],
        required: true,
    },
    {
        class: "",
        name: "adresse",
        placeholder: "Adresse",
        type: "text",

    },
];
