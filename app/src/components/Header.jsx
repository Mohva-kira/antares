import React, { useState } from "react";
// import { viteLogo } from '/vite.svg';
import { useNavigate } from "react-router-dom";
import { FiMessageSquare } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoToggleOutline } from "react-icons/io5";
import { searchItems } from "../utils/utils";

const Header = () => {
  const path = location.pathname;
  const navigate = useNavigate();
  const [searchSelected, setSearchSelected] = useState(false);
  const [searchResult, setSearchResult] = useState();
  const links = [
    {
      name: "Accueil",
      path: "/home",
    },
    {
      name: "Jobs",
      path: "/jobs",
    },
    {
      name: "Entretien",
      path: "/meets",
    },
    {
      name: "Base de CV",
      path: "/cvs",
    },
    {
      name: "Communauté",
      path: "/community",
    },
  ];

  const handleSearch = (data, query, key) => {
    console.log("query", query);
    setSearchResult(searchItems(data, query, key));
    if(query == "") setSearchResult([])

    
  };
  const data = [
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
  console.log("path", path);
  return (
    <div className="flex w-full  h-full  shadow-2xl shadow-slate-900 p-2 m-2 rounded-xl">
      <div className="flex items-start justify-start w-full  m-2 p-2">
        {/* <img src={viteLogo} alt="" />  */} logo
      </div>

      <div className="flex items-center justify-start  flex-wrap gap-5 w-full">
        {links.map((item) => (
          <li
            className={`list-none flex flex-col justify-around font-normal ${
              item.path === path && "text-blue-500 font-bold"
            }`}
            onClick={() => navigate(`${item.path}`)}>
            {item.name}
            {item.path === path && (
              <div className=" w-full top-4 relative h-1 bg-blue-500 rounded-2xl"></div>
            )}
          </li>
        ))}
      </div>

      <div className="flex w-1/2 h-full items-end justify-between m-2 p-2">
        <div className="text-4xl">
          <IoToggleOutline />
        </div>
        {searchSelected && (
          <div className="px-2 relative h-full">
            {" "}
            <input
              type="text"
              id="search"
              placeholder=" "
              className="peer w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              required
              onChange={(e) => handleSearch(data, e.target.value, "title")}
            />
            <label
              htmlFor="search"
              className="absolute left-3 top-2 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:left-3 peer-focus:text-blue-500">
              Recherche
            </label>{" "}
          </div>
        )}
        <div
          onClick={() => setSearchSelected(!searchSelected)}
          className="text-3xl relative">
          <CiSearch />
          {searchSelected  &&
          <div className=" bg-slate-400 text-base p-2 w-48 text-white absolute top-10 rounded-2xl right-6">
            <div className="flex flex-col gap-2 ">
              {searchResult.map((res) => <p className="">{res.title} <div className="w-full h-1 bg-black mt-1 truncate"></div></p> ) }
            </div>
          </div>
          }
        </div>

        <div className="text-3xl">
          <FiMessageSquare />
        </div>
        <div className="bg-slate-500 rounded-full h-10 w-10"></div>
      </div>
    </div>
  );
};

export default Header;
