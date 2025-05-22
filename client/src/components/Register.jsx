import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bg from "../assets/images/1.png";
import logo from "../assets/images/logo_antares.png";
import { setAuth, useRegisterMutation } from "../redux/auth/authService";

const Register = ({ setShowLogin }) => {
  const [register] = useRegisterMutation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const [secondPassword, setSecondPassword] = useState(null);
  const navigate = useNavigate();
  const send = async () => {
    if (!email) return toast.error("Le champ email doit être rempli");
    if (!username)
      return toast.error("Le champ nom d'utilisateur doit être rempli");
    if (!password) return toast.error("Le champ mot de passe doit être rempli");
    if (!secondPassword)
      return toast.error(
        "Le champ confirmation de mot de passe doit être rempli"
      );
    if (password !== secondPassword)
      return toast.error("Les mots de passe ne correspondent pas");

    const dataToSend = { email, password, username };
    console.log("Data to send", dataToSend);

    try {
      const rep = await register(dataToSend);
      if (rep.data) {
        localStorage.setItem("auth", JSON.stringify(rep.data));
        toast.success("Vous êtes connecté");
        dispatch(setAuth(rep.data));
        navigate("/");
      } else if (rep.error) {
        toast.error("Email ou mot de passe incorrect");
      }
    } catch (error) {
      console.error("Erreur", error);
    }
  };
  return (
    <>
      <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="flex justify-center ">
              <img src={logo} class="w-mx-auto md:w-56" />
            </div>
            <div class="mt-12 flex flex-col items-center">
              <div class="w-full flex-1 mt-8">
                {/* <div class="flex flex-col items-center">
                  <button class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div class="bg-white p-2 rounded-full">
                      <svg class="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span class="ml-4">Se connecter avec Google</span>
                  </button>
                </div>

                <div class="my-12 border-b text-center">
                  <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Ou se connecter grâve à votre E-mail
                  </div>
                </div> */}

                <div class="mx-auto max-w-xs">
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Nom d'utilisateur"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                    type="password"
                    placeholder="Confirmer mot de passe"
                    onChange={(e) => setSecondPassword(e.target.value)}
                  />
                  <button
                    onClick={() => send()}
                    class="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      class="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span class="ml-">S'inscrire</span>
                  </button>
                  <p class="mt-6 text-xs text-gray-600 text-center">
                    Vous avez un compte
                    <Link
                      onClick={() => setShowLogin(true)}
                      class="border-b border-gray-500 ml-3 border-dotted">
                      Connexion
                    </Link>
                  </p>
                  <p class="mt-6 text-xs text-gray-600 text-center">
                    J’accepte de respecter les conditions d'utilisation de
                    l'application
                    <a
                      href="#"
                      class="border-b m-1 border-gray-500 border-dotted">
                      Conditions d'utilisation du service
                    </a>
                    et la
                    <a
                      href="#"
                      class="border-b ml-1 border-gray-500 border-dotted">
                      politique de confidentialité
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1 text-center hidden lg:flex">
            <div
              class="m-1  w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${bg})`,
              }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
