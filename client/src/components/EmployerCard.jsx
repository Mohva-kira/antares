import React from "react";
import team4 from "../assets/images/team4.jpg";
import { FaMapMarkerAlt, FaEnvelope, FaGlobe, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmployerCard = ({ item1 }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate(`/employeurs/${item1.name}`)}
      className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border-t-4 border-[#2529d8] cursor-pointer h-100"
    >
      <div className="p-5">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Image */}
          <div className="flex-shrink-0">
            <img 
              src={team4} 
              alt={item1.name || "Employeur"} 
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover border-2 border-gray-100"
            />
          </div>
          
          {/* Informations */}
          <div className="flex-1">
            <h4 className="text-xl font-bold text-gray-800 mb-2 hover:text-[#2529d8] transition-colors duration-200">
              {item1.name || "Entreprise"}
            </h4>
            
            {item1.activite && (
              <p className="text-sm text-[#2529d8] font-semibold mb-2">
                {item1.activite}
              </p>
            )}
            
            {item1.description && (
              <p className="text-gray-600 mb-4 line-clamp-2">
                {item1.description}
              </p>
            )}
            
            {/* Détails */}
            <div className="space-y-2">
              {item1.adresse && (
                <div className="flex items-start text-sm text-gray-600">
                  <FaMapMarkerAlt className="mt-1 mr-2 text-[#2529d8] flex-shrink-0" />
                  <span className="line-clamp-1">{item1.adresse}</span>
                </div>
              )}
              
              {item1.email && (
                <div className="flex items-center text-sm text-gray-600">
                  <FaEnvelope className="mr-2 text-[#2529d8] flex-shrink-0" />
                  <span className="truncate">{item1.email}</span>
                </div>
              )}
              
              {item1.site && (
                <div className="flex items-center text-sm text-gray-600">
                  <FaGlobe className="mr-2 text-[#2529d8] flex-shrink-0" />
                  <a 
                    href={item1.site} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[#2529d8] hover:underline truncate"
                  >
                    {item1.site}
                  </a>
                </div>
              )}
              
              {item1.nb_employees && (
                <div className="flex items-center text-sm text-gray-600">
                  <FaUsers className="mr-2 text-[#2529d8] flex-shrink-0" />
                  <span>{item1.nb_employees} Employés</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerCard;
