import React from "react";
import { MdLocationPin, MdWork, MdLanguage, MdDescription, MdInfo } from "react-icons/md";
import { FaBuilding, FaCalendarAlt, FaCheckCircle, FaClock, FaExclamationTriangle, FaFolderOpen } from "react-icons/fa";
import edm from "../assets/edm.jpeg";

const DaoCard = ({ item, applied}) => {
  const {
    name,
    description,
    site_web,
    status,
    titre,
    company,
    ville,
    lieu,
    contratType,
    category,
    date_limite_depot,
    job,
    date_candidature,
  } = item?.attributes || {};

  // Fonction pour déterminer la couleur du status
  const getStatusColor = (status) => {
    switch (status) {
      case true:
        return 'text-green-600 bg-green-100';
      case false:
        return 'text-red-600 bg-red-100';
      case 'en_cours':
        return 'text-blue-600 bg-blue-100';
      case 'suspendu':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  // Fonction pour l'icône du status
  const getStatusIcon = (status) => {
    switch (status) {
      case true:
        return <FaCheckCircle />;
      case false:
        return <FaExclamationTriangle />;
      case 'en_cours':
        return <FaClock />;
      default:
        return <FaInfo />;
    }
  };



  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 mb-4 h-[350px] flex flex-col">
      {/* Header avec status */}
      <div className="flex justify-between items-start p-4 border-b border-gray-100 flex-shrink-0 overflow-hidden">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex justify-center items-center flex-shrink-0">
          <FaFolderOpen className="w-8 h-8 text-orange-500" />
          </div>
          <div className="flex-1 overflow-hidden w-24">
            <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors overflow-hidden">
              <a href={`/appels-offre/${titre || name}`} className="block overflow-hidden text-ellipsis whitespace-nowrap">
                {titre || name}
              </a>
            </h3>
            {company?.data?.attributes?.name && (
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <FaBuilding className="w-3 h-3" />
                <span>{company.data.attributes.name}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Badge de status */}
        {status && (
          <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
            {getStatusIcon(status)}
            <span className="capitalize">{status ? 'Ouvert' : 'Fermé'}</span>
          </div>
        )}
      </div>

      {/* Corps de la card */}
      <div className="p-4 flex-1 overflow-hidden">
        {/* Description */}
        {description && (
          <div className="mb-4">
            <div className="flex items-start space-x-2">
              <MdDescription className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700 overflow-hidden flex-1">
                <span 
                  className="block overflow-hidden text-ellipsis" 
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: '3',
                    WebkitBoxOrient: 'vertical',
                    lineHeight: '1.4em',
                    maxHeight: '4.2em'
                  }}
                >
                  {description}
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Informations principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          {/* Localisation */}
          {(company?.data?.attributes?.adresse || ville) && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MdLocationPin className="w-4 h-4 text-gray-500" />
              <span>{company?.data?.attributes?.adresse || ville}</span>
            </div>
          )}

          {/* Type de contrat */}
          {contratType && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MdWork className="w-4 h-4 text-gray-500" />
              <span>{contratType}</span>
            </div>
          )}

          {/* Site web */}
          {site_web && (
            <div className="flex items-center space-x-2 text-sm">
              <MdLanguage className="w-4 h-4 text-gray-500" />
              <a 
                href={site_web}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline truncate"
              >
                {site_web.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}

          {/* Date limite */}
          {date_limite_depot && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <FaCalendarAlt className="w-4 h-4 text-gray-500" />
              <span>Jusqu'au {new Date(date_limite_depot).toLocaleDateString()}</span>
            </div>
          )}
        </div>

        {/* Activité de l'entreprise */}
        {company?.data?.attributes?.activite && (
          <div className="mb-4">
            <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
              {company.data.attributes.activite}
            </span>
          </div>
        )}
      </div>

      {/* Footer avec actions */}
      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-b-lg flex-shrink-0">
        <div className="text-xs text-gray-500">
          {applied && (
            <span className="flex items-center space-x-1">
              <FaCheckCircle className="w-3 h-3 text-green-500" />
              <span>Candidature envoyée le {new Date(applied.attributes.date_candidature).toLocaleDateString()}</span>
            </span>
          )}
        </div>
        
        <a
          href={`/appels-offre/${titre || name}`}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            applied
              ? "bg-green-500 text-white cursor-default"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {applied ? "Candidature envoyée" : "Voir les détails"}
        </a>
      </div>
    </div>
  );
};

export default DaoCard;
