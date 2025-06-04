import React, { useEffect } from "react";
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
import { useGetCompanyQuery } from "../redux/companyService";
import Candidat from './Candidat';
import { useGetCandidatsQuery } from "../redux/candidatService";
import { useGetJobsByIdQuery, useLazyGetJobsQuery } from "../redux/jobService";
import { useGetApplicationQuery } from "../redux/application";
import JobList from "../components/JobList";
import CandidatList from "../components/CandidatList";
import ArticleList from "../components/ArticleList";
const Home = () => {
  const stats = {
    candidates: 120,
    offers: 45,
    interviews: 20,
    hired: 10,
  };

  const {data, isLoading, isError} = useGetCompanyQuery();
  const [getJobs, {data: jobData, isLoading: isLoadingJob, isError: isErrorJob} ]= useLazyGetJobsQuery();
  const {data: CandidatsData, isLoading: isLoadingCandidat, isError: isErrorCandidat} = useGetCandidatsQuery();
  const {data: applicationData, isLoading: isLoadingApplication, isError: isErrorApplication} = useGetApplicationQuery();

  const candidatsTotal = CandidatsData?.meta?.pagination?.total || [];
  const jobsTotal = jobData?.meta?.pagination?.total || [];
  const applicationTotal = applicationData?.meta?.pagination?.total || [];
  

  console.log('CandidatsData', candidatsTotal);

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <Layout>
      {/* En-tête avec le logo */}

      {/* Contenu principal */}
      <div className="w-full flex flex-col text-white">
        {/* Section des cartes dynamiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-4">
          <div className="w-full  h-32 bg-white rounded-2xl flex p-2 justify-between items-center">
            <div className="w-full flex space-x-2">
              <SiLibreofficewriter className="text-orange-500 w-14 h-14" />
              <h2 className="text-xl text-black flex justify-between items-center  font-bold">
                Candidats:
              </h2>
            </div>

            <span className="text-xl text-black font-bold">
              {candidatsTotal}
            </span>
          </div>
          <div className="w-full h-32 bg-white rounded-2xl p-2 flex justify-between items-center">
            <div className="w-full flex space-x-2">
              <IoNewspaperOutline className="text-orange-500 w-14 h-14" />

              <h2 className="text-xl text-black flex justify-between items-center  font-bold">
                Offres :
              </h2>
            </div>

            <span className="text-xl text-black font-bold">{jobsTotal}</span>
          </div>
          <div className="w-full h-32 bg-white rounded-2xl p-2 flex justify-between items-center">
            <div className="w-full flex space-x-2">
              <CiClock1 className="text-orange-500 w-14 h-14" />

              <h2 className="text-xl text-black flex justify-between items-center  font-bold">
                Candidatures:
              </h2>
            </div>

            <span className="text-xl text-black font-bold">
              {applicationTotal}
            </span>
          </div>
          {/* <div className="w-full h-32 bg-white rounded-2xl p-2 flex justify-between items-center">
            <div className="w-full flex space-x-2">
              <ImOffice className="text-orange-500 w-14 h-14" />

              <h2 className="text-xl text-black flex justify-between items-center  font-bold">
                Embauchés:
              </h2>
            </div>

            <span className="text-xl text-black font-bold">
              {" "}
              {stats.hired}{" "}
            </span>
          </div> */}
        </div>

        {/* Section principale */}
        <div className="flex flex-col lg:flex-row h-full space-y-5 w-full p-4">
          <div className="flex items-center flex-col w-full sm:justify-between lg:justify-start lg:w-1/2 h-full p-4 m-1 rounded-2xl bg-slate-200">
            <div className="bg-white flex justify-center items-center h-4 w-32 relative top-3 ml-2 rounded-3xl text-blue-900">
              <span className="font-bold text-base"> Immediat </span>
            </div>
              <JobList page={1} size={3} />
        
          </div>

          <div className="flex w-full lg:w-1/2 flex-col h-full">
            <div className="flex items-center flex-col lg:flex-row w-full justify-between h-full p-4 m-1 rounded-2xl bg-slate-200">
              <CandidatList page={1} size={3} />
          
            </div>
{/* 
            <div className="lg:h-1/3 h-full p-4 m-1 rounded-2xl">
              <div className="flex lg:flex-row flex-col space-y-2  h-full lg:justify-around">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="lg:w-2/5 w-full h-full p-2 flex rounded-2xl bg-blend-darken bg-blue-950">
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
            </div> */}

            <div className="h-1/3 p-4 m-1 rounded-2xl bg-slate-200">
              <div className="flex lg:flex-row flex-col h-full">
                <ArticleList page={1} size={2} />
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
