import React from "react";
import { styles } from "../config/colors";

const Modal1 = ({ children, isVisible, setIsVisible }) => {
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
        <div className="flex min-h-full items-end justify-center p-4 w-full text-center sm:items-center sm:p-0">
          <div onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal1;
