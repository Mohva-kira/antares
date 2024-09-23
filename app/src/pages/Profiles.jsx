import React, { useState } from "react";
import Layout from "../components/Layout";
import FilterForm from "../components/Filters";
import ProfileCard from "../components/ProfileCard";

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
    {
      name: "Claire Durand",
      email: "claire.durand@email.com",
      phone: "+33 6 24 35 46 57",
      experience: 3,
      skills: ["Angular", "Java", "Spring Boot", "SQL"],
      photo: "https://via.placeholder.com/100",
    },
    {
      name: "David Leroy",
      email: "david.leroy@email.com",
      phone: "+33 6 25 36 47 58",
      experience: 8,
      skills: ["Vue.js", "Node.js", "Python", "Docker"],
      photo: "https://via.placeholder.com/100",
    },
    {
      name: "Emma Blanc",
      email: "emma.blanc@email.com",
      phone: "+33 6 26 37 48 59",
      experience: 7,
      skills: ["React", "GraphQL", "TypeScript", "AWS"],
      photo: "https://via.placeholder.com/100",
    },
    {
      name: "François Petit",
      email: "francois.petit@email.com",
      phone: "+33 6 27 38 49 60",
      experience: 5,
      skills: ["Python", "Django", "PostgreSQL", "JavaScript"],
      photo: "https://via.placeholder.com/100",
    },
    {
      name: "Géraldine Laurent",
      email: "geraldine.laurent@email.com",
      phone: "+33 6 28 39 50 61",
      experience: 6,
      skills: ["React", "Redux", "Sass", "Jest"],
      photo: "https://via.placeholder.com/100",
    },
    {
      name: "Hugo Moreau",
      email: "hugo.moreau@email.com",
      phone: "+33 6 29 40 51 62",
      experience: 4,
      skills: ["JavaScript", "Node.js", "Express", "Vue.js"],
      photo: "https://via.placeholder.com/100",
    },
    {
      name: "Isabelle Fournier",
      email: "isabelle.fournier@email.com",
      phone: "+33 6 30 41 52 63",
      experience: 9,
      skills: ["React", "Node.js", "AWS", "SQL"],
      photo: "https://via.placeholder.com/100",
    },
    {
      name: "Julien Lefevre",
      email: "julien.lefevre@email.com",
      phone: "+33 6 31 42 53 64",
      experience: 10,
      skills: ["React", "Node.js", "GraphQL", "Docker"],
      photo: "https://via.placeholder.com/100",
    },
  ];

  const [filters, setFilters] = useState({
    title: "",
    experience: "",
    location: "",
    company: "",
    minApplications: 0,
    maxApplications: Infinity,
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };
  return (
    <Layout>
      <div className="w-full h-full flex m-2 p-2">
        <div className="w-1/2 relative p-2">
          <FilterForm
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        </div>

        <div className="w-full flex flex-wrap  p-2 m-2">
          {profiles.map((profile, index) => (
           <div className="w-72 p-4"> <ProfileCard key={index} profile={profile} /></div> 
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Profiles;
