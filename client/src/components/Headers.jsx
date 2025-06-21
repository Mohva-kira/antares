import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo_antares.png";
import { useGetMeQuery } from "../redux/auth/authService";

const Headers = () => {
  const [visible, setVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const userState = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem("auth"));
  const { data: userData } = useGetMeQuery();

  console.log('userData', userData);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) setLoggedIn(true);
  }, [user]);

  const logOut = () => {
    localStorage.clear();
    navigate("/auth");
  };

  return (
    <nav className=" border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="w-28" alt="Flowbite Logo" />
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={() => setVisible(!visible)}
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img
              className="w-20 h-20 rounded-full object-cover"
              src={'https://api.antares-rh.net'+ userData?.photo?.url }
              alt="user photo "
            />
          </button>

          <div
            className={`z-50 ${
              visible ? "block" : "hidden"
            } absolute top-32 right-60 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
            id="user-dropdown">
            {loggedIn ? (
              <>
                <div className="px-4 py-3">
                  <span className="block text-sm dropdown-item dropdown-item">
                    {user?.user?.username}
                  </span>
                  <span className="block text-sm  truncate dropdown-item">
                    {user?.user?.email}
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href={`/profile/${user?.user?.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item dark:hover:text-orange-400">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/cv/${user?.user?.id}`}
                      className="block px-4 py-2 text-sm dropdown-item hover:text-orange-400  dark:hover:text-orange-400">
                      CV
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/candidatures`}
                      className="block px-4 py-2 text-sm dropdown-item hover:text-orange-400  dark:hover:text-orange-400">
                      Candidatures
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => logOut()}
                      className="block cursor-pointer px-4 py-2 text-sm dropdown-item hover:text-orange-400  dark:hover:text-orange-400">
                      Deconnexion
                    </a>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <div className="px-4 py-3">
                  <a
                    href="/auth"
                    className="block text-sm dropdown-item dropdown-item">
                    Connexion
                  </a>
                </div>
              </>
            )}
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex  md:w-auto md:order-1"
          id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 bg-white/65 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            <li>
              <a
                href="/"
                className="block py-2 px-3 nav-item bg-blue-700 rounded md:bg-transparent "
                aria-current="page">
                Accueil
              </a>
            </li>
            <li>
              <a
                href="/how"
                className="block py-2 px-3 nav-item rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700md:dark:hover:bg-transparent dark:border-gray-700">
                Comment ça marche
              </a>
            </li>

            <li>
              <a
                href="/offres"
                className="block py-2 px-3 nav-item rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700md:dark:hover:bg-transparent dark:border-gray-700">
                Offres d'emploi
              </a>
            </li>
            <li>
              <a
                href="/appels-offre"
                className="block py-2 px-3 nav-item rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700md:dark:hover:bg-transparent dark:border-gray-700">
                Appel d'offre
              </a>
            </li>
            <li>
              <a
                href="/candidats"
                className="block py-2 px-3 nav-item rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700md:dark:hover:bg-transparent dark:border-gray-700">
                Base de cv
              </a>
            </li>
            <li>
              <a
                href="/employeurs"
                className="block py-2 px-3 nav-item rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700md:dark:hover:bg-transparent dark:border-gray-700">
                Employeurs
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-3 nav-item rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700md:dark:hover:bg-transparent dark:border-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Headers;
