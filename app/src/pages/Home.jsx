import React from "react";
import Header from "../components/Header";
import { TiStarburst } from "react-icons/ti";
import { CiClock1 } from "react-icons/ci";
import { FcCancel } from "react-icons/fc";
import Layout from "../components/Layout";
import logo from "../assets/logo.jpg"; // Ajout du logo
import { FcBusinessman } from "react-icons/fc";
import { IoMdBusiness } from "react-icons/io";
import { ImOffice } from "react-icons/im";
import { SiLibreofficewriter } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
const Home = () => {
  const stats = {
    candidates: 120,
    offers: 45,
    interviews: 20,
    hired: 10,
  };

  return (
    <Layout>
      {/* En-tête avec le logo */}

      {/* Contenu principal */}
      <div className="w-full flex flex-col text-white">
        {/* Section des cartes dynamiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-4">
          <div className="w-full  h-32 bg-white rounded-2xl flex p-2 justify-between items-center">
            <div className="w-full flex">
              <SiLibreofficewriter className="text-black w-14 h-14" />
              <h2 className="text-xl text-black flex justify-between items-center  font-bold">
                Candidats:
              </h2>
            </div>

            <span className="text-xl text-black font-bold">
              {stats.candidates}
            </span>
          </div>
          <div className="w-full h-32 bg-white rounded-2xl p-2 flex justify-between items-center">
            <div className="w-full flex">
              <IoNewspaperOutline className="text-black w-14 h-14" />

              <h2 className="text-xl text-black flex justify-between items-center  font-bold">
                Offres :
              </h2>
            </div>

            <span className="text-xl text-black font-bold">{stats.offers}</span>
          </div>
          <div className="w-full h-32 bg-white rounded-2xl p-2 flex justify-between items-center">
            <div className="w-full flex">
              <CiClock1 className="text-black w-14 h-14" />

              <h2 className="text-xl text-black flex justify-between items-center  font-bold">
                Interviews:
              </h2>
            </div>

            <span className="text-xl text-black font-bold">
              {stats.interviews}
            </span>
          </div>
          <div className="w-full h-32 bg-white rounded-2xl p-2 flex justify-between items-center">
            <div className="w-full flex space-x-2">
              <ImOffice className="text-black w-14 h-14" />

              <h2 className="text-xl text-black flex justify-between items-center  font-bold">
                Embauchés:
              </h2>
            </div>

            <span className="text-xl text-black font-bold">
              {" "}
              {stats.hired}{" "}
            </span>
          </div>
        </div>

        {/* Section principale */}
        <div className="flex flex-col lg:flex-row h-full w-full p-4">
          <div className="lg:w-1/2 p-4 m-2 rounded-2xl bg-slate-200">
            <div className="bg-white flex justify-center items-center h-4 w-32 relative top-3 ml-2 rounded-3xl text-blue-900">
              <span className="font-bold text-base"> Immediat </span>
            </div>

            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex w-full p-2 m-2 bg-blue-600  h-1/5 rounded-2xl">
                <div className="flex flex-col w-full justify-between">
                  <h1 className="text-white text-2xl font-bold">
                    Maketer digital
                  </h1>
                  <div className="flex flex-wrap gap-2 font-semibold">
                    <p className="text-slate-200 text-base">Sans experience</p>
                    <p className="text-slate-200">A distance</p>
                  </div>
                  <div className="flex flex-wrap gap-2 font-thin text-base">
                    <p className="text-slate-300">5 Mars</p>
                    <p className="text-slate-300">Radio Keldu</p>
                  </div>
                </div>
                <div className="w-[45%] flex items-end justify-end">
                  <div className="bg-white h-full w-1"></div>
                  <div className="flex flex-col h-full ml-5">
                    <div className="w-full flex h-full">
                      <TiStarburst className="text-orange-500 text-2xl" />
                      <span className="flex text-white text-base">
                        {" "}
                        14 Candidatures
                      </span>
                    </div>
                    <div className="w-full flex h-full">
                      <CiClock1 className="text-orange-500 text-2xl" />
                      <span className="flex text-white text-base">
                        {" "}
                        5 en cours
                      </span>
                    </div>
                    <div className="w-full flex h-full">
                      <FcCancel className="text-orange-500 text-2xl" />
                      <span className="flex text-white text-base">
                        {" "}
                        20 Refusés
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full lg:w-1/2 flex-col h-full">
            <div className="flex items-center justify-between h-full p-4 m-1 rounded-2xl bg-slate-200">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1/3 m-2 p-2 bg-white h-full rounded-2xl">
                  <div className="flex justify-between items-center p-4">
                    <span className="w-20 h-20 bg-blue-950 rounded-full"></span>
                    <span className="bg-orange-500 rounded-3xl p-2 h-full text-white">
                      12:00
                    </span>
                  </div>
                  <div className="p-4">
                    <h1 className="text-lg font-bold text-black">
                      Candidat {i + 1}
                    </h1>
                    <p className="text-black">
                      Developpeur fullstack avec 10 ans d'experience
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-1/3 p-4 m-1 rounded-2xl">
              <div className="flex h-full justify-around">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2/5 h-full p-2 flex rounded-2xl bg-blend-darken bg-blue-950">
                    <div className="bg-white h-14 w-32 rounded-2xl"></div>
                    <div className="flex w-full flex-col items-center justify-start">
                      <h1 className="font-bold text-white">Marketeur</h1>
                      <div className="flex w-full justify-around items-center pb-2 pt-1">
                        <span className="font-medium text-orange-500">
                          10000 CVs
                        </span>
                        <span className="p-2 w-fit bg-orange-500 text-white mb-2 rounded-3xl">
                          7000 placés
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-1/3 p-4 m-1 rounded-2xl bg-slate-200">
              <div className="flex h-full">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="w-1/2 m-2 p-2 rounded-2xl bg-white">
                    <div className="bg-blue-900 h-full w-full p-4 rounded-2xl">
                      <div className="w-full text-white flex h-full items-end">
                        <span>
                          <h1 className="text-lg font-bold">Recherche :</h1>
                          <p>
                            Ce que peuvent vous apporter les journées portes
                            ouvertes des entreprises
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
