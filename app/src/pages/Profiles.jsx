import React, { useState } from "react";
import Layout from "../components/Layout";
import FilterForm from "../components/Filters";
import ProfileCard from "../components/ProfileCard";
import { useNavigate } from "react-router-dom";
import { useGetProfileQuery } from "../redux/profileServices";

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


  const {data, isLoading, isError} = useGetProfileQuery();
  const [filters, setFilters] = useState({
    profile: "", // Filtrer par nom de profil
    experience: "",
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
  const filteredProfiles = data?.data.filter((profile) => {
    const filterByExperience =
      !filters.experience || profile.attributes.total_exp >= Number(filters.experience);
    const filterBySkills =
      !filters.skills ||
      profile.attributes?.skills.some((skill) =>
        skill?.name.toLowerCase().includes(filters.skills.toLowerCase())
      );
      const filterByProfile =
      !filters.profile || profile.attributes.title.toLowerCase().includes(filters.profile.toLowerCase());
    return filterByExperience && filterBySkills && filterByProfile;
  });

  const navigate = useNavigate();

  return (
    <Layout>
      <div className="w-full h-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 p-4">
        {/* Section des filtres */}
        <div className="w-full lg:w-1/4 p-4  rounded-lg shadow-md">
          <FilterForm
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        </div>

        {/* Section des profils */}
        <div className="w-full lg:w-3/4 flex flex-wrap gap-4 justify-center">
          {filteredProfiles?.map((profile, index) => (
            <div
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 cursor-pointer"
              
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
