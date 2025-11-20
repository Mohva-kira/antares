import { useState } from "react";
import {
  FaAccusoft,
  FaBullhorn,
  FaGraduationCap,
  FaUsers,
  FaFileLines,
  FaUserCheck,
  FaBriefcase,
  FaLightbulb,
} from "react-icons/fa6";
import {
  FaUserTie,
  FaComments,
  FaCheckCircle,
} from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import "./App.css";
import img1 from "./assets/images/1.png";
import img2 from "./assets/images/2.png";
import img3 from "./assets/images/3.png";
import img4 from "./assets/images/4.png";
import job2 from "./assets/images/job-2.png";
import p1 from "./assets/images/p1.jpg";
import p2 from "./assets/images/p2.jpg";
import p3 from "./assets/images/p3.jpg";
import p4 from "./assets/images/p4.jpg";
import ArticleCard from "./components/ArticleCard";
import CategoryCard from "./components/CategoryCard";
import Clients from "./components/Clients";
import CvVideoCard from "./components/CvVideoCard";
import Footer from "./components/Footer";
import Headers from "./components/Headers";
import JobCard from "./components/JobCard";
import Search from "./components/Search";
import WhatsAppButton from "./components/WhatsAppButton";

import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useGetCandidatsQuery } from "./redux/candidatService";
import { useGetOffersQuery } from "./redux/offerService";
import { useGetActualitesQuery } from "./redux/actualite";
import { useGetPartenaireQuery } from "./redux/partenaire";

function App() {
  const { data: partenaireData, isLoading: partenaireIsLoading } =
    useGetPartenaireQuery();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("auth")) || null;
  const { data, isLoading, isSuccess, isFetching, isError } =
    useGetCandidatsQuery();
  const { data: jobs, isLoading: isLoadingJobs } = useGetOffersQuery();

  const {
    data: actualiteData,
    isLoading: actualiteIsLoading,
    isFetching: actualiteIsFetching,
  } = useGetActualitesQuery();

  console.log("actualiteData", actualiteData);
  console.log("partenaireData", partenaireData);

  return (
    <>
      <div
        id="demo-1"
        className="w-full h-full absolute "
        data-zs-src={`["../src/assets/images/1.jpg", "${img1}","${img1}", "${img1}"]`}
        data-zs-overlay="dots">
        <div className="w-full h-full absolute ">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full h-full">
            <SwiperSlide>
              {" "}
              <img src={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="demo-inner-content w-full h-full justify-center items-center relative">
          <Headers />
          <div className="w-full h-full flex flex-col mt-4 justify-center items-center">
            <div className="w-[720px] h-[320px] bg-black bg-opacity-20 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-4xl font-bold mb-4 text-white">
                Antarès RH
              </h1>
              <p className="text-lg mb-4 text-white">
                Antarès RH connecte talents et organisations en Afrique de l'Ouest depuis près de 20 ans.
              </p>
              <p className="text-base mb-4 text-white">
                Recrutement, conseil et structuration RH : nous aidons entreprises locales et multinationales à construire des équipes solides et des pratiques fiables.
              </p>
            </div>
          </div>

          {/* <Search /> */}
          <div className="w-full    justify-center space-x-8 items-center flex mt-10">
            <span
              onClick={() => navigate("/offres")}
              className="px-4 cursor-pointer py-1.5 text-white bg-[#2529d8] rounded-lg hover:bg-[#1d20b0] transition-colors duration-200">
              Voir toutes les offres
            </span>
            <span
              onClick={() => navigate("/services")}
              className="px-4 cursor-pointer py-1.5 text-white bg-[#2529d8] rounded-lg hover:bg-[#1d20b0] transition-colors duration-200">
              Découvrir nos services
            </span>
          </div>
        </div>
      </div>
      {/* <section className="banner-bottom-wthree py-lg-5 py-md-5 py-3">
        <div className="container">
          <div className="inner-sec-w3ls py-lg-5  py-3">
            <h3 className="tittle text-center mb-lg-4 mb-3">
              <span>Notre Mission</span>Categories poulaire
            </h3>
            <div className="row populor_category_grids mt-5 space-y-4 flex items-center justify-center">
              {categories.map((item, index) => (
                <CategoryCard
                  title={item.title}
                  nb={item.nb}
                  img={item.img}
                  index={index}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="banner-bottom-wthree pb-lg-5 pb-md-4 pb-3">
        <div className="container">
          <div className="w-full md:w-max-4xl py-lg-5  py-3">
            <div className="flex justify-between items-center w-full h-auto max-w-3xl mb-4 ">
              <h3 className="tittle text-center mb-lg-4 mb-3">
                <span> Info</span>Derniers postes à pouvoir
              </h3>
              <span className="flex items-center bg-[#2529d8] h-auto rounded-2xl px-2 text-white font-semibold cursor-pointer hover:bg-[#1d20b0] transition-colors duration-200" onClick={() => navigate('/offres')}>
                Voir toutes les offres
              </span>
            </div>

            <div className="tabs mt-5">
              <ul className="nav nav-pills my-4" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true">
                    En vedette
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false">
                    Postes Recent
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab">
                  <div className="menu-grids mt-4">
                    <div className="row t-in">
                      <div className="col-lg-8 text-info-sec">
                        {jobs?.data.map((item) => (
                          <JobCard item={item} />
                        ))}
                      </div>
                      <div className="col-lg-4 text-info-sec">
                        {partenaireData?.data?.map((item) => (
                          <img
                            src={
                              "https://api.antares-rh.net" +
                              item?.attributes?.image?.data?.attributes?.url
                            }
                            alt=" "
                            className="img-fluid h-44 object-cover mb-2 shadow-md"
                          />
                        ))}
                        {/* <img src={job2} alt=" " className="img-fluid" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!user && (
        <section class="banner-bottom-wthree mid py-lg-5 py-3">
          <div class="container">
            <div class="inner-sec-w3ls py-lg-5   py-md-3 py-3">
              <div class="mid-info text-center pt-3">
                <h3 class="tittle text-center cen mb-lg-5 mb-3">
                  <span>Vers la reussite</span>Faites la difference avec votre
                  cv en ligne!
                </h3>
                <p></p>
                <div class="flex justify-center space-x-4 mt-5 ">
                  <a
                    className="flex items-center justify-center space-x-4 text-white font-bold bg-[#2529d8] p-3 rounded-lg w-1/3 hover:bg-[#1d20b0] transition-colors duration-200"
                    onClick={() => navigate("/auth/register")}
                    data-toggle="modal"
                    data-target="#exampleModalCenter2">
                    <IoIosPersonAdd size={25} className="mr-2" /> Créer un
                    compte
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section Domaines d'expertise */}
      <section className="banner-bottom-wthree py-lg-5 py-md-5 py-3 bg-gray-50">
        <div className="container">
          <div className="inner-sec-w3ls py-lg-5 py-3">
            <h3 className="tittle text-center mb-lg-5 mb-3">
              <span className="text-red-600">Astuces</span>Domaines d'expertise
            </h3>
            
            <div className="row mt-5">
              {/* Domaine 1: Recrutement */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm h-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-3">
                    <img 
                      src={p1} 
                      alt="Recrutement" 
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[#2529d8]"
                    />
                  </div>
                  <h4 className="mb-3 font-bold text-lg text-gray-800">Recrutement</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Nous identifions et sélectionnons les meilleurs talents pour répondre à vos besoins spécifiques.
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <strong className="text-[#2529d8] text-sm">Formation</strong>
                    <p className="text-xs text-gray-500 mt-1">
                      Développement des compétences de votre équipe
                    </p>
                  </div>
                </div>
              </div>

              {/* Domaine 2: Conseil */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm h-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-3">
                    <img 
                      src={p2} 
                      alt="Conseil" 
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[#2529d8]"
                    />
                  </div>
                  <h4 className="mb-3 font-bold text-lg text-gray-800">Conseil</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Accompagnement stratégique pour optimiser vos pratiques de ressources humaines.
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <strong className="text-[#2529d8] text-sm">Screening</strong>
                    <p className="text-xs text-gray-500 mt-1">
                      Évaluation et présélection des candidats
                    </p>
                  </div>
                </div>
              </div>

              {/* Domaine 3: Entretien */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm h-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-3">
                    <img 
                      src={p3} 
                      alt="Entretien" 
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[#2529d8]"
                    />
                  </div>
                  <h4 className="mb-3 font-bold text-lg text-gray-800">Entretien avec les candidats</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Organisation et conduite d'entretiens professionnels pour identifier le meilleur profil.
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <strong className="text-[#2529d8] text-sm">Sélection</strong>
                    <p className="text-xs text-gray-500 mt-1">
                      Choix final du candidat idéal pour votre poste
                    </p>
                  </div>
                </div>
              </div>

              {/* Domaine 4: Évaluation */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm h-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-3">
                    <img 
                      src={p4} 
                      alt="Évaluation" 
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[#2529d8]"
                    />
                  </div>
                  <h4 className="mb-3 font-bold text-lg text-gray-800">Évaluation de l'Employé</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Suivi et évaluation des performances pour garantir la réussite de l'intégration.
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <strong className="text-[#2529d8] text-sm">Suivi</strong>
                    <p className="text-xs text-gray-500 mt-1">
                      Accompagnement post-recrutement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Texte descriptif central */}
            <div className="mt-5 text-center">
              <div className="bg-white p-5 rounded-lg shadow-md inline-block max-w-2xl">
                <div className="mb-4">
                  <img 
                    src={p1} 
                    alt="Domaines d'expertise" 
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#2529d8]"
                  />
                </div>
                <h4 className="font-bold text-xl text-gray-800 mb-3">Domaines d'expertise</h4>
                <p className="text-gray-600 leading-relaxed">
                  Antarès RH maîtrise l'ensemble du processus de recrutement et de gestion des ressources humaines. 
                  De l'identification des talents à l'évaluation des performances, nous vous accompagnons à chaque étape 
                  pour garantir le succès de vos recrutements et l'optimisation de vos équipes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CVs Vidéo */}
      <section className="banner-bottom-wthree py-lg-5 py-md-5 py-3 bg-white">
        <div className="container">
          <div className="inner-sec-w3ls py-lg-5 py-md-4 py-3">
            <div className="text-center mb-5">
              <h3 className="tittle text-center mb-lg-4 mb-3">
                <span className="text-[#2529d8]">CVs Vidéo</span>Découvrez nos talents
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explorez les profils vidéo de nos candidats et découvrez leurs compétences de manière dynamique et engageante.
              </p>
            </div>
            
            {data?.data && data.data.length > 0 ? (
              <div className="row mt-5 justify-content-center">
                {data.data.map((item, index) => (
                  <CvVideoCard key={index} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <p className="text-gray-500">Aucun CV vidéo disponible pour le moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section Astuces pour ta carrière */}
      <section className="banner-bottom-wthree py-lg-5 py-md-5 py-3 bg-light">
        <div className="container">
          <div className="inner-sec-w3ls py-lg-5 py-3">
            <h3 className="tittle text-center mb-lg-5 mb-3">
              <span className="text-red-600">Astuces</span>Astuces pour ta carrière
            </h3>
            
            {/* Astuces principales */}
            <div className="row mt-5 mb-5">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="bg-white p-5 rounded-lg shadow-md h-100 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#2529d8]">
                  <div className="mb-4 flex items-center">
                    <div className="bg-[#2529d8] text-white p-3 rounded-full mr-3">
                      <FaFileLines className="text-2xl" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-800">CV performant</h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    <strong>Conseil n°1 :</strong> Soignez votre présentation. Un CV clair, structuré et sans fautes est essentiel.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Mettez en avant vos compétences clés</li>
                    <li>Adaptez votre CV à chaque offre</li>
                    <li>Maximum 2 pages, format PDF</li>
                    <li>Photo professionnelle si requise</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="bg-white p-5 rounded-lg shadow-md h-100 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#2529d8]">
                  <div className="mb-4 flex items-center">
                    <div className="bg-[#2529d8] text-white p-3 rounded-full mr-3">
                      <FaUserCheck className="text-2xl" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-800">Préparation entretien</h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    <strong>Conseil n°2 :</strong> Une bonne préparation fait la différence lors d'un entretien d'embauche.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Renseignez-vous sur l'entreprise</li>
                    <li>Préparez des questions pertinentes</li>
                    <li>Anticipez les questions courantes</li>
                    <li>Arrivez 10 minutes à l'avance</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="bg-white p-5 rounded-lg shadow-md h-100 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#2529d8]">
                  <div className="mb-4 flex items-center">
                    <div className="bg-[#2529d8] text-white p-3 rounded-full mr-3">
                      <FaBriefcase className="text-2xl" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-800">Développement carrière</h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    <strong>Conseil n°3 :</strong> Investissez dans votre développement professionnel pour progresser.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Formez-vous régulièrement</li>
                    <li>Construisez votre réseau professionnel</li>
                    <li>Définissez vos objectifs de carrière</li>
                    <li>Soyez proactif dans vos missions</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="bg-white p-5 rounded-lg shadow-md h-100 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#2529d8]">
                  <div className="mb-4 flex items-center">
                    <div className="bg-[#2529d8] text-white p-3 rounded-full mr-3">
                      <FaLightbulb className="text-2xl" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-800">Profil attractif</h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    <strong>Conseil n°4 :</strong> Créez un profil en ligne professionnel qui attire les recruteurs.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Complétez votre profil LinkedIn</li>
                    <li>Mettez à jour vos compétences</li>
                    <li>Partagez vos réalisations</li>
                    <li>Demandez des recommandations</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="bg-white p-5 rounded-lg shadow-md h-100 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#2529d8]">
                  <div className="mb-4 flex items-center">
                    <div className="bg-[#2529d8] text-white p-3 rounded-full mr-3">
                      <FaComments className="text-2xl" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-800">Communication efficace</h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    <strong>Conseil n°5 :</strong> Une bonne communication est essentielle en entreprise.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Soyez clair et concis</li>
                    <li>Écoutez activement</li>
                    <li>Adaptez votre langage au contexte</li>
                    <li>Maîtrisez la communication écrite</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="bg-white p-5 rounded-lg shadow-md h-100 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#2529d8]">
                  <div className="mb-4 flex items-center">
                    <div className="bg-[#2529d8] text-white p-3 rounded-full mr-3">
                      <FaCheckCircle className="text-2xl" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-800">Suivi post-candidature</h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    <strong>Conseil n°6 :</strong> Suivez vos candidatures de manière professionnelle.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Relancez après 1 à 2 semaines</li>
                    <li>Restez poli et professionnel</li>
                    <li>Acceptez les refus avec courtoisie</li>
                    <li>Demandez des feedbacks constructifs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Actualités récentes */}
            {actualiteData?.data && actualiteData.data.length > 0 && (
              <div className="mt-5">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-bold text-gray-800">Actualités récentes</h4>
                  <button
                    onClick={() => navigate('/ressources')}
                    className="text-[#2529d8] hover:underline font-semibold"
                  >
                    Voir toutes les ressources →
                  </button>
                </div>
                <div className="row mt-3">
                  <div className="card-deck">
                    {actualiteData.data.slice(0, 3).map((item, index) => (
                      <ArticleCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
