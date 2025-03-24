import React, { useEffect, useState } from "react";
import FilterForm from "../components/Filters";
import Form from "../components/Form";
import JobCard from "../components/JobCard";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import ProfileCard from "../components/ProfileCard";
import { companyFields, jobsFIelds } from "../constants";
import {
  useGetCompanyQuery,
  usePostCompanyMutation,
} from "../redux/companyService";
import { useGetJobsQuery, usePostJobsMutation } from "../redux/jobService";
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

  const {
    data: entreprises,
    isFetching,
    isSuccess,
    isLoading,
    isError,
  } = useGetCompanyQuery();

  const {
    data: JobsData,
    isSuccess: isJobSuccess,
    isLoading: isJobLoading,
    isError: isJobError,
  } = useGetJobsQuery();

  const [postJobs] = usePostJobsMutation();
  const [postCompany] = usePostCompanyMutation();
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState();
  const [filters, setFilters] = useState({
    title: "",
    experience: "",
    location: "",
    company: "",
    minApplications: 0,
    maxApplications: Infinity,
  });

  const [fields, setFields] = useState();

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

  const selectForm = (fields, title) => {
    setTitle(title);
    setFields(fields);
    setIsVisible(true);
  };
  const send = (data) => {
    console.log("les données envoyées", data);
    title === "jobs"
      ? postJobs({ data }).then((rep) => console.log("reponse", rep))
      : postCompany({ data }).then((rep) => console.log("reponse", rep));
  };

  useEffect(() => {
    console.log("entreprise", entreprises);
    let fields = jobsFIelds;

    let field = jobsFIelds.find((item) => item.name === "company");

    let result = [];
    entreprises?.data.map((item) => {
      result.push({ value: item.id, name: item.attributes.name });
    });

    field.options = result;
  }, [entreprises]);

  useEffect(() => {
    console.log("jobs", JobsData);
  }, [JobsData]);

  return (
    <Layout>
      <div className="w-full min-h-screen flex flex-col lg:flex-row mt-10 p-4 space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Section de filtres */}
        <div className="w-full lg:w-1/3 h-fit  flex flex-col p-4 rounded-lg shadow-md">
          <FilterForm
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        </div>

        {/* Section des offres d'emploi */}
        <div className="w-full lg:w-2/3 space-y-4">
          <div className="w-full flex flex-wrap space-x-4">
            <button
              onClick={() => selectForm(companyFields, "company")}
              className="bg-orange-500 text-white font-semibold py-2 w-60 rounded-2xl ">
              Ajouter une entreprise
            </button>
            <button
              onClick={() => selectForm(jobsFIelds, "jobs")}
              className="bg-orange-500 py-2 text-white font-semibold  w-60 rounded-2xl ">
              Ajouter un poste
            </button>
          </div>
          {JobsData.data.map((job, index) => (
            <JobCard
              key={index}
              title={job.attributes.titre}
              experience={job.attributes.experience}
              location={job.attributes.lieu}
              date={job.attributes.date}
              company={job.attributes?.company?.data?.attributes?.name}
              applications={job.applications}
              inProgress={job.inProgress}
              rejected={job.rejected}
            />
          ))}
        </div>

        {/* Section des profils */}
        <div className="w-full lg:w-1/4 bg-gray-50 p-4 rounded-lg shadow-md h-auto lg:h-full space-y-2 overflow-y-auto">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>
      </div>
      <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
        <Form
          fields={fields}
          setIsVisible={setIsVisible}
          post={send}
          title={"Créer un job"}
        />
      </Modal>
    </Layout>
  );
};

export default Offers;
