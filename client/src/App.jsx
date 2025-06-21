import { useState } from "react";
import {
  FaAccusoft,
  FaBullhorn,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa6";
import { IoIosPersonAdd } from "react-icons/io";
import "./App.css";
import img1 from "./assets/images/1.png";
import img2 from "./assets/images/2.png";
import img3 from "./assets/images/3.jpg";
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
import ProcessCard from "./components/ProcessCard";
import Search from "./components/Search";

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
  const [count, setCount] = useState(0);
  const categories = [
    {
      title: "Multimedia",
      nb: "15",
      img: p1,
      icon: <FaBullhorn />,
    },
    {
      title: "Education",
      nb: "22",
      img: p2,
      icon: <FaGraduationCap />,
    },
    {
      title: "Comptabilité",
      nb: "16",
      img: p3,
      icon: <FaAccusoft />,
    },

    {
      title: "Ressources Humaine",
      nb: "4",
      img: p4,
      icon: <FaUsers />,
    },
    {
      title: "Ingenieur",
      nb: "8",
      img: p4,
      icon: <FaUsers />,
    },
    {
      title: "Construction",
      nb: "18",
      img: p4,
      icon: <FaUsers />,
    },
  ];

  const jobData = [
    {
      name: "Sotram",
      title: "Service de transport public et privé",
      adresse: "Avenue de la Liberté, Hamdallaye ACI 2000",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Prestataire de services",
    },
    {
      name: "BamakoTech",
      title: "Développement de logiciels et solutions digitales",
      adresse: "Rue 314, Baco-Djicoroni ACI",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Contrat de prestation",
    },
    {
      name: "AgroMali",
      title: "Production et exportation de produits agricoles",
      adresse: "Boulevard du Peuple, Quinzambougou",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Fournisseur",
    },
    {
      name: "Kéné Group",
      title: "Conseil et formation en entrepreneuriat",
      adresse: "Avenue de l'Indépendance, Badalabougou",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Partenariat",
    },
    {
      name: "Africafé Mali",
      title: "Production et distribution de café et produits dérivés",
      adresse: "Rue 465, Lafiabougou",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Contrat de distribution",
    },
    {
      name: "Tiguida Design",
      title: "Agence de design et communication visuelle",
      adresse: "Quartier Hippodrome, Rue 251",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Contrat de service",
    },
    {
      name: "BKO Logistics",
      title: "Transport et logistique internationale",
      adresse: "Rue Mohamed V, Sogoniko",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Contrat de sous-traitance",
    },
    {
      name: "Toumaï Énergie",
      title: "Solutions énergétiques renouvelables",
      adresse: "Rue 18, Hamdallaye ACI",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Contrat de fourniture",
    },
    {
      name: "Saveurs du Mali",
      title: "Production et distribution de produits alimentaires locaux",
      adresse: "Quartier Djikoroni Para",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Contrat de vente",
    },
    {
      name: "MaliMédic",
      title: "Fourniture de matériel médical et pharmaceutique",
      adresse: "Boulevard de l’Afrique, Médina Coura",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Contrat de distribution",
    },
  ];

  const cvData = [
    {
      name: "Fatoumata Diarra",
      img: "https://example.com/images/fatoumata_diarra.jpg",
      profil:
        "Spécialiste en marketing digital avec 5 ans d’expérience dans la gestion de campagnes sur les réseaux sociaux et l’optimisation SEO.",
    },
    {
      name: "Ibrahim Coulibaly",
      img: "https://example.com/images/ibrahim_coulibaly.jpg",
      profil:
        "Développeur full-stack maîtrisant JavaScript, React, et Node.js, avec une expérience en développement de solutions SaaS.",
    },
    {
      name: "Aminata Keita",
      img: "https://example.com/images/aminata_keita.jpg",
      profil:
        "Gestionnaire de projet certifiée PMP, spécialisée dans la transformation digitale et la gestion d'équipes multidisciplinaires.",
    },
    {
      name: "Mohamed Sangaré",
      img: "https://example.com/images/mohamed_sangare.jpg",
      profil:
        "Analyste financier avec une expertise dans l’analyse de risques et la gestion de portefeuilles d’investissement en Afrique de l’Ouest.",
    },
    {
      name: "Oumou Traoré",
      img: "https://example.com/images/oumou_traore.jpg",
      profil:
        "Ingénieure en génie civil spécialisée dans les infrastructures routières et les projets de construction durable.",
    },
    {
      name: "Seydou Konaté",
      img: "https://example.com/images/seydou_konate.jpg",
      profil:
        "Consultant en cybersécurité avec des compétences avancées en gestion des risques, tests d'intrusion, et sécurité des réseaux.",
    },
    {
      name: "Kadiatou Sidibé",
      img: "https://example.com/images/kadiatou_sidibe.jpg",
      profil:
        "Graphiste créative avec une expertise en design d’identité visuelle, illustration, et création de contenus pour les réseaux sociaux.",
    },
    {
      name: "Mamadou Diakité",
      img: "https://example.com/images/mamadou_diakite.jpg",
      profil:
        "Responsable logistique avec 8 ans d’expérience dans la gestion de la chaîne d’approvisionnement et l’optimisation des processus.",
    },
    {
      name: "Awa Cissé",
      img: "https://example.com/images/awa_cisse.jpg",
      profil:
        "Data Scientist spécialisée en apprentissage automatique et analyse de données, avec une solide expérience en Python et R.",
    },
    {
      name: "Yacouba Dembélé",
      img: "https://example.com/images/yacouba_dembele.jpg",
      profil:
        "Ingénieur en énergie renouvelable, expert en solutions solaires et éoliennes pour des projets d’électrification rurale.",
    },
  ];


  const {data: partenaireData, isLoading: partenaireIsLoading} = useGetPartenaireQuery();
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

        <div className="demo-inner-content relative">
          <Headers />

          <Search />
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
          <div className="inner-sec-w3ls py-lg-5  py-3">
            <h3 className="tittle text-center mb-lg-4 mb-3">
              <span> Info</span>Derniers postes à pouvoir
            </h3>

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
                        {partenaireData?.data?.map(item =>  (
                          <img src={'https://api.antares-rh.net' + item?.attributes?.image?.data?.attributes?.url} alt=" " className="img-fluid h-44 object-cover mb-2 shadow-md" />
                        ))
                        }
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
                    className="flex items-center justify-center space-x-4 text-white font-bold bg-blue-500 p-3 rounded-lg w-1/3"
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

      <section className="banner-bottom-wthree py-lg-5 py-md-5 py-3">
        <div className="container">
          <ProcessCard />
        </div>
      </section>

      <section className="banner-bottom-wthree bg-light py-lg-5 py-3 text-center">
        <div className="container">
          <div className="inner-sec-w3ls py-lg-4 py-md-4 py-3">
            <h3 className="tittle text-center mb-lg-5 mb-3">
              <span>Vous êtes une entreprise</span>Quelques CVs vidéo
            </h3>
            <div className="row mt-5">
              {data?.data?.map((item, index) => (
                <CvVideoCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="banner-bottom-wthree py-lg-5 py-md-5 py-3">
        <div className="container">
          <div className="inner-sec-w3ls py-lg-5  py-3">
            <h3 className="tittle text-center mb-lg-5 mb-3">
              <span> Info</span> Astuces pour ta carrière
            </h3>
            <div className="row mt-5">
              <div className="card-deck">
                {actualiteData?.data.map((item) => (
                  <ArticleCard item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}

export default App;
