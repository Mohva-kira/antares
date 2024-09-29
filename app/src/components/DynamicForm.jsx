import React, { useState } from "react";

const DynamicForm = () => {
  const [formType, setFormType] = useState(null);

  const handleFormChange = (type) => {
   formType ? setFormType(null) : setFormType(type);
  };

  const renderForm = () => {
    switch (formType) {
      case "candidat":
        return <CandidatForm />;
      case "entreprise":
        return <EntrepriseForm />;
      case "entretien":
        return <EntretienForm />;
      default:
        return <p>Veuillez sélectionner une entité à ajouter.</p>;
    }
  };

  return (
    <div className="p-2 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">
        Ajouter une Entité
      </h1>
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => handleFormChange("candidat")}>
          Ajouter Candidat
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={() => handleFormChange("entreprise")}>
          Ajouter Entreprise
        </button>
        <button
          className="px-4 py-2 bg-orange-500 text-white rounded-lg"
          onClick={() => handleFormChange("entretien")}>
          Ajouter Entretien
        </button>
      </div>

      {renderForm()}
    </div>
  );
};

// Formulaire Candidat
const CandidatForm = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-gray-700">Nom du Candidat</label>
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
      <label className="block text-gray-700">Expérience (années)</label>
      <input
        type="number"
        className="w-full p-2 border rounded-lg"
        placeholder="Nombre d'années"
      />
    </div>
    <div>
      <label className="block text-gray-700">Compétences</label>
      <input
        type="text"
        className="w-full p-2 border rounded-lg"
        placeholder="Ex: React, Node.js"
      />
    </div>
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      type="submit">
      Ajouter Candidat
    </button>
  </form>
);

// Formulaire Entreprise
const EntrepriseForm = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-gray-700">Nom de l'Entreprise</label>
      <input
        type="text"
        className="w-full p-2 border rounded-lg"
        placeholder="Nom de l'entreprise"
      />
    </div>
    <div>
      <label className="block text-gray-700">Secteur</label>
      <input
        type="text"
        className="w-full p-2 border rounded-lg"
        placeholder="Secteur d'activité"
      />
    </div>
    <div>
      <label className="block text-gray-700">Email</label>
      <input
        type="email"
        className="w-full p-2 border rounded-lg"
        placeholder="exemple@entreprise.com"
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
      <label className="block text-gray-700">Description</label>
      <textarea
        className="w-full p-2 border rounded-lg"
        placeholder="Courte description de l'entreprise"></textarea>
    </div>
    <button
      className="px-4 py-2 bg-green-500 text-white rounded-lg"
      type="submit">
      Ajouter Entreprise
    </button>
  </form>
);

// Formulaire Entretien
const EntretienForm = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-gray-700">Date de l'Entretien</label>
      <input type="date" className="w-full p-2 border rounded-lg" />
    </div>
    <div>
      <label className="block text-gray-700">Heure de l'Entretien</label>
      <input type="time" className="w-full p-2 border rounded-lg" />
    </div>
    <div>
      <label className="block text-gray-700">Candidat</label>
      <select className="w-full p-2 border rounded-lg">
        <option value="">Sélectionner un Candidat</option>
        {/* Options dynamiques basées sur les candidats */}
      </select>
    </div>
    <div>
      <label className="block text-gray-700">Entreprise</label>
      <select className="w-full p-2 border rounded-lg">
        <option value="">Sélectionner une Entreprise</option>
        {/* Options dynamiques basées sur les entreprises */}
      </select>
    </div>
    <div>
      <label className="block text-gray-700">Lieu de l'Entretien</label>
      <input
        type="text"
        className="w-full p-2 border rounded-lg"
        placeholder="Lieu de l'entretien"
      />
    </div>
    <div>
      <label className="block text-gray-700">Statut de l'Entretien</label>
      <select className="w-full p-2 border rounded-lg">
        <option value="Prévu">Prévu</option>
        <option value="Terminé">Terminé</option>
        <option value="Annulé">Annulé</option>
      </select>
    </div>
    <button
      className="px-4 py-2 bg-orange-500 text-white rounded-lg"
      type="submit">
      Ajouter Entretien
    </button>
  </form>
);

export default DynamicForm;
