import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bg from "../assets/images/1.png";
import logo from "../assets/images/logo_antares.png";
import { setAuth, useRegisterMutation, useUploadPhotoMutation } from "../redux/auth/authService";
import { validatePasswordComplexity } from "../utils";
import { styles } from "../config/colors";

const Register = ({ setShowLogin }) => {
  const [register] = useRegisterMutation();
  const [uploadPhoto] = useUploadPhotoMutation(); // Assuming you have a mutation for uploading photos
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [photo, setPhoto] = useState();
  const [secondPassword, setSecondPassword] = useState(null);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
    
    const validation = validatePasswordComplexity(password);
    if (!validation.isValid) {
      setPasswordError(`Critères manquants: ${validation.missingCriteria.join(", ")}`);
    } else {
      setPasswordError("");
    }
  };


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

    const formData = new FormData();


    // Convert FormData to a regular object for logging

    try {
      const rep = await register(dataToSend);
      if (rep.data) {
        localStorage.setItem("auth", JSON.stringify(rep.data));
        toast.success("Vous êtes connecté");
        dispatch(setAuth(rep.data));

        // Envoi de la photo si elle existe
        toast.info("Téléchargement de la photo en cours...");
        const formData = new FormData();
        formData.append("files", photo); // le fichier
        formData.append("ref", "plugin::users-permissions.user");
        formData.append("refId", rep.data?.user.id); // l'id du user créé
        formData.append("field", "photo"); // le nom du champ media dans le model user

        uploadPhoto(formData)
          .then((response) => {
            if (response.data) {
              toast.success("Photo téléchargée avec succès");
            } else {
              toast.error("Erreur lors du téléchargement de la photo");
            }
          })
          .catch((error) => {
            console.error("Erreur lors du téléchargement de la photo", error);
            toast.error("Erreur lors du téléchargement de la photo");
          });
        // Redirection vers la page d'accueil
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
      <div className="min-h-screen bg-gray-50 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow-lg sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="flex justify-center mb-8">
              <img src={logo} className="w-mx-auto md:w-56" alt="Antarès RH Logo" />
            </div>
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
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

                <div className="mx-auto max-w-xs">
                  <input
                    className={styles.input.base}
                    type="text"
                    placeholder="Nom d'utilisateur"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    className={`${styles.input.base} mt-4`}
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    className="block mb-2 text-sm font-semibold text-gray-700 mt-4"
                    htmlFor="photo">
                    Photo (optionnel)
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none focus:border-[#2529d8] focus:ring-2 focus:ring-[#2529d8] focus:ring-opacity-20 transition-all duration-200"
                    id="photo"
                    name="photo"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    type="file"
                    accept="image/*"
                  />

                  <input
                    className={`${styles.input.base} mt-4`}
                    type="password"
                    placeholder="Mot de passe"
                    onChange={handlePasswordChange}
                  />
                  {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
                  <input
                    className={`${styles.input.base} mt-4`}
                    type="password"
                    placeholder="Confirmer mot de passe"
                    onChange={(e) => setSecondPassword(e.target.value)}
                  />
                  <button
                    onClick={() => send()}
                    className={`${styles.button.primary} mt-5 w-full py-4 flex items-center justify-center`}>
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-2">S'inscrire</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    Vous avez un compte{' '}
                    <Link
                      onClick={() => setShowLogin(true)}
                      className="text-[#2529d8] hover:underline ml-2 font-semibold">
                      Connexion
                    </Link>
                  </p>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    J'accepte de respecter les{' '}
                    <a
                      href="#"
                      className="text-[#2529d8] hover:underline">
                      conditions d'utilisation du service
                    </a>
                    {' '}et la{' '}
                    <a
                      href="#"
                      className="text-[#2529d8] hover:underline">
                      politique de confidentialité
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center hidden lg:flex">
            <div
              className="m-1 w-full bg-cover bg-center bg-no-repeat"
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
