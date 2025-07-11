import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useGetMeQuery } from "../redux/auth/authService";
import logo from "../assets/images/logo_antares.png";

const Headers = () => {
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const userState = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem("auth"));
  const { data: userData } = useGetMeQuery();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  console.log('userData', userData);
  
  useEffect(() => {
    if (user) setLoggedIn(true);
  }, [user]);

  // Fermer le dropdown quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const logOut = () => {
    localStorage.clear();
    setVisible(false);
    setMobileMenuOpen(false);
    navigate("/auth");
  };

  const navigationLinks = [
    { href: "/", label: "Accueil" },
    { href: "/candidats", label: "Candidats" },
    { href: "/employeurs", label: "Employeurs" },
    { href: "/offres", label: "Offres" },
    // { href: "/actualites", label: "Actualités" },
    // { href: "/dao", label: "DAO" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="w-28" alt="Antares RH Logo" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* User Menu & Mobile Menu Button */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* User Profile Dropdown */}
          {loggedIn && (
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setVisible(!visible)}
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 transition-all duration-200"
                id="user-menu-button"
                aria-expanded={visible}
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={userData?.photo?.url ? 'https://api.antares-rh.net' + userData.photo.url : '/default-avatar.png'}
                  alt="Photo de profil"
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`${
                  visible ? "block" : "hidden"
                } absolute right-0 top-12 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg border border-gray-200 transition-all duration-200`}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm font-medium text-gray-900">
                    {user?.user?.username || 'Utilisateur'}
                  </span>
                  <span className="block text-sm text-gray-500 truncate">
                    {user?.user?.email || 'email@example.com'}
                  </span>
                </div>
                <ul className="py-2">
                  <li>
                    <a
                      href={`/profile/${user?.user?.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600 transition-colors duration-200"
                    >
                      Mon Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/cv/${user?.user?.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600 transition-colors duration-200"
                    >
                      Mon CV
                    </a>
                  </li>
                  <li>
                    <a
                      href="/candidatures"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600 transition-colors duration-200"
                    >
                      Mes Candidatures
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={logOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors duration-200"
                    >
                      Déconnexion
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-200"
            aria-controls="navbar-user"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            {mobileMenuOpen ? (
              <HiOutlineX className="w-5 h-5" />
            ) : (
              <HiOutlineMenu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full  md:w-auto md:hidden md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            
            {/* Auth Links for Mobile (when not logged in) */}
            {!loggedIn && (
              <li className="md:hidden">
                <a
                  href="/auth"
                  className="block py-2 px-3 text-white bg-orange-600 rounded hover:bg-orange-700 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Connexion
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Headers;