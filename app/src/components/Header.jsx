import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMessageSquare } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoToggleOutline } from "react-icons/io5";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Importer les icônes du menu burger
import { searchItems } from "../utils/utils";
import logo from "../assets/logo.jpg";

const Header = () => {
  const path = location.pathname;
  const navigate = useNavigate();
  const [searchSelected, setSearchSelected] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture du menu burger

  const links = [
    { name: "Accueil", path: "/home" },
    { name: "Jobs", path: "/jobs" },
    { name: "Entretien", path: "/meets" },
    { name: "Base de CV", path: "/cvs" },
    { name: "Communauté", path: "/community" },
    { name: "Rapports", path: "/rapports" },
    { name: "Utilisateurs", path: "/utilisateurs" },
  ];

  const handleSearch = (data, query, key) => {
    setSearchResult(searchItems(data, query, key));
    if (query === "") setSearchResult([]);
  };

  const data = [
    {
      title: "Marketer digital",
      experience: "Sans experience",
      location: "A distance",
      date: "5 Mars",
      company: "Radio Keldu",
    },
    {
      title: "Designer graphique",
      experience: "1 an d'expérience",
      location: "En ligne",
      date: "10 Avril",
      company: "Studio Creatif",
    },
    // ...Autres données
  ];

  return (
    <div className="fixed top-0 w-full  shadow-md shadow-slate-900 mb-10 z-50 bg-white">
      {/* Header section */}
      <div className="flex justify-between items-center p-4">
        <img src={logo} className="w-36" alt="Logo" />

        {/* Burger Menu Icon */}
        <div
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer font-normal ${
                item.path === path && "text-blue-500 font-bold"
              }`}
              onClick={() => navigate(item.path)}>
              {item.name}
              {item.path === path && (
                <div className="w-full h-1 bg-blue-500 mt-1 rounded"></div>
              )}
            </li>
          ))}
        </ul>

        {/* Search, Messages, and Avatar */}
        <div className="hidden md:flex items-center space-x-4">
          <div
            onClick={() => setSearchSelected(!searchSelected)}
            className="text-3xl">
            <CiSearch />
          </div>
          <div className="text-3xl">
            <FiMessageSquare />
          </div>
          <div className="bg-slate-500 rounded-full h-10 w-10"></div>
        </div>
      </div>

      {/* Mobile Menu (Slide In) */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-6 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}>
        <ul className="space-y-6">
          {links.map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer font-normal ${
                item.path === path && "text-blue-500 font-bold"
              }`}
              onClick={() => {
                navigate(item.path);
                setMenuOpen(false); // Fermer le menu après navigation
              }}>
              {item.name}
              {item.path === path && (
                <div className="w-full h-1 bg-blue-500 mt-1 rounded"></div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Search Bar (if selected) */}
      {searchSelected && (
        <div className="relative p-4 md:mt-0">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            placeholder="Rechercher"
            onChange={(e) => handleSearch(data, e.target.value, "title")}
          />
          {searchResult?.length > 0 && (
            <div className="absolute bg-white w-full mt-2 rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {searchResult.map((res, index) => (
                <p key={index} className="p-2 border-b border-gray-300">
                  {res.title}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
