import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1409637645/fr/vectoriel/illustration-vectorielle-du-choix-du-travailleur-ou-du-personnel-concept-de-recrutement.jpg?s=612x612&w=0&k=20&c=OX8Gey8dHeAazkGYzUjomyk7fEV3xlQMk8Dr3f2bNvw=)",
      }}>
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="mt-2 items-center z-10">
        <div className="flex w-full h-ful bg-slate-200 p-2 rounded-2xl mb-10">
          <img src={logo} className="w-72 h-auto" />
        </div>

        <form className="p-14 bg-white max-w-sm mx-auto rounded-xl shadow-xl overflow-hidden p-6 space-y-10">
          <h2 className="text-4xl font-bold text-center text-indigo-600">
            Connexion
          </h2>
          <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
            <input
              type="email"
              name="email"
              placeholder=" "
              className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent"
            />
            <label
              for="email"
              className="absolute ml-5 top-0 text-lg text-gray-700 bg-white mt-2 -z-1 duration-300 origin-0">
              Email
            </label>
          </div>
          <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
            <input
              type="password"
              name="password"
              placeholder=" "
              className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent"
            />
            <label
              for="password"
              className="absolute ml-5 top-0 text-lg text-gray-700 bg-white mt-2 -z-1 duration-300 origin-0">
              Mot de passe
            </label>
          </div>
          <div className="block mt-2">
            <label for="" className="flex items-center">
              <input
                type="checkbox"
                className="ml-2 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></input>
              <span className="ml-2 text-sm text-gray-600">
                Maintenir la connexion
              </span>
            </label>
          </div>
          <div className="flex items-center flex items-center justify-end mt-4">
            <a
              className="underline text-sm text-gray-600 hover:text-gray-900"
              href="#">
              Mot de passe oublié?
            </a>
            <button
              onClick={() => navigate("/home")}
              className="px-6 py-2 ml-4 font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-indigo-700 rounded-full text-white bg-indigo-600 ">
              Accéder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
