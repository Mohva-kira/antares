import React, { useState } from "react";

const FilterForm = ({ filters, handleFilterChange }) => {
  return (
    <div className="w-1/4 flex items-center justify-start flex-col p-4 h-fit rounded-2xl bg-slate-50 fixed top-10 mt-20 m-3  shadow-lg">
      {/* Titre */}
      <div className="mb-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Titre
        </label>
        <input
          type="text"
          name="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Titre du poste"
          value={filters.title}
          onChange={handleFilterChange}
        />
      </div>

      {/* Expérience */}
      <div className="mb-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="experience"
        >
          Expérience
        </label>
        <input
          type="text"
          name="experience"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Niveau d'expérience"
          value={filters.experience}
          onChange={handleFilterChange}
        />
      </div>

      {/* Localisation */}
      <div className="mb-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="location"
        >
          Localisation
        </label>
        <input
          type="text"
          name="location"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Localisation"
          value={filters.location}
          onChange={handleFilterChange}
        />
      </div>

      {/* Entreprise */}
      <div className="mb-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="company"
        >
          Entreprise
        </label>
        <input
          type="text"
          name="company"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Entreprise"
          value={filters.company}
          onChange={handleFilterChange}
        />
      </div>

      {/* Min Candidatures */}
      <div className="mb-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="minApplications"
        >
          Min candidatures
        </label>
        <input
          type="number"
          name="minApplications"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Min Candidatures"
          value={filters.minApplications}
          onChange={handleFilterChange}
        />
      </div>

      {/* Max Candidatures */}
      <div className="mb-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="maxApplications"
        >
          Max candidatures
        </label>
        <input
          type="number"
          name="maxApplications"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Max Candidatures"
          value={filters.maxApplications}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default FilterForm;
