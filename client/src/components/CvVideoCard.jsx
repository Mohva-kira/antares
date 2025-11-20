import React, { useState } from "react";
import aziz from "../assets/images/aziz_diarra.png";
import Modal from "./Modal";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const CvVideoCard = ({ item }) => {
  const { title, img, summary, user, linkedin } = item?.attributes;
  const [isVisible, setIsVisible] = useState(false);

  const handleCardClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div 
        className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border-t-4 border-[#2529d8] cursor-pointer h-100"
        onClick={handleCardClick}
      >
        <div className="p-4">
          {/* Image du candidat */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img
                src={aziz}
                alt={title || "Candidat"}
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-100 hover:border-[#2529d8] transition-colors duration-300"
              />
              <div className="absolute bottom-0 right-0 bg-[#2529d8] text-white rounded-full p-2">
                <svg 
                  className="w-4 h-4" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Informations */}
          <div className="text-center">
            <h4 className="font-bold text-lg text-gray-800 mb-2 hover:text-[#2529d8] transition-colors duration-200">
              {title || "Profil"}
            </h4>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[2.5rem]">
              {summary || "Aucune description disponible"}
            </p>

            {/* Réseaux sociaux */}
            <div className="flex justify-center items-center space-x-3 pt-3 border-t border-gray-100">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[#2529d8] hover:text-[#1d20b0] transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              )}
              <a
                href="#"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="text-gray-400 hover:text-[#2529d8] transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Modal
        title={title}
        poste={summary}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        video={aziz}
        id={user?.data}
      />
    </div>
  );
};

export default CvVideoCard;
