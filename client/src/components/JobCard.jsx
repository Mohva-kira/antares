import React from "react";
import { MdLocationPin, MdWork } from "react-icons/md";
import edm from "../assets/edm.jpeg";
import { styles } from "../config/colors";
const JobCard = ({ item, applied}) => {
  const {
    name,
    titre,
    company,
    ville,
    lieu,
    contratType,
    category,
    date,
    job,
    date_candidature,
  } = item?.attributes || {};



  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-[#2529d8] p-4 mb-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Logo entreprise */}
        <div className="flex-shrink-0">
          <img 
            src={edm} 
            alt={company?.data?.attributes?.name || "Entreprise"} 
            className="w-16 h-16 rounded-lg object-cover border-2 border-gray-100"
          />
        </div>
        
        {/* Informations */}
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-800 mb-2 hover:text-[#2529d8] transition-colors duration-200">
            <a href={`/job/${titre}`}>{titre || "Poste à pourvoir"}</a>
          </h4>
          
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-3">
            {company?.data?.attributes?.name && (
              <span className="font-semibold text-[#2529d8]">{company.data.attributes.name}</span>
            )}
            {company?.data?.attributes?.activite && (
              <>
                <span className="text-gray-400">-</span>
                <span>{company.data.attributes.activite}</span>
              </>
            )}
            {date && (
              <>
                <span className="text-gray-400">-</span>
                <span>Jusqu'au {date}</span>
              </>
            )}
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            {company?.data?.attributes?.adresse && (
              <div className="flex items-center">
                <MdLocationPin className="mr-1 text-[#2529d8]" />
                <span>{company.data.attributes.adresse}</span>
              </div>
            )}
            <div className="flex items-center">
              <MdLocationPin className="mr-1 text-[#2529d8]" />
              <span>Mali</span>
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col items-end justify-between gap-3">
          {contratType && (
            <div className="flex items-center text-sm">
              <MdWork className="mr-1 text-[#2529d8]" />
              <span className="text-[#2529d8] font-semibold">{contratType}</span>
            </div>
          )}
          
          <a
            href={`/job/${titre}`}
            className={
              applied
                ? `${styles.button.success} px-4 py-2`
                : `${styles.button.primary} px-4 py-2`
            }>
            {applied ? "Candidature envoyée" : "Postuler"}
          </a>
          
          {applied && (
            <div className="text-xs text-gray-500">
              {new Date(applied.attributes.date_candidature).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
