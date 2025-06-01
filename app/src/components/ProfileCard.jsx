// ProfileCard.js
import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ profile }) => {

const navigate = useNavigate();
  // Si le profil n'est pas défini, on redirige vers la page d'accueil
 


  console.log("ProfileCard", profile?.id);
  return (
    <div className="lg:w-full h-fit flex-wrap m-6 bg-white rounded-2xl  shadow-md  p-2  flex items-center flex-col ">
      <div>
        {/* Photo de profil */}
        <div onClick={() => navigate(`/cv/${profile.id}`)} className="w-full flex justify-center cursor-pointer mb-4">
          {
            !profile?.attributes?.user?.data?.attributes?.photo ? (
              <div className="w-32 h-32 bg-gray-200 rounded-full flex flex-col items-center justify-center">
                <IoPersonOutline  className="text-yellow-500  rounded-full" size={40} />
                <span className="text-gray-500 p-2">Pas de photo</span>
              </div>
            ) :  <img
            src={profile?.attributes?.user?.data?.attributes?.photo}
            alt={profile?.attributes?.user?.data?.attributes?.username}
            className="w-24 h-24 rounded-full border-2 border-slate-300"
          />
          }
         
        </div>

        {/* Infos du candidat */}
        <h1 className="text-xl text-center font-bold text-gray-800 mb-2">{profile?.attributes?.user?.data?.attributes?.username}</h1>
        <h1 className="text-sm text-center font-semibold text-gray-800 mb-2">{profile?.attributes?.title}</h1>
        <p className="text-sm text-gray-600 mb-2">Email: {profile?.attributes?.user?.data?.attributes?.email}</p>
        <p className="text-sm text-gray-600 mb-2">Téléphone: {profile?.attributes?.user?.data?.attributes?.phone}</p>
   
      
         <p  className="my-2 p-1 text-center" > <span className="font-semibold"> Total expériences :  </span> <span className="font-extrabold"> {profile?.attributes?.total_exp} </span>  </p>
        
       

        {/* Compétences */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Compétences:
          </h2>
          <ul className="list-disc list-inside">
          {profile?.attributes?.skills?.map((skill, index) => (
  <li key={index} className="text-gray-600 text-sm">
    {skill.name} {skill.level && <span className="text-xs text-gray-400">({skill.level})</span>}
  </li>
))}
          </ul>
        </div>

        {/* Boutons de contact */}
        <div className="w-full mt-4 flex justify-around">
          <a
            href={`mailto:${profile?.attributes?.user?.data?.attributes?.email}`}
            className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-lg text-sm">
            Envoyer un Email
          </a>
          <a
            href={`tel:${profile?.attributes?.user?.data?.attributes?.phone}`}
            className="text-white bg-green-500 hover:bg-green-600 p-2 rounded-lg text-sm">
            Appeler
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
