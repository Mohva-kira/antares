import React, { useState } from "react";
import Layout from "../components/Layout";
import FilterForm from "../components/Filters";
import ProfileCard from "../components/ProfileCard";
import { useNavigate } from "react-router-dom";

const Profiles = () => {
  const profiles = [
    {
      name: "Alice Martin",
      email: "alice.martin@email.com",
      phone: "+33 6 22 33 44 55",
      experience: 4,
      skills: ["React", "TypeScript", "HTML", "CSS"],
      photo: "https://via.placeholder.com/100",
    },
    {
      name: "Bob Dupont",
      email: "bob.dupont@email.com",
      phone: "+33 6 23 34 45 56",
      experience: 6,
      skills: ["Node.js", "Express", "MongoDB", "JavaScript"],
      photo: "https://via.placeholder.com/100",
    },
    // ... autres profils
  ];

  const [filters, setFilters] = useState({
    name: "", // Non utilisé dans cet exemple
    experience: "",
    location: "", // Non utilisé dans cet exemple
    skills: "", // Filtrer par compétences
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Logique de filtrage
  const filteredProfiles = profiles.filter((profile) => {
    const filterByExperience =
      !filters.experience || profile.experience >= Number(filters.experience);
    const filterBySkills =
      !filters.skills ||
      profile.skills.some((skill) =>
        skill.toLowerCase().includes(filters.skills.toLowerCase())
      );
    return filterByExperience && filterBySkills;
  });

  const navigate = useNavigate();

  return (
    <Layout>
      <div className="w-full h-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 p-4">
        {/* Section des filtres */}
        <div className="w-full lg:w-1/4 p-4 bg-white rounded-lg shadow-md">
          <FilterForm
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        </div>

        {/* Section des profils */}
        <div className="w-full lg:w-3/4 flex flex-wrap gap-4 justify-center">
          {filteredProfiles.map((profile, index) => (
            <div
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 cursor-pointer"
              onClick={() => navigate(`/cv/${index}`)}
              key={index}>
              <ProfileCard profile={profile} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Profiles;
