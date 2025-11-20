import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styles } from "../config/colors";

const CandidatureModal = ({name, poste, video, isVisible, setIsVisible}) => {
  const navigate = useNavigate();
  
  return (
    <div
      className={`relative z-50 ${isVisible ? 'block' : 'hidden'}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div
        className={styles.modal.overlay}
        onClick={() => setIsVisible(false)}
        aria-hidden="true"></div>

      <div className={styles.modal.container}>
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className={`${styles.modal.content} sm:my-8 sm:w-full sm:max-w-lg`}
            onClick={(e) => e.stopPropagation()}>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <button
                onClick={() => setIsVisible(false)}
                className="absolute right-5 top-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 font-extrabold text-xl">
                ×
              </button>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <h3 className="text-xl font-bold text-[#2529d8] mb-2" id="modal-title">{name}</h3>
                  <div className="mt-2 mb-4">
                    <p className="text-sm font-semibold text-gray-700">{poste}</p>
                  </div>

                  <div className="mt-4 w-full p-4 rounded-lg border border-gray-200">
                    <iframe
                      className='w-full h-64 rounded-lg'
                      src={video || "https://www.youtube.com/embed/oz6Zl7zhCTs?si=zgcQ44P6u0dlRqBr"}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.modal.footer} flex sm:flex-row-reverse justify-center items-center space-x-3`}>
              <button
                onClick={() => navigate(`/cv/${name}`)}
                type="button"
                className={styles.button.primary}>
                Voir le détail
              </button>
              <button
                onClick={() => setIsVisible(!isVisible)}
                type="button"
                className={styles.button.outline}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidatureModal
