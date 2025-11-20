import React from "react";
import Breadcumb from "../components/Breadcumb";
import Container from "../components/Container";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { useGetCandidatsQuery } from "../redux/candidatService";
import { useGetPartenaireQuery } from "../redux/partenaire";
import CvVideoCard from "./../components/CvVideoCard";

const Candidats = () => {
  const { data, isLoading, isSuccess, isFetching, isError } =
    useGetCandidatsQuery();
  const { data: partenaireData, isLoading: partenaireIsLoading } = useGetPartenaireQuery();

  console.log("data", data);

  if (isLoading) {
    return (
      <>
        <Headers />
        <Container>
          <div className="flex justify-center items-center py-20">
            <div className="text-gray-600">Chargement...</div>
          </div>
        </Container>
        <Footer />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <Headers />
      <Container>
        <section className="py-lg-5 py-md-5 py-3 bg-white">
          <Breadcumb title={"Candidats"} />
          
          <div className="container py-lg-5 py-md-4 py-3">
            <div className="inner-sec-w3ls py-lg-5 py-3">
              <div className="text-center mb-5">
                <h3 className="tittle text-center mb-lg-4 mb-3">
                  <span className="text-[#2529d8]">Candidats</span>Base de données CV & Profils vidéo
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Découvrez les candidats en un coup d'œil ! Explorez nos profils et CVs vidéo pour trouver le talent idéal.
                </p>
              </div>

              {/* Filtres par catégorie */}
              <div className="flex flex-wrap items-center gap-2 mb-5 bg-gray-50 p-3 rounded-lg justify-center md:justify-start">
                <span className="font-semibold text-gray-700 px-2">Filtre :</span>
                <button className="px-4 py-2 bg-white hover:bg-[#2529d8] hover:text-white rounded-lg transition-colors duration-200 border border-gray-200">
                  Tous
                </button>
                <button className="px-4 py-2 bg-white hover:bg-[#2529d8] hover:text-white rounded-lg transition-colors duration-200 border border-gray-200">
                  Informaticien
                </button>
                <button className="px-4 py-2 bg-white hover:bg-[#2529d8] hover:text-white rounded-lg transition-colors duration-200 border border-gray-200">
                  Assistant direction
                </button>
                <button className="px-4 py-2 bg-white hover:bg-[#2529d8] hover:text-white rounded-lg transition-colors duration-200 border border-gray-200">
                  Chef de projet
                </button>
                <button className="px-4 py-2 bg-white hover:bg-[#2529d8] hover:text-white rounded-lg transition-colors duration-200 border border-gray-200">
                  Manager
                </button>
              </div>

              {/* Liste des candidats */}
              <div className="row mt-4">
                <div className="col-lg-12">
                  {data?.data && data.data.length > 0 ? (
                    <div className="row">
                      {data.data.map((item, index) => (
                        <CvVideoCard key={index} item={item} />
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-lg p-10 text-center">
                      <p className="text-gray-500">Aucun candidat disponible pour le moment.</p>
                    </div>
                  )}
                </div>
                
                {/* Partenaires (optionnel) */}
                {partenaireData?.data && partenaireData.data.length > 0 && (
                  <div className="col-lg-12 mt-5">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-lg text-gray-800 mb-4 text-center">Nos partenaires</h4>
                      <div className="flex flex-wrap justify-center gap-3">
                        {partenaireData.data.map((item, index) => (
                          <img 
                            key={index}
                            src={'https://api.antares-rh.net' + item?.attributes?.image?.data?.attributes?.url} 
                            alt="Partenaire" 
                            className="h-16 object-contain bg-white p-2 rounded shadow-sm" 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Candidats;
