import React from "react";
import job2 from "../assets/images/job-2.png";
import Breadcumb from "../components/Breadcumb";
import Container from "../components/Container";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import JobCard from "../components/JobCard";
import { useGetOffersQuery } from "../redux/offerService";
import { useGetPartenaireQuery } from "../redux/partenaire";

const Offers = () => {
  const jobData = [
    {
      name: "Sotram",
      title: "Service de transport public et privé",
      adresse: "Avenue de la Liberté, Hamdallaye ACI 2000",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Prestataire de services",
      category: "comptabilite",
      endDate: new Date(),
    },
    {
      name: "BamaTrans",
      title: "Transport de marchandises",
      adresse: "Route de Koulikoro, Quartier du Fleuve",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Prestataire de services",
      category: "logistique",
      endDate: new Date(),
    },
    {
      name: "Africom",
      title: "Télécommunications et réseaux",
      adresse: "Rue de la Paix, Badalabougou Est",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Contrat à durée indéterminée",
      category: "telecommunications",
      endDate: new Date(),
    },
    {
      name: "Malitech",
      title: "Solutions informatiques et réseaux",
      adresse: "Avenue Cheick Zayed, ACI 2000",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Contrat à durée déterminée",
      category: "informatique",
      endDate: new Date(),
    },
    {
      name: "Agro Mali",
      title: "Agriculture et agro-industrie",
      adresse: "Route de Kati, Sogoniko",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Prestataire de services",
      category: "agriculture",
      endDate: new Date(),
    },
    {
      name: "Energie Plus",
      title: "Production et distribution d'énergie",
      adresse: "Boulevard de l'Indépendance, Magnambougou",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Contrat de sous-traitance",
      category: "energie",
      endDate: new Date(),
    },
    {
      name: "Bamako Finance",
      title: "Services financiers et bancaires",
      adresse: "Rue de l'Hôtel de Ville, Badalabougou",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Contrat à durée indéterminée",
      category: "finance",
      endDate: new Date(),
    },
    {
      name: "Mali Santé",
      title: "Services de santé et de bien-être",
      adresse: "Quartier du Fleuve, Médina Coura",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Prestataire de services",
      category: "sante",
      endDate: new Date(),
    },
    {
      name: "EduTech Mali",
      title: "Technologies pour l'éducation",
      adresse: "Avenue Al Qoods, Kalabancoura",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Contrat à durée déterminée",
      category: "education",
      endDate: new Date(),
    },
    {
      name: "Mali Constructions",
      title: "Bâtiment et travaux publics",
      adresse: "Rue 325, Sogoniko",
      ville: "Bamako",
      pays: "Mali",
      contratType: "Prestataire de services",
      category: "construction",
      endDate: new Date(),
    },
  ];

  const { data, isLoading, error } = useGetOffersQuery();
const {data: partenaireData, isLoading: partenaireIsLoading} = useGetPartenaireQuery();
  console.log("les offres", data);

  if (isLoading) {
    return (
      <>
        {/* <Headers /> */}
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
    
    <Container>
        <section className="py-lg-5 py-md-5 py-3 bg-white">
      <Breadcumb title="Offres d'emploi" />
          
          <div className="container py-lg-5 py-md-4 py-3">
            <div className="inner-sec-w3ls py-lg-5 py-3">
              <div className="text-center mb-5">
                <h3 className="tittle text-center mb-lg-4 mb-3">
                  <span className="text-[#2529d8]">Offres d'emploi</span>Tous les postes à pouvoir
            </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Explorez toutes nos offres d'emploi et trouvez l'opportunité qui correspond à votre profil.
                </p>
              </div>

              {/* Filtres par catégorie */}
              <div className="flex flex-wrap items-center gap-2 mb-5 bg-gray-50 p-3 rounded-lg">
                <span className="font-semibold text-gray-700 px-2">Catégorie :</span>
                <button className="px-4 py-2 bg-white hover:bg-[#2529d8] hover:text-white rounded-lg transition-colors duration-200 border border-gray-200">
                  Tous
                </button>
                <button className="px-4 py-2 bg-white hover:bg-[#2529d8] hover:text-white rounded-lg transition-colors duration-200 border border-gray-200">
                  Manager
                </button>
                <button className="px-4 py-2 bg-white hover:bg-[#2529d8] hover:text-white rounded-lg transition-colors duration-200 border border-gray-200">
                  Comptabilité
                </button>
                <button className="px-4 py-2 bg-white hover:bg-[#2529d8] hover:text-white rounded-lg transition-colors duration-200 border border-gray-200">
                  Informatique
                </button>
                <button className="px-4 py-2 bg-white hover:bg-[#2529d8] hover:text-white rounded-lg transition-colors duration-200 border border-gray-200">
                  Secrétariat
                </button>
              </div>

              {/* Liste des offres */}
              <div className="row mt-4">
                <div className="col-lg-8">
                  {data?.data && data.data.length > 0 ? (
                    <div className="space-y-4">
                      {data.data.map((item, index) => (
                        <JobCard key={index} item={item} />
                        ))}
                      </div>
                  ) : (
                    <div className="bg-gray-50 rounded-lg p-10 text-center">
                      <p className="text-gray-500">Aucune offre d'emploi disponible pour le moment.</p>
                      </div>
                  )}
                    </div>
                
                {/* Partenaires */}
                <div className="col-lg-4">
                  {partenaireData?.data && partenaireData.data.length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-4 sticky top-24">
                      <h4 className="font-bold text-lg text-gray-800 mb-4">Nos partenaires</h4>
                      <div className="space-y-3">
                        {partenaireData.data.map((item, index) => (
                          <img 
                            key={index}
                            src={'https://api.antares-rh.net' + item?.attributes?.image?.data?.attributes?.url} 
                            alt="Partenaire" 
                            className="w-full h-24 object-contain bg-white p-2 rounded shadow-sm" 
                          />
                        ))}
                  </div>
                </div>
                  )}
              </div>
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

export default Offers;
