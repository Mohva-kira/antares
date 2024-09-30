import React, { useState } from "react";
import Layout from "../components/Layout";
import JobCard from "../components/JobCard";
import FilterForm from "../components/Filters";
import ProfileCard from "../components/ProfileCard";

const Offers = () => {
  const generateFakeJobs = () => {
    return [
      {
        title: "Maketer digital",
        experience: "Sans experience",
        location: "A distance",
        date: "5 Mars",
        company: "Radio Keldu",
        applications: 14,
        inProgress: 5,
        rejected: 20,
      },
      {
        title: "Designer graphique",
        experience: "1 an d'expérience",
        location: "En ligne",
        date: "10 Avril",
        company: "Studio Creatif",
        applications: 22,
        inProgress: 3,
        rejected: 7,
      },
      {
        title: "Developpeur Frontend",
        experience: "2 ans d'expérience",
        location: "A distance",
        date: "12 Février",
        company: "Tech Solutions",
        applications: 30,
        inProgress: 10,
        rejected: 15,
      },
      {
        title: "Manager de produit",
        experience: "3 ans d'expérience",
        location: "Bureau",
        date: "18 Mai",
        company: "Innovate Corp",
        applications: 18,
        inProgress: 6,
        rejected: 5,
      },
      // ...Autres jobs
    ];
  };

  const [filters, setFilters] = useState({
    title: "",
    experience: "",
    location: "",
    company: "",
    minApplications: 0,
    maxApplications: Infinity,
  });

  const jobs = generateFakeJobs();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      job.experience.includes(filters.experience) &&
      job.location.includes(filters.location) &&
      job.company.toLowerCase().includes(filters.company.toLowerCase()) &&
      job.applications >= filters.minApplications &&
      job.applications <= filters.maxApplications
    );
  });

  const profiles = [
    {
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+33 6 12 34 56 78",
      experience: 5,
      skills: ["React", "Node.js", "JavaScript", "SQL"],
      photo: "https://via.placeholder.com/100",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@email.com",
      phone: "+33 6 12 34 56 78",
      experience: 4,
      skills: ["HTML", "CSS", "JavaScript", "PHP"],
      photo: "https://via.placeholder.com/100",
    },
    // Autres profils
  ];

  return (
    <Layout>
      <div className="w-full h-screen flex flex-col lg:flex-row mt-10 justify-between p-4 space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Section de filtres */}
        <div className="w-full lg:w-1/3 h-fit justify-center items-center  rounded-lg shadow-md">
          <FilterForm
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        </div>

        {/* Section des offres d'emploi */}
        <div className="w-full lg:w-2/3 p-2 space-y-4">
          {filteredJobs.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              experience={job.experience}
              location={job.location}
              date={job.date}
              company={job.company}
              applications={job.applications}
              inProgress={job.inProgress}
              rejected={job.rejected}
            />
          ))}
        </div>

        {/* Section des profils */}
        <div className="w-full lg:w-1/4 p-2 bg-gray-50 rounded-lg shadow-md overflow-y-auto overflow-hidden h-full space-y-2">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Offers;
