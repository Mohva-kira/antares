import React from "react";

const Modal = ({ children, isVisible, setIsVisible }) => {
  return (
    <div
      className={`"relative z-10 w-1/2 " ${isVisible ? "block" : "hidden"} `}
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
        class="fixed inset-0  w-full bg-gray-500/75 transition-opacity"
        aria-hidden="true"></div>

      <div class="fixed inset-0  z-10 w-full overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4  w-full text-center sm:items-center sm:p-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
