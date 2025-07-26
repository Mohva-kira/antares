import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import LocationMap from "../components/LocationMap";
import SkillsChart from "../components/SkillsChart";
import { useLazyGetProfileByIdQuery } from "../redux/profileServices";
import { use } from "react";
import { IoPersonOutline } from "react-icons/io5";
import Modal from "./../components/Modal";
import Form from "./../components/Form";
import { bulletinField } from "../constants";
import {
  useCreateBulletinMutation,
  useLazyGetBulletinsByUserQuery,
  useUploadFileMutation,
} from "../redux/bulletinService";
import { toast } from "react-toastify";
// Composant pour afficher une section d'expérience professionnelle
const ExperienceSection = ({ experiences }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">
      Expérience Professionnelle
    </h2>
    <div className="space-y-4">
      {experiences?.map((exp, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold">
            {exp.title} - {exp.company}
          </h3>
          <p className="text-gray-600">
            {exp.begin} - {exp.end}
          </p>
          <ul className="list-disc  font-thin mt-2 text-gray-700">
            {exp.details}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

// Composant pour afficher une section d'éducation
const EducationSection = ({ education }) => (
  <div className="mb-6">
    <h2 className="text-xl  font-semibold mb-2 border-b border-gray-200 pb-1">
      Éducation
    </h2>
    <div className="space-y-4">
      {education?.map((edu, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold">
            {edu.degree} - {edu.institution}
          </h3>
          <p className="text-gray-600">
            {edu.begin} - {edu.end}
          </p>
          <p className="text-gray-700 font-thin mt-2">{edu.details}</p>
        </div>
      ))}
    </div>
  </div>
);

// Composant principal pour afficher les détails du CV
const CvDetails = ({ cv }) => {
  const cvDataList = [
    {
      id: 1,
      name: "Mamadou Keita",
      title: "Développeur Full Stack",
      location: {
        city: "Bamako",
        position: { lat: 12.6392, lng: -8.0029 },
      },
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
      ],
      recommendations: [
        {
          text: "Mamadou est un excellent développeur avec une forte expertise technique.",
          author: "Awa Traoré",
          position: "Manager chez DevCorp",
        },
        {
          text: "Il a toujours livré des projets de qualité à temps.",
          author: "Koffi Mensah",
          position: "Directeur chez InnoTech",
        },
      ],
      experience: [
        {
          company: "TechCorp",
          role: "Développeur Full Stack",
          dates: "Janvier 2020 - Présent",
          details:
            "Conception et développement de solutions web pour des clients internationaux.",
        },
      ],
      education: [
        {
          degree: "Master en Informatique",
          institution: "Université de Bamako",
          dates: "Septembre 2014 - Juin 2016",
          details: "Mention Très Bien",
        },
      ],
      additionalInfo:
        "Passionné par les nouvelles technologies et le développement d'applications évolutives.",
    },
    {
      id: 2,
      name: "Fatoumata Traoré",
      title: "Ingénieure Cloud",
      location: {
        city: "Dakar",
        position: { lat: 14.6928, lng: -17.4467 },
      },
      skills: [
        { name: "Cloud Computing", level: 95 },
        { name: "AWS", level: 90 },
        { name: "DevOps", level: 85 },
      ],
      recommendations: [
        {
          text: "Fatoumata a une expertise exceptionnelle en infrastructures cloud.",
          author: "Oumar Ndiaye",
          position: "CTO chez CloudBase",
        },
        {
          text: "Son travail en automatisation et gestion d’infrastructures est remarquable.",
          author: "Marie Diouf",
          position: "Directrice chez NetServices",
        },
      ],
      experience: [
        {
          company: "CloudBase",
          role: "Ingénieure Cloud",
          dates: "Mars 2018 - Présent",
          details:
            "Gestion et optimisation des infrastructures cloud pour les clients.",
        },
      ],
      education: [
        {
          degree: "Master en Cloud Computing",
          institution: "Université de Dakar",
          dates: "Septembre 2015 - Juin 2017",
          details: "Mention Bien",
        },
      ],
      additionalInfo:
        "Spécialisée dans l’architecture cloud et la sécurité des données.",
    },
    {
      id: 3,
      name: "Cheick Diallo",
      title: "Data Scientist",
      location: {
        city: "Abidjan",
        position: { lat: 5.3599517, lng: -4.0082563 },
      },
      skills: [
        { name: "Python", level: 90 },
        { name: "Machine Learning", level: 85 },
        { name: "Analyse de Données", level: 80 },
      ],
      recommendations: [
        {
          text: "Cheick est un expert en science des données avec une capacité d’analyse impressionnante.",
          author: "Fanta Koné",
          position: "CEO chez DataCorp",
        },
        {
          text: "Il a révolutionné notre manière d’analyser les données et d’en tirer des insights.",
          author: "Ibrahima Cissé",
          position: "Responsable Analytics chez FinTech",
        },
      ],
      experience: [
        {
          company: "DataCorp",
          role: "Data Scientist",
          dates: "Février 2019 - Présent",
          details:
            "Développement de modèles d’analyse prédictive pour les clients financiers.",
        },
      ],
      education: [
        {
          degree: "Master en Science des Données",
          institution: "Université de Côte d'Ivoire",
          dates: "Septembre 2013 - Juin 2015",
          details: "Mention Bien",
        },
      ],
      additionalInfo:
        "Passionné par l’intelligence artificielle et l’analyse prédictive.",
    },
    // Ajoutez plus de CV ici avec les mêmes structures
  ];

  const [showForm, setShowForm] = useState(false);
  const id = useParams();
  const [fields, setfields] = useState(bulletinField);
  const [getResumeById, { data: cvData, isLoading, isError }] =
    useLazyGetProfileByIdQuery();

  const [
    getBulletinByUser,
    {
      data: bulletinData,
      isLoading: isBulletinLoading,
      isError: isBulletinError,
    },
  ] = useLazyGetBulletinsByUserQuery();
  const [createBulletin] = useCreateBulletinMutation();
  const [uploadFile] = useUploadFileMutation();

  const findCv = cvDataList.find((cv, index) => cv.name == "Mamadou Keita");

  const sendBulletin = (data) => {
    console.log("Données du bulletin de salaire envoyées :", data);

    // Créer un objet FormData
    const formData = new FormData();

    // Parcourir toutes les propriétés de data et les ajouter au FormData
    formData.append(
      "data",
      JSON.stringify({
        intitule: data.intitule,
        month_nb: data.month_nb,
        user: data.user,
        company: data.company,
      })
    );

    // Ajouter le fichier
    // Pour debug FormData (car console.log ne l'affiche pas correctement)
    console.log("FormData entries:");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    console.log("FormData créé :", formData);
    let result;
    createBulletin({ data }).then((response) => {
      console.log("Bulletin de salaire créé avec succès :", response);
      if (response.error) {
        toast.error("Erreur lors de la création du bulletin de salaire.");
        return;
      }

      // Upload du fichier pour le contenu créer
      if (data.documents) {
        const file = data.documents; // Assuming a single file upload
        const fileFormData = new FormData();
        fileFormData.append("files", file);
        fileFormData.append("ref", "api::bulletin.bulletin");
        fileFormData.append("refId", response.data.data.id);
        fileFormData.append("field", "documents");

        uploadFile(fileFormData)
          .then((uploadResponse) => {
            console.log("Fichier uploadé avec succès :", uploadResponse);
          })
          .catch((error) => {
            console.error("Erreur lors de l'upload du fichier :", error);
            toast.error("Erreur lors de l'upload du fichier.");
          });
      }

      toast.success("Bulletin de salaire ajouté avec succès !");
    });
    // Ici, vous pouvez appeler une fonction pour envoyer le FormData
    // Exemple : submitBulletinData(formData);

    setShowForm(false);
  };

  useEffect(() => {
    if (id.id) {
      getResumeById(id.id)
        .then((response) => {
          if (response.data) {
            console.log("CV trouvé:", response.data);
          } else {
            console.error("CV non trouvé");
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération du CV:", error);
        });

      getBulletinByUser(1)
        .then((response) => {
          if (response.data) {
            console.log("Bulletins trouvés:", response.data);
          } else {
            console.error("Aucun bulletin trouvé pour cet utilisateur");
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des bulletins:", error);
        });
    }
  }, [id.id, getResumeById]);
  console.log("find", findCv);
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="flex lg:w-1/3 w-full p-2 flex-col gap-2">
          <div className="w-full bg-white rounded-2xl p-4 shadow-lg mb-4">
            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
              Ajouter un bulletin de salaire
            </button>
          </div>

          <Modal isVisible={showForm} setIsVisible={setShowForm}>
            <Form
              fields={fields}
              setIsVisible={setShowForm}
              post={sendBulletin}
              title={"Ajouter un bulletin de paie"}
            />
          </Modal>

          {/* Liste des bulletins de salaire */}
          <div className="w-full bg-white rounded-2xl p-4 shadow-lg mb-4">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Bulletins de salaire
            </h3>
            <div className="max-h-64 overflow-y-auto">
              {bulletinData && bulletinData.data ? (
                bulletinData.data.length > 0 ? (
                  <div className="space-y-3">
                    {bulletinData.data.map(
                      (bulletin, index) =>
                        bulletin.attributes.documents.data &&
                        bulletin.attributes.documents.data.length > 0 && (
                          <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900">
                                  {bulletin.attributes.intitule}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Mois:{" "}
                                  {new Date(
                                    new Date().getFullYear(),
                                    bulletin.attributes.month_nb - 1
                                  ).toLocaleDateString("fr-FR", {
                                    month: "long",
                                    year: "numeric",
                                  })}
                                </p>
                                {bulletin.attributes.company && (
                                  <p className="text-sm text-gray-600">
                                    Entreprise:{" "}
                                    {bulletin.attributes.company.data
                                      ?.attributes?.name || "N/A"}
                                  </p>
                                )}
                              </div>
                              <div className="flex flex-col gap-1">
                                {bulletin.attributes.documents &&
                                  bulletin.attributes.documents.data && (
                                    <a
                                      href={`http://localhost:1337${bulletin.attributes.documents.data[0]?.attributes?.url}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-500 hover:text-blue-700 text-sm">
                                      📄 Voir document
                                    </a>
                                  )}
                                <span className="text-xs text-gray-500">
                                  {new Date(
                                    bulletin.attributes.createdAt
                                  ).toLocaleDateString("fr-FR")}
                                </span>
                              </div>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-4">
                    Aucun bulletin de salaire trouvé
                  </p>
                )
              ) : (
                <p className="text-gray-500 text-center py-4">
                  Chargement des bulletins...
                </p>
              )}
            </div>
          </div>

          <div className="w-full">
            <LocationMap position={findCv.position} city={findCv.city} />
          </div>
          <div className="w-full">
            <SkillsChart skills={findCv.skills} />
          </div>
        </div>

        <div className="container mx-auto p-4">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
            {/* En-tête du CV */}

            <div className="flex items-center mb-6">
              {cvData?.data?.attributes?.user?.data?.attributes?.photo ? (
                <div className="flex items-center mb-6">
                  <img
                    src={
                      cvData?.data?.attributes?.user?.data?.attributes?.photo
                    }
                    alt="Photo du candidat"
                    className="w-24 h-24 rounded-full border border-gray-300 mr-4"
                  />
                </div>
              ) : (
                <div className="flex items-center mb-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex flex-col items-center justify-center mr-4">
                    <IoPersonOutline size={25} />
                    <span className="text-gray-500 text-xs">Pas de photo</span>
                  </div>
                </div>
              )}
              <div>
                <h1 className="text-2xl font-bold mb-1">
                  {cvData?.data?.attributes?.user?.data?.attributes?.username}
                </h1>
                <p className="text-gray-600 mb-2">
                  {cvData?.data?.attributes?.title}
                </p>
                <p className="text-gray-600 mb-1">
                  {cvData?.data?.attributes?.user?.data?.attributes?.email}
                </p>
                <p className="text-gray-600">
                  {cvData?.data?.attributes?.user?.data?.attributes?.phone}
                </p>
              </div>
            </div>

            {/* Sections dynamiques */}
            <ExperienceSection
              experiences={cvData?.data?.attributes?.experience}
            />
            <EducationSection education={cvData?.data?.attributes?.education} />

            {/* Section Compétences */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">
                Compétences
              </h2>
              <ul className="list-disc ml-6 text-gray-700">
                {cvData?.data?.attributes?.skills.map((skill, index) => (
                  <li key={index}>{skill.name}</li>
                ))}
              </ul>
            </div>

            {/* Section Autres Informations */}
            {/* <div>
              <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">
                Autres Informations
              </h2>
              <p className="text-gray-700">{findCv.additionalInfo}</p>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CvDetails;
