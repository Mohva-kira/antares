import React, { useState } from "react";

const UserForm = () => {
  const [formType, setFormType] = useState(null);

  const handleFormChange = (type) => {
    formType ? setFormType(null) : setFormType(type);
  };

  const renderForm = () => {
    switch (formType) {
      case "user":
        return <Form />;
      default:
        return <p>Veuillez cliquer pour ajouter un utilisateur.</p>;
    }
  };

  return (
    <div className="p-2 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => handleFormChange("user")}>
          Ajouter un utilisateur
        </button>
      </div>
      
      {renderForm()}
    </div>
  );
};

// Formulaire Candidat
const Form = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-gray-700">Nom </label>
      <input
        type="text"
        className="w-full p-2 border rounded-lg"
        placeholder="Nom complet"
      />
    </div>
    <div>
      <label className="block text-gray-700">Email</label>
      <input
        type="email"
        className="w-full p-2 border rounded-lg"
        placeholder="exemple@domain.com"
      />
    </div>
    <div>
      <label className="block text-gray-700">Téléphone</label>
      <input
        type="tel"
        className="w-full p-2 border rounded-lg"
        placeholder="Numéro de téléphone"
      />
    </div>
    <div>
      <label className="block text-gray-700">Mot de passe</label>
      <input
        type="password"
        className="w-full p-2 border rounded-lg"
        placeholder="Mot de passe"
      />
    </div>
    <div>
      <label className="block text-gray-700">role</label>
      <select name="role" id="role">
        <option value="role 1"> role 1 </option>
        <option value="role 1"> role 2 </option>
        <option value="role 1"> role 3 </option>
      </select>
    </div>
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      type="submit">
      Ajouter Candidat
    </button>
  </form>
);

// Formulaire Entreprise

export default UserForm;
