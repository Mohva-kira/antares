import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import LocationMap from "../components/LocationMap";
import SkillsChart from "../components/SkillsChart";

// Composant pour afficher une section d'expérience professionnelle
const ExperienceSection = ({ experiences }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">
      Expérience Professionnelle
    </h2>
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold">
            {exp.title} - {exp.company}
          </h3>
          <p className="text-gray-600">{exp.dates}</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">{exp.details}</ul>
        </div>
      ))}
    </div>
  </div>
);

// Composant pour afficher une section d'éducation
const EducationSection = ({ education }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">
      Éducation
    </h2>
    <div className="space-y-4">
      {education.map((edu, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold">
            {edu.degree} - {edu.institution}
          </h3>
          <p className="text-gray-600">{edu.dates}</p>
          <p className="text-gray-700">{edu.details}</p>
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

  const id = useParams();
  const findCv = cvDataList.find((cv, index) => cv.name == "Mamadou Keita");

  console.log("find", findCv);
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="flex lg:w-1/3 w-full p-2 flex-col gap-2">
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
              <img
                src={findCv.photoUrl || "https://via.placeholder.com/100"}
                alt="Photo du candidat"
                className="w-24 h-24 rounded-full border border-gray-300 mr-4"
              />
              <div>
                <h1 className="text-2xl font-bold mb-1">{findCv.name}</h1>
                <p className="text-gray-600 mb-2">{findCv.jobTitle}</p>
                <p className="text-gray-600 mb-1">{findCv.email}</p>
                <p className="text-gray-600">{findCv.phone}</p>
              </div>
            </div>

            {/* Sections dynamiques */}
            <ExperienceSection experiences={findCv.experience} />
            <EducationSection education={findCv.education} />

            {/* Section Compétences */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">
                Compétences
              </h2>
              <ul className="list-disc ml-6 text-gray-700">
                {findCv.skills.map((skill, index) => (
                  <li key={index}>{skill.name}</li>
                ))}
              </ul>
            </div>

            {/* Section Autres Informations */}
            <div>
              <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">
                Autres Informations
              </h2>
              <p className="text-gray-700">{findCv.additionalInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CvDetails;
