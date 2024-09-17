import React from "react";
import Header from "../components/Header";
import { TiStarburst } from "react-icons/ti";
import { CiClock1 } from "react-icons/ci";
import { FcCancel } from "react-icons/fc";
import Layout from "../components/Layout";
const Home = () => {
  return (
    <Layout>
      
      <div className="flex h-full w-full bg-slate-400 ">
        <div className="w-8/12 p-4 m-4 rounded-2xl bg-slate-200 h-screen">
          <div className="bg-white flex justify-center items-center h-4 w-32 relative top-3 ml-4 rounded-3xl">
            <span className="font-bold text-base"> Immediat </span>
          </div>
          <div className="flex w-full p-2 m-2 bg-slate-500 h-1/5 rounded-2xl">
            <div className="flex flex-col w-full justify-between">
              <h1 className="text-white text-2xl font-bold">Maketer digital</h1>
              <div className="flex flex-wrap gap-2 font-semibold">
                <p className="text-slate-200 text-base "> Sans experience </p>{" "}
                <p className="text-slate-200"> A distance </p>
              </div>
              <div className="flex flex-wrap gap-2 font-thin text-base">
                <p className="text-slate-300"> 5 Mars </p>{" "}
                <p className="text-slate-300"> Radio Keldu </p>
              </div>
            </div>

            <div className="w-[45%] flex items-end justify-end ">
              <div className="bg-black h-full w-1 "></div>
              <div className="flex flex-col h-full">
                <div className="w-full flex h-full ml-5 ">
                  <TiStarburst className="text-white text-2xl " />
                  <span className="flex text-white text-base">
                    {" "}
                    14 Candidatures{" "}
                  </span>
                </div>

                <div className="w-full flex h-full ml-5 ">
                  <CiClock1 className="text-white text-2xl " />
                  <span className="flex text-white text-base">
                    {" "}
                    5 en cours{" "}
                  </span>
                </div>

                <div className="w-full flex h-full ml-5 ">
                  <FcCancel className="text-white text-2xl " />
                  <span className="flex text-white text-base">
                    {" "}
                    20 Refuser{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full p-2 m-2 bg-slate-500 h-1/5 rounded-2xl">
            <div className="flex flex-col w-full justify-between">
              <h1 className="text-white text-2xl font-bold">Maketer digital</h1>
              <div className="flex flex-wrap gap-2 font-semibold">
                <p className="text-slate-200 text-base "> Sans experience </p>{" "}
                <p className="text-slate-200"> A distance </p>
              </div>
              <div className="flex flex-wrap gap-2 font-thin text-base">
                <p className="text-slate-300"> 5 Mars </p>{" "}
                <p className="text-slate-300"> Radio Keldu </p>
              </div>
            </div>

            <div className="w-[45%] flex items-end justify-end ">
              <div className="bg-black h-full w-1 "></div>
              <div className="flex flex-col h-full">
                <div className="w-full flex h-full ml-5 ">
                  <TiStarburst className="text-white text-2xl " />
                  <span className="flex text-white text-base">
                    {" "}
                    14 Candidatures{" "}
                  </span>
                </div>

                <div className="w-full flex h-full ml-5 ">
                  <CiClock1 className="text-white text-2xl " />
                  <span className="flex text-white text-base">
                    {" "}
                    5 en cours{" "}
                  </span>
                </div>

                <div className="w-full flex h-full ml-5 ">
                  <FcCancel className="text-white text-2xl " />
                  <span className="flex text-white text-base">
                    {" "}
                    20 Refuser{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full p-2 m-2 bg-slate-500 h-1/5 rounded-2xl">
            <div className="flex flex-col w-full justify-between">
              <h1 className="text-white text-2xl font-bold">Maketer digital</h1>
              <div className="flex flex-wrap gap-2 font-semibold">
                <p className="text-slate-200 text-base "> Sans experience </p>{" "}
                <p className="text-slate-200"> A distance </p>
              </div>
              <div className="flex flex-wrap gap-2 font-thin text-base">
                <p className="text-slate-300"> 5 Mars </p>{" "}
                <p className="text-slate-300"> Radio Keldu </p>
              </div>
            </div>

            <div className="w-[45%] flex items-end justify-end ">
              <div className="bg-black h-full w-1 "></div>
              <div className="flex flex-col h-full">
                <div className="w-full flex h-full ml-5 ">
                  <TiStarburst className="text-white text-2xl " />
                  <span className="flex text-white text-base">
                    {" "}
                    14 Candidatures{" "}
                  </span>
                </div>

                <div className="w-full flex h-full ml-5 ">
                  <CiClock1 className="text-white text-2xl " />
                  <span className="flex text-white text-base">
                    {" "}
                    5 en cours{" "}
                  </span>
                </div>

                <div className="w-full flex h-full ml-5 ">
                  <FcCancel className="text-white text-2xl " />
                  <span className="flex text-white text-base">
                    {" "}
                    20 Refuser{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <div className=" flex items-center justify-between  h-1/3 p-4 m-4 rounded-2xl bg-slate-200">
            <div className="w-1/3  m-2 p2 bg-white h-full rounded-2xl">
              <div className="flex justify-between items-center p-4">
                <span className="w-20 h-20 bg-black rounded-full"></span>
                <span className="bg-orange-500 rounded-3xl p-2 h-full">
                  {" "}
                  12:00{" "}
                </span>
              </div>

              <div className="p-4">
                <h1 className="text-lg font-bold ">Candidat 1</h1>
                <p>Developpeur fullstack avec 10 ans d'experience</p>
              </div>
            </div>
            <div className="w-1/3  m-2 p2 bg-white h-full rounded-2xl">
              <div className="flex justify-between items-center p-4">
                <span className="w-20 h-20 bg-black rounded-full"></span>
                <span className="bg-orange-500 rounded-3xl p-2 h-full">
                  {" "}
                  12:00{" "}
                </span>
              </div>

              <div className="p-4">
                <h1 className="text-lg font-bold ">Candidat 1</h1>
                <p>Developpeur fullstack avec 10 ans d'experience</p>
              </div>
            </div>
            <div className="w-1/3  m-2 p2 bg-white h-full rounded-2xl">
              <div className="flex justify-between items-center p-4">
                <span className="w-20 h-20 bg-black rounded-full"></span>
                <span className="bg-orange-500 rounded-3xl p-2 h-full">
                  {" "}
                  12:00{" "}
                </span>
              </div>

              <div className="p-4">
                <h1 className="text-lg font-bold ">Candidat 1</h1>
                <p>Developpeur fullstack avec 10 ans d'experience</p>
              </div>
            </div>
          </div>

          <div className=" h-1/2 p-4 m-4 rounded-2xl ">
            <div className="flex h-full justify-evenly">
              <div className="w-2/5 h-1/2 p-2  flex rounded-2xl bg-slate-200">
                <div className="bg-black h-14 w-32  rounded-2xl"></div>
                <div className="flex w-full flex-col items-center justify-start    ">
                  <h1 className="font-bold"> Marketeur </h1>
                  <div className="flex w-full  justify-around items-center pb-2 pt-1 ">
                    <span className="font-medium">10000 Cvs</span>
                    <span className="p-2 w-fit bg-blue-950 text-white mb-2 rounded-3xl">
                      {" "}
                      7000 placé{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-2/5 h-1/2 p-2  flex rounded-2xl bg-slate-200">
                <div className="bg-black h-14 w-32  rounded-2xl"></div>
                <div className="flex w-full flex-col items-center justify-start    ">
                  <h1 className="font-bold"> Marketeur </h1>
                  <div className="flex w-full  justify-around items-center pb-2 pt-1 ">
                    <span className="font-medium">10000 Cvs</span>
                    <span className="p-2 w-fit bg-blue-950 text-white mb-2 rounded-3xl">
                      {" "}
                      7000 placé{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-1/2 p-4 m-4 rounded-2xl bg-slate-400">
            <div className="flex h-full">
              <div className="w-1/2  m-2 p-2 rounded-2xl bg-white">
                <div className="bg-black h-full w-full p-4 rounded-2xl" >
                    <div className="w-full text-white flex h-full  items-end" >
                      <span><h1 className="text-lg font-bold"> Recherche :</h1>  <p> Ce que peux vous apportez les journées portes ouvertes des entreprises </p></span>  

                    </div>
                </div>
              </div>
              <div className="w-1/2  m-2 p-2 rounded-2xl bg-white">
                <div className="bg-black h-full w-full p-4 rounded-2xl" >
                    <div className="w-full text-white flex h-full  items-end" >
                      <span><h1 className="text-lg font-bold"> Recherche :</h1>  <p> Ce que peux vous apportez les journées portes ouvertes des entreprises </p></span>  

                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
