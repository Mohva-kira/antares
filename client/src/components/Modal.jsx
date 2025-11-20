import React from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "../config/colors";

const Modal = ({ id, title, summary, video, isVisible, setIsVisible }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`relative z-50 ${isVisible ? "block" : "hidden"}`}
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
                {/* <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <svg
                    className="size-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                </div> */}
                <div className="mt-3 w-full text-center capitalize font-bold text-2xl sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-[#2529d8] mb-2"> {id?.attributes?.username} </h3>
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-3"
                    id="modal-title">
                    {title}
                  </h3>
                  <div className="mt-2 mb-4">
                    <p className="text-sm text-gray-600">{summary}</p>
                  </div>

                  <div className="mt-4 w-full p-4 rounded-lg border border-gray-200">
                    <iframe
                      className="w-full h-64 rounded-lg"
                      src="https://www.youtube.com/embed/oz6Zl7zhCTs?si=zgcQ44P6u0dlRqBr"
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
                onClick={() => navigate(`/cv/${id.id}`)}
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
  );
};

export default Modal;
