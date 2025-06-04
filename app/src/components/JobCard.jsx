// JobCard.js
import React from "react";
import { CiClock1 } from "react-icons/ci";
import { FcCancel } from "react-icons/fc";
import { TiStarburst } from "react-icons/ti";

const JobCard = ({
  title,
  experience,
  location,
  date,
  company,
  applications,
  inProgress,
  rejected,
}) => {
  return (
    <div className="flex w-full p-2 m-2 bg-slate-500 h-32 shadow-lg rounded-2xl ">
      <div className="flex flex-col w-full justify-between">
        <h1 className="text-white text-2xl font-bold">{title}</h1>
        <div className="flex flex-wrap gap-2 font-semibold">
          <p className="text-white text-base">{`${experience} ans d'expériences à `}</p>
          <p className="text-white">{location}</p>
        </div>
        <div className="flex flex-wrap gap-2 font-medium text-sm">
          <p className="text-white">{date} - </p>
          <p className="text-white">{company}</p>
        </div>
      </div>

      <div className="w-[55%] flex items-end h-full justify-end p-1">
        <div className="bg-black h-full w-1"></div>
        <div className="flex flex-col h-full justify-between items-center">
          <div className="w-full flex h-full ml-5 justify-around">
            <TiStarburst className="text-white text-2xl" />
            <span className="flex text-white text-base">
              {" "}
              {applications ?? 0} Candidats
            </span>
          </div>

          <div className="w-full flex h-full ml-5 justify-around">
            <CiClock1 className="text-white text-2xl" />
            <span className="flex text-white text-base">
              {" "}
              {inProgress ?? 0} en cours
            </span>
          </div>

          <div className="w-full flex h-full ml-5 justify-around items-center">
            <FcCancel className="text-white text-2xl" />
            <span className="flex text-white text-base">
              {" "}
              {rejected ?? 0} Refuser
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
