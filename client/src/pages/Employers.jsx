import React from "react";
import Container from "../components/Container";
import EmployerCard from "../components/EmployerCard";
import Breadcumb from "../components/Breadcumb";
import { useGetCompaniesQuery } from "../redux/companyService";

const Employers = () => {
  const data = [
    {
      item1: {
        id: 1,
        name: "Edm",
        description: "Fournisseur principal d'énergie",
        logo: "https://apua-asea.org/wp-content/uploads/2023/01/edm-sa.jpg",
      },
      item2: {
        id: 2,
        name: "Azalaï Hotels",
        description: "Gestion des infrastructures urbaines à Bamako",
        logo: "https://bamako.ml/wp-content/uploads/2018/01/logobko.png",
      },
    },

    {
      item1: {
        id: 3,
        name: "Orange Mali",
        description: "Opérateur de télécommunications en Mali",
        logo: "https://pbs.twimg.com/profile_images/1458758047132798980/RtLX1cYg_400x400.jpg",
      },
      item2: {
        id: 4,
        name: "OK Clean",
        description: "Transport public et logistique au Mali",
        logo: "https://entreprise.pole-emploi.fr/static/img/minisite/85e613e8-f936-47c7-98cc-6780b77a8d2c.png",
      },
    },
    {
      item1: {
        id: 5,
        name: "Malitel",
        description: "Fournisseur de services de téléphonie mobile",
        logo: "",
      },
      item2: {
        id: 6,
        name: "Banque de l'Habitat du Mali (BHM)",
        description: "Banque spécialisée dans le financement immobilier",
        logo: "",
      },
    },
    {
      item1: {
        id: 7,
        name: "Société des Mines du Mali (SOMIMA)",
        description: "Exploitation minière et production de ressources",
        logo: "",
      },
      item2: {
        id: 8,
        name: "Go Shop Mali",
        description: "E-commerce et vente en ligne",
        logo: "",
      },
    },
    {
      item1: {
        id: 9,
        name: "Cement Company of Mali (CIM)",
        description: "Fabrication et distribution de ciment",
        logo: "",
      },
      item2: {
        id: 10,
        name: "Mali Post",
        description: "Service postal et logistique au Mali",
        logo: "",
      },
    },
  ];

  const { data: companiesData, error, isLoading } = useGetCompaniesQuery();

  console.log("companiesData", companiesData);
  if (isLoading) return <Container>Loading...</Container>;
  return (
    <Container>
      <Breadcumb title={"Employeurs"} />
      <div className="carousel slide">
    <div className="carousel-inner mt-5">
        <div className="carousel-item active">
            <div className="container-fluid">
                <div className="row g-3 justify-content-center">
                    {companiesData?.data.map((item, index) => (
                        <div key={index} className="col-12 col-xl-6 d-flex justify-content-center">
                            <EmployerCard item1={item.attributes} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</div>
    </Container>
  );
};

export default Employers;
