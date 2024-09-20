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
      // Add 8 more fake jobs
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
      {
        title: "Expert SEO",
        experience: "5 ans d'expérience",
        location: "Freelance",
        date: "22 Juin",
        company: "SearchMaster",
        applications: 20,
        inProgress: 8,
        rejected: 12,
      },
      {
        title: "Développeur Backend",
        experience: "3 ans d'expérience",
        location: "Remote",
        date: "8 Juillet",
        company: "CloudWorks",
        applications: 25,
        inProgress: 7,
        rejected: 10,
      },
      {
        title: "Consultant IT",
        experience: "10 ans d'expérience",
        location: "Consultant",
        date: "15 Août",
        company: "ConsultingX",
        applications: 35,
        inProgress: 12,
        rejected: 8,
      },
      {
        title: "Marketeur de contenu",
        experience: "5 ans d'expérience",
        location: "A distance",
        date: "19 Septembre",
        company: "ContentFly",
        applications: 40,
        inProgress: 18,
        rejected: 14,
      },
      {
        title: "Support technique",
        experience: "Sans experience",
        location: "Bureau",
        date: "25 Octobre",
        company: "TechHelp",
        applications: 28,
        inProgress: 5,
        rejected: 3,
      },
      {
        title: "Chef de projet",
        experience: "7 ans d'expérience",
        location: "Sur site",
        date: "12 Novembre",
        company: "Enterprise Inc",
        applications: 32,
        inProgress: 9,
        rejected: 6,
      },
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

  const profiles = [{
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+33 6 12 34 56 78",
    experience: 5,
    skills: ["React", "Node.js", "JavaScript", "SQL"],
    photo: "https://via.placeholder.com/100", // Placeholder image
  },

  {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+33 6 12 34 56 78",
    experience: 5,
    skills: ["React", "Node.js", "JavaScript", "SQL"],
    photo: "https://via.placeholder.com/100", // Placeholder image
  },
  {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+33 6 12 34 56 78",
    experience: 5,
    skills: ["React", "Node.js", "JavaScript", "SQL"],
    photo: "https://via.placeholder.com/100", // Placeholder image
  }
  ];

  return (
    <Layout>
      <div className="w-full h-full flex  mt-10 justify-between p-4">
        <div className="w-full relative p-2">
          <FilterForm
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        </div>

        <div className="w-full  h-full p-2 m-2">
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
        <div className=" overflow-scroll overflow-y-scroll flex flex-col items-center        w-full p-2">

          {
            profiles.map((profile, index) => <ProfileCard key={index} profile={profile} /> )

          }
          
        </div>
      </div>
    </Layout>
  );
};

export default Offers;
