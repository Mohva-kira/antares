import React, { useState } from "react";
import InterviewCard from "../components/InterviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";

import "swiper/css";
import Layout from "../components/Layout";
import InterviewDetail from "../components/InterviewDetail";
import DynamicForm from "../components/DynamicForm";
import { useGetApplicationQuery } from "../redux/application";

const Interview = () => {
  const entretiens = [
    {
      profil: {
        nom: "Jean Dupont",
        email: "jean.dupont@email.com",
        phone: "+33 6 12 34 56 78",
        description: "Développeur fullstack avec 10 ans d'expérience",
      },
      entreprise: {
        nom: "TechCorp",
        poste: "Développeur Fullstack",
        description:
          "Développement et maintenance d'applications web utilisant React.js et Node.js",
        dateEntretien: "10 - 11 - 2024 12:00",
      },
    },
    {
      profil: {
        nom: "Marie Martin",
        email: "marie.martin@email.com",
        phone: "+33 7 89 23 45 67",
        description: "Ingénieur DevOps avec expertise en infrastructure Cloud",
      },
      entreprise: {
        nom: "CloudSolutions",
        poste: "Ingénieur DevOps",
        description:
          "Gestion de l'infrastructure cloud, automatisation et sécurité",
        dateEntretien: "12 - 11 - 2024 09:00",
      },
    },
    {
      profil: {
        nom: "Pierre Laurent",
        email: "pierre.laurent@email.com",
        phone: "+33 6 98 76 54 32",
        description: "Data Scientist avec 5 ans d'expérience en IA et Big Data",
      },
      entreprise: {
        nom: "DataLab",
        poste: "Data Scientist",
        description:
          "Analyse de données, développement de modèles de machine learning",
        dateEntretien: "14 - 11 - 2024 15:30",
      },
    },
    {
      profil: {
        nom: "Claire Durand",
        email: "claire.durand@email.com",
        phone: "+33 6 55 44 33 22",
        description: "Architecte logiciel avec expertise en microservices",
      },
      entreprise: {
        nom: "SoftwareBuilders",
        poste: "Architecte logiciel",
        description:
          "Conception et mise en place d'architectures logicielles évolutives",
        dateEntretien: "16 - 11 - 2024 11:00",
      },
    },
    {
      profil: {
        nom: "Luc Moreau",
        email: "luc.moreau@email.com",
        phone: "+33 7 22 33 44 55",
        description: "Expert en sécurité informatique et cryptographie",
      },
      entreprise: {
        nom: "SecureIT",
        poste: "Expert en sécurité informatique",
        description:
          "Mise en place de stratégies de sécurité et gestion des incidents",
        dateEntretien: "18 - 11 - 2024 13:00",
      },
    },
    {
      profil: {
        nom: "Sophie Leclerc",
        email: "sophie.leclerc@email.com",
        phone: "+33 6 77 88 99 00",
        description:
          "Développeuse mobile avec 7 ans d'expérience en Android et iOS",
      },
      entreprise: {
        nom: "AppMakers",
        poste: "Développeuse mobile",
        description: "Développement d'applications mobiles pour Android et iOS",
        dateEntretien: "20 - 11 - 2024 09:30",
      },
    },
    {
      profil: {
        nom: "Antoine Bernard",
        email: "antoine.bernard@email.com",
        phone: "+33 6 99 88 77 66",
        description: "UI/UX Designer avec 6 ans d'expérience",
      },
      entreprise: {
        nom: "CreativeDesign",
        poste: "UI/UX Designer",
        description:
          "Conception de designs utilisateurs pour applications et sites web",
        dateEntretien: "22 - 11 - 2024 10:00",
      },
    },
    {
      profil: {
        nom: "Isabelle Fournier",
        email: "isabelle.fournier@email.com",
        phone: "+33 6 44 33 22 11",
        description: "Chef de projet Agile avec 12 ans d'expérience",
      },
      entreprise: {
        nom: "AgileMasters",
        poste: "Chef de projet Agile",
        description: "Gestion de projets en méthodologie Agile et Scrum",
        dateEntretien: "24 - 11 - 2024 14:00",
      },
    },
    {
      profil: {
        nom: "Nicolas Roux",
        email: "nicolas.roux@email.com",
        phone: "+33 6 33 22 11 00",
        description: "Développeur front-end expert en React.js",
      },
      entreprise: {
        nom: "FrontendLab",
        poste: "Développeur front-end",
        description: "Développement d'interfaces web en React.js et Next.js",
        dateEntretien: "26 - 11 - 2024 16:30",
      },
    },
    {
      profil: {
        nom: "Amandine Girard",
        email: "amandine.girard@email.com",
        phone: "+33 7 66 55 44 33",
        description:
          "Ingénieure système spécialisée en automatisation et scripts",
      },
      entreprise: {
        nom: "SysAutomate",
        poste: "Ingénieure système",
        description:
          "Automatisation des systèmes et gestion des infrastructures IT",
        dateEntretien: "28 - 11 - 2024 08:00",
      },
    },
  ];

  const user = JSON.parse(localStorage.getItem("auth"))?.user || {};

  const [selected, setSelected] = useState(null);
  const { data, isLoading, isSuccess, isFetching, isError } =
    useGetApplicationQuery(user?.id);


    console.log("data", data);
  if (isLoading) {
    return <p>Chargement des candidatures...</p>;
  }
  if (isError) {
    return <p>Erreur lors du chargement des candidatures.</p>;
  }
  if (!isSuccess || !data?.data?.length) {
    return <p>Aucune candidature trouvée.</p>;
  }
  console.log("data", data);
  console.log("selected", selected);

  return (
    <Layout>
      <div className=" p-2 flex flex-col lg:flex-row w-full h-screen space-y-4 lg:space-y-0 lg:space-x-4 overflow-hidden">
        <div className="w-full h-full flex flex-col  space-y-4 lg:space-y-0 lg:space-x-4 p-4 ">

         <h2 className="text-3xl font-bold mx-2 p-2">Les candidatures</h2>
          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={10}
            slidesPerView={1} // Par défaut, 1 slide visible
            breakpoints={{
              640: {
                slidesPerView: 1, // Petit écran
              },
              768: {
                slidesPerView: 2, // Moyenne taille d'écran
              },
              1024: {
                slidesPerView: 3, // Grand écran
              },
            }}
            className="w-full"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}>
            {data?.data?.map((item) => (
              <SwiperSlide
                key={item.id}
                onClick={() => setSelected(item)}
                className="flex justify-center   cursor-pointer">
                <div
                  className="h-24 w-72 bg-slate-700 m-2 p-2 rounded-lg flex items-center justify-center shadow-xl text-white cursor-pointer"
                  key={item.id}
                  onClick={() => setSelected(item)}>
                  <div>
                    <h3 className="text-lg font-bold">
                      {item.attributes.job?.data.attributes.titre}
                    </h3>
                    <p className="text-sm">
                      {
                        item.attributes.job?.data.attributes.entreprise?.data
                          .attributes.name
                      }
                    </p>
                    <p className="text-xs text-gray-400">
                      {new Date(
                        item.attributes.date_candidature
                      ).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-gray-400">
                      Candidat :{" "}
                      {item.attributes.candidat?.data.attributes.username}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {isLoading && <p>Chargement des candidatures...</p>}
            {isError && <p>Erreur lors du chargement des candidatures.</p>}
          </Swiper>


          {/* Schedule Component */}
          <div className="w-full mt-8 h-[480px] overflow-scroll">
            <ScheduleComponent className="w-full h-full shadow-lg rounded-2xl">
              <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
          </div>
        </div>

        {/* Détails de l'entretien sélectionné */}
        {selected && (
          <div className="w-1/4 h-fit m-2">
            <InterviewDetail
              profile={selected?.attributes?.candidat?.data?.attributes}
              enterprise={selected?.attributes?.job?.data?.attributes.company?.data?.attributes}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Interview;
