import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import edm from "../assets/edm.jpeg";
import Breadcumb from "../components/Breadcumb";
import Container from "../components/Container";
import LocationMap from "../components/LocationMap";
import Modal1 from "../components/Modal1";
import SkillsChart from "../components/SkillsChart";
import { usePostApplicationMutation } from "../redux/application";
import { useGetOffersByNameQuery } from "../redux/offerService";

// Composant pour afficher une section d'expérience professionnelle
const ExperienceSection = ({ objectif, typeContrat, date }) => (
  <div className="mb-6">
    {console.log("objectif", objectif)}
    <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">
      Description du poste
    </h2>
    <div className="space-y-4">
      {objectif?.map((exp, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold">
            {exp.titleObjectif} - {exp.description}
          </h3>
          <p className="text-gray-600 flex w-full gap-4 p-2 mt-2">
            <h2>Type de contrat</h2>{" "}
            <h2 className="font-bold">{typeContrat}</h2>{" "}
          </p>
          <p className="text-gray-600 flex w-full gap-4 p-2 mt-2">
            <h2>Date de debut</h2> <h2 className="font-bold">{date}</h2>
          </p>
          <ul className="list-disc ml-6  text-gray-700  p-2 mt-2">
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
    <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">
      Profil candidat
    </h2>
    <div className="space-y-4">
      {education.map((edu, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold"> {edu.titleProfil} </h3>
          {/* <p className="text-gray-600">{edu.dates}</p> */}
          <p className="text-gray-700">{edu.atouts}</p>
        </div>
      ))}
    </div>
  </div>
);

const JobDetails = () => {

  const auth = JSON.parse(localStorage.getItem("auth")) || null;
  const {user} = auth || {}
  const userId = user?.id || null;
  const cvDataList = [
    {
      id: 1,
      name: "Edm",
      title: "Développeur Full Stack",
      description: "0",
      photoUrl: edm,
      location: {
        city: "Bamako",
        position: { lat: 12.6392, lng: -8.0029 },
      },
      skills: [
        {
          name: "Prendre en charge des actions de communication média/hors média",
          level: 90,
        },
        {
          name: "Gérer et coordonner toutes les étapes de production des campagnes de communication confiées (Briefs débrief-BAT-Exe-Prod-Lancement-Suivi-Bilan)",
          level: 85,
        },
        {
          name: "Travailler avec l’agence de communication après la validation du brief com sur les créas/spots & archivage des versions finales)",
          level: 80,
        },
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
      objectif: [
        {
          title: "TechCorp",
          description:
            "Engagement en faveur de la transparence et de l'intégrité dans nos processus de recrutement Action Contre la Faim informe tous les candidats que ses processus de recrutement se déroulent dans un esprit de transparence, d’équité et de gratuité. À aucun moment et à aucune étape, il n’est exigé ni accepté de frais, pots-de-vin ou quelconque forme de paiement. Nous appelons tous les demandeurs d’emploi à refuser toute demande de paiement liée à nos recrutements et les encourageons à signaler toute tentative de fraude ou de sollicitation financière en lien avec Action Contre la Faim. Nous restons engagés pour des pratiques de recrutement justes et accessibles à tous, et veillons à protéger les droits de tous les candidats.",
          list: ["Janvier 2020 - Présent", 1, 2, 3],
          type: "CDI",
          date: "20/11/2024",
          details:
            "Conception et développement de solutions web pour des clients internationaux.",
        },
      ],
      education: [
        {
          title: "Niveau d’études/ diplôme spécifiques :",
          institution: "Université de Bamako",
          dates: "Septembre 2014 - Juin 2016",
          details:
            "Bac + 3 en science sociale, communication, en sciences sociales, développement international, gestion de projet, ou tout autre domaine pertinent. Connaissances Spécifiques :	–        Intérêt marqué pour la redevabilité, la gestion de projet et l’humanitaire.– Excellentes capacités de communication et d’écoute.",
        },
        {
          title: "Connaissances Spécifiques",
          institution: "Université de Bamako",
          dates: "Septembre 2014 - Juin 2016",
          details:
            "Capacité à travailler en équipe et à distance. Rigueur, autonomie, et proactivité. ",
        },
        {
          title: "Compétences désirables",
          institution: "Université de Bamako",
          dates: "Septembre 2014 - Juin 2016",
          details:
            "  Aisance dans la gestion de bases de données et la rédaction de rapports.",
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

  const profiles = [
    {
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+33 6 12 34 56 78",
      experience: 5,
      skills: ["React", "Node.js", "JavaScript", "SQL"],
      photo: "https://via.placeholder.com/100",
    },

    // Autres profils
  ];
  const id = useParams();
  console.log("id", id);
  const { data, isLoading, error } = useGetOffersByNameQuery(id.name);
  const findCv = cvDataList.find((cv, index) => cv.name == "Edm");
  const navigate = useNavigate();
  const [isVisible, setisVisible] = useState(false);
  const [postApplication] = usePostApplicationMutation();
  const {
    contratType,
    date,
    objectif,
    education,
    description,
    lieu,
    salaire,
    titre,
    company,
  } = data?.data?.[0]?.attributes || {};
  // const objectifs = objectif[0] || [];
  const { activite, adresse, email, name, phone, site, nb_emplees } =
    company?.data?.attributes || {};
  console.log("Data", data);

  const postCandidature = async () => {
    const date = new Date();
    try {
      const res = await postApplication({
        data: {
          job: data?.data[0]?.id,
          candidat: userId,
          date_candidature: date,
          statut: "En attente",
        },
      }).unwrap();
      toast.success(
        "Candidature envoyée avec succès, vous serez contacté par l'employeur"
      );
      navigate("/candidatures");
    } catch (err) {
      console.error("Erreur lors de l'envoi de la candidature", err);
    }
  };
  

  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        Error: {error.message}
      </div>
    );
  }

  return (
    <Container>
      <Breadcumb title={`Job / ${name}`} />
      <div className="flex flex-col lg:flex-row w-full">
        <div className="flex lg:w-1/3 w-full p-2 flex-col gap-2">
          <div className="w-full lg:w-full  rounded-lg flex flex-col justify-center items-center shadow-md h-auto lg:h-fit p-2 overflow-y-auto">
            {/* {profiles.map((profile, index) => (
            <div className='w-full bg-slate-50 p-2 rounded-2xl'>
              <h2 className='text-lg font-bold text-slate-600 p-2 '> Profil correpondant à l'offre </h2>
              <a className="cursor-pointer" onClick={() => navigate(`/cv/${index}`)} >

              <ProfileCard key={index} profile={profile} />
              </a>
            </div>
           
            
          ))} */}
          </div>

          <Modal1
            isVisible={isVisible}
            setisVisible={setisVisible}
            post={postCandidature}>
            <div className="flex flex-col gap-2 bg-white p-4 rounded-2xl shadow-md">
              <h2 className="text-lg font-bold text-slate-600 p-2 ">
                Postuler à l'offre
              </h2>
              <p className="text-slate-600 p-2">
                Êtes-vous sûr de vouloir postuler à cette offre d'emploi ?
              </p>
              <div className="flex  gap-2 w-full">
                <button onClick={() => postCandidature()} className="w-full bg-blue-700 rounded-2xl">Oui</button>
                <button
                  className="w-1/2  bg-red-500 rounded-2xl"
                  onClick={() => setisVisible(false)}>
                  Non
                </button>
              </div>
            </div>
          </Modal1>
          <div className="w-full bg-white rounded-2xl flex justify-center p-4">
            <button
              onClick={() => setisVisible(true)}
              className="bg-orange-400 text-white p-2 font-bold rounded-xl text-xl">
              Postuler
            </button>
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
            <a href={`/employeurs/${findCv.name}`}>
              <div className="flex items-center mb-6">
                <img
                  src={findCv.photoUrl || "https://via.placeholder.com/100"}
                  alt="Photo du candidat"
                  className="w-24 h-24 rounded-full border border-gray-300 mr-4"
                />
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold mb-1">{name}</h1>
                  <p className="text-gray-600 mb-2">{titre}</p>

                  <div className="flex items-center space-x-2">
                    <p className="text-gray-600 mb-1">{activite}, </p>
                    <a href={`mailto:${email}`} className="text-gray-600 mb-1">
                      {email},{" "}
                    </a>
                    <a
                      href={site}
                      target="_blank"
                      className="text-gray-600 mb-1">
                      {site},{" "}
                    </a>
                    <p className="text-gray-600">{phone}</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Sections dynamiques */}
            <ExperienceSection
              objectif={objectif}
              typeContrat={contratType}
              date={date}
            />
            <EducationSection education={education} />

            {/* Section Compétences */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">
                Principale taches
              </h2>
              <ul className="list-disc  bg-gray-50 p-4  rounded-2xl shadow-md  text-gray-700">
                {findCv.skills.map((skill, index) => (
                  <li key={index}>{skill.name}</li>
                ))}
              </ul>
            </div>

            {/* Section Autres Informations */}
            <div>
              <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">
                PROCESSUS DE RECRUTEMENT
              </h2>
              <p className="text-gray-700">{findCv.additionalInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default JobDetails;
