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

  const [selected, setSelected] = useState(null);

  return (
    <Layout>
      <div className="w-full p-2 flex flex-col">
        <div className="w-full">
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
            {entretiens.map((item) => (
              <SwiperSlide
                key={item.profil.email}
                onClick={() => setSelected(item)}
                className="flex justify-center">
                <InterviewCard
                  profile={item.profil}
                  entreprise={item.entreprise}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Schedule Component */}
          <div className="w-full p-4">
            <ScheduleComponent>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
          </div>
        </div>

        {/* Détails de l'entretien sélectionné */}
        {selected && (
          <div className="w-full m-2">
            <InterviewDetail
              profile={selected.profil}
              enterprise={selected.entreprise}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Interview;
