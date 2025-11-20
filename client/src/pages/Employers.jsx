import React from "react";
import Container from "../components/Container";
import EmployerCard from "../components/EmployerCard";
import Breadcumb from "../components/Breadcumb";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { useGetCompaniesQuery } from "../redux/companyService";

const Employers = () => {
  const { data: companiesData, error, isLoading } = useGetCompaniesQuery();

  if (isLoading) {
    return (
      <>
        
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
          <Breadcumb title={"Employeurs"} />
          
          <div className="container py-lg-5 py-md-4 py-3">
            <div className="inner-sec-w3ls py-lg-5 py-3">
              <div className="text-center mb-5">
                <h3 className="tittle text-center mb-lg-4 mb-3">
                  <span className="text-[#2529d8]">Employeurs</span>Nos entreprises partenaires
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Découvrez les entreprises qui nous font confiance pour leurs besoins en ressources humaines.
                </p>
              </div>
              
              {companiesData?.data && companiesData.data.length > 0 ? (
                <div className="row mt-5">
                  {companiesData.data.map((item, index) => (
                    <div key={index} className="col-lg-6 col-md-12 mb-4">
                      <EmployerCard item1={item.attributes} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">Aucun employeur disponible pour le moment.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </Container>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Employers;
