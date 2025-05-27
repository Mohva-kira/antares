import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ id, title, summary, video, isVisible, setIsVisible }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`"relative z-10 " ${isVisible ? "block" : "hidden"} `}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      {/* Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0" */}

      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" */}

          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div onClick={() => setIsVisible(false)} className="absolute right-5 cursor-pointer top-4 font-extrabold">X</div>
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
                <div className="mt-3 w-full text-center capitalize font-extrabold text-2xl sm:ml-4 sm:mt-0 sm:text-left">
                  <h3> {id?.attributes?.username} </h3>
                  <h3
                    className="text-base font-light text-gray-900"
                    id="modal-title">
                    {title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{summary}</p>
                  </div>

                  <div className="mt-2 w-full p-4 rounded-3xl">
                    <iframe
                      className="w-full h-fit"
                      src="https://www.youtube.com/embed/oz6Zl7zhCTs?si=zgcQ44P6u0dlRqBr"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 w-full flex sm:flex-row-reverse sm:px-6 justify-center items-center space-x-3 ">
              <button
                onClick={() => navigate(`/cv/${id.id}`)}
                type="button"
                className="  w-full justify-center rounded-2xl bg-orange-500  h-fit py-1.5">
                Detail
              </button>
              <button
                onClick={() => setIsVisible(!isVisible)}
                type="button"
                className=" inline-flex w-full mr-2 justify-center rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
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
