import React, { useEffect } from "react";
import Layout from "./Layout";
import { useLazyGetJobsQuery } from "../redux/jobService";
import { TiStarburst } from "react-icons/ti";
import { CiClock1 } from "react-icons/ci";
import { FcCancel } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const JobList = ({ page, size }) => {
  const [getJobs, { data, isLoading, isError }] = useLazyGetJobsQuery();
  const navigate = useNavigate();
  const jobs = data?.data || [];


  useEffect(() => {
    getJobs({ page, size });
    }, []);
  console.log('jobs', jobs);
  if (isLoading) return <Layout className="w-full flex-1 ">Loading...</Layout>;
    if (isError) return <Layout className="w-full flex-1 ">Something went wrong...</Layout>;
  return (
    <div className="flex flex-col w-full items-center justify-center ">
      {jobs?.map((job, index ) => (
        <div
          key={index}
          className="flex w-full p-2 m-2 h-1/3 bg-white  lg:h-1/5 rounded-2xl">
          <div className="flex flex-col w-full justify-between">
            <h1 onClick={() => navigate('/job/' +job?.id)} className="text-black cursor-pointer text-2xl font-bold">{job?.attributes?.titre}</h1>
            <div className="flex flex-wrap gap-2 font-semibold">
              <p className="text-slate-700 text-base">Nombre d'expérience  {job?.attributes?.experience}</p>
              <p className="text-slate-700"> - {job?.attributes?.contratType ?? 'Non défini'}</p>
            </div>
            <div className="flex flex-wrap gap-2 font-thin text-base">
              <p className="text-slate-900">{job?.attributes?.date ?? 'Non défini'}</p>
              <p className="text-slate-900"> - {job?.attributes?.company?.data?.attributes?.name ?? 'Non défini'} </p>
            </div>
          </div>
          <div className="w-[45%] flex items-end justify-end">
            <div className="bg-white h-full w-1"></div>
            <div className="flex flex-col h-full ml-5">
              <div className="w-full flex h-full">
                <TiStarburst className="text-orange-500 text-2xl" />
                <span className="flex text-black text-base">
                  {" "}
                  14 Candidatures
                </span>
              </div>
              <div className="w-full flex h-full">
                <CiClock1 className="text-orange-500 text-2xl" />
                <span className="flex text-black text-base"> 5 en cours</span>
              </div>
              <div className="w-full flex h-full">
                <FcCancel className="text-orange-500 text-2xl" />
                <span className="flex text-black text-base"> 20 Refusés</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
