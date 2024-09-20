import React from 'react'

const InterviewDetail = ({profile, enterprise}) => {
  return (
    <div className="lg:w-5/6 h-1/3 flex-wrap m-6 rounded-2xl bg-white p-2  flex items-center flex-col ">

    <div>
   {/* Photo de profil du candidat */}
   <div className="w-full flex justify-center mb-4">
      <img
        src={profile?.photo}
        alt={profile.nom}
        className="w-24 h-24 rounded-full border-2 border-slate-300"
      />
    </div>

    {/* Infos du candidat */}
    <h1 className="text-xl font-bold text-gray-800 mb-2">{profile.nom}</h1>
    <p className="text-sm text-gray-600 mb-2">Email: {profile.email}</p>
    <p className="text-sm text-gray-600 mb-2">Téléphone: {profile.phone}</p>
    <p className="text-sm text-gray-600 mb-2">
      Expérience: {profile.experience} ans
    </p>

    {/* Compétences */}
    <div className="mb-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        Job Description:
      </h2>
      <div>
        {enterprise.nom} - {enterprise.poste}    
    </div>
     
        
          <p  className="text-gray-600 text-sm">
            {enterprise.description}
          </p>
     
    </div>

    {/* Boutons de contact */}
    <div className="w-full mt-4 flex justify-around">
      <a
        href={`mailto:${profile.email}`}
        className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-lg text-sm"
      >
        Envoyer un Email
      </a>
      <a
        href={`tel:${profile.phone}`}
        className="text-white bg-green-500 hover:bg-green-600 p-2 rounded-lg text-sm"
      >
        Appeler
      </a>
    </div>
    </div>

  </div>
  )
}

export default InterviewDetail