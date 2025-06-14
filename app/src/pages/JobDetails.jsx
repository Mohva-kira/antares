import React from 'react'
import { useGetJobsByIdQuery } from '../redux/jobService';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';



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
      {education?.map((edu, index) => (
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

  const params = useParams();

  const {data, isLoading, isFetching, isError} = useGetJobsByIdQuery(params?.id); // Remplacez '1' par l'ID du job que vous souhaitez récupérer

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
  } = data?.data?.attributes || {};
  
  const { activite, adresse, email, name, phone, site, nb_emplees } =
  company?.data?.attributes || {};
console.log("Data", data);

  return (
    <Layout>
      
      <div className="container mx-auto p-4">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
            {/* En-tête du CV */}
            <a href={`/employeurs/${''}`}>
              <div className="flex items-center mb-6">
                <img
                  src={'findCv.photoUrl' || "https://via.placeholder.com/100"}
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
                {[0, 1,2].map((skill, index) => (
                  <li key={index}>{skill.name}</li>
                ))}
              </ul>
            </div>

            {/* Section Autres Informations */}
            <div>
              <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">
                PROCESSUS DE RECRUTEMENT
              </h2>
              <p className="text-gray-700">{{}.additionalInfo}</p>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default JobDetails