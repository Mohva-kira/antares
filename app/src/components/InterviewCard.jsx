import React from "react";

const InterviewCard = ({profile, entreprise}) => {
    
const {nom} = profile
const {dateEntretien, description} = entreprise

  return (
    <div className="w-full  m-2 p-2 bg-white h-full rounded-2xl">
      <div className="flex justify-between items-center p-4">
        <span className="w-20 h-20 bg-black rounded-full"></span>
        <span className="bg-orange-500 rounded-3xl p-2 h-full"> {dateEntretien} </span>
      </div>

      <div className="p-4">
        <h1 className="text-lg font-bold ">{nom}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InterviewCard;
