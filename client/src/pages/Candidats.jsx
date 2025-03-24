import React from "react";
import Breadcumb from "../components/Breadcumb";
import Container from "../components/Container";
import { useGetCandidatsQuery } from "../redux/candidatService";
import CvVideoCard from "./../components/CvVideoCard";

const Candidats = () => {
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

  const { data, isLoading, isSuccess, isFetching, isError } =
    useGetCandidatsQuery();

  console.log("data", data);

  return (
    <Container>
      <Breadcumb title={`Base de donnee CV`} />

      <section class="banner-bottom-wthree  py-lg-5 py-3 text-center">
        <div class="container">
          <div class="inner-sec-w3ls py-lg-4 py-md-4 py-3">
            <h3 class="tittle text-center mb-lg-5 mb-3 ">
              <span>Protail candidats – Profil et CV Vidéo </span>Découvrez les
              candidats en un coup d'œil !{" "}
            </h3>

            <div className="flex md:ml-40 bg-white w-fit rounded-lg   p-2">
              <div>
                <h6>Filtre : </h6>
              </div>
              <div className="px-2 hover:bg-orange-500 hover:text-white rounded-lg">
                <a href=""> Informaticien</a>
              </div>

              <div className="px-2 hover:bg-orange-500 hover:text-white rounded-lg">
                <h6>
                  <a href=""> Assistant direction</a>
                </h6>
              </div>
              <div className="px-2 hover:bg-orange-500 hover:text-white rounded-lg">
                <h6>
                  <a href=""> Chef de projet</a>
                </h6>
              </div>
              <div className="px-2 hover:bg-orange-500 hover:text-white rounded-lg">
                <h6>
                  <a href=""> Manager</a>
                </h6>
              </div>
            </div>
            <div class="flex flex-wrap justify-center items-center mt-5">
              {data && data?.data?.map((item) => <CvVideoCard item={item} />)}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Candidats;
