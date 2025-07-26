import React, { useState } from "react";
import Form from "./Form";

const UserForm = () => {
  const [formType, setFormType] = useState(null);

  const handleFormChange = (type ) => {
    formType ? setFormType("user") : setFormType(type);
  };

  const renderForm = () => {
    switch (formType) {
      case "user":
        return ;
    }
  };

  return (
    <div className="p-2 flex w-full justify-end items-end rounded-2xl ">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-lg"
          onClick={() => handleFormChange("user")}>
          Ajouter un utilisateur
        </button>
      </div>

      {renderForm()}
    </div>
  );
};


// Formulaire Entreprise

export default UserForm;
