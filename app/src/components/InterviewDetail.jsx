import React from 'react'

const InterviewDetail = ({profile, enterprise}) => {
  console.log('InterviewDetail', profile, enterprise);
  
  return (
    <div className=" h-full flex-wrap m-6 rounded-2xl bg-white p-2 py-8 flex items-center flex-col shadow-xl ">

    <div>
   {/* Photo de profil du candidat */}
   <div className="w-full flex justify-center mb-4">
      <img
        src={profile?.photo ?? 'https://via.placeholder.com/150'}
        alt={profile?.username}
        className="w-24 h-24 rounded-full border-2 border-slate-300"
      />
    </div>

    {/* Infos du candidat */}
    <h1 className="text-xl font-bold text-gray-800 mb-2">{profile?.username}</h1>
    <p className="text-sm text-gray-600 mb-2">Email: {profile?.email}</p>
    <p className="text-sm text-gray-600 mb-2">Téléphone: {profile?.phone}</p>
    <p className="text-sm text-gray-600 mb-2">
      Expérience: {profile.experience} ans
    </p>

    {/* Compétences */}
    <div className="mb-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        Job Description:
      </h2>
      <div>
        {enterprise.name} - {enterprise.adresse}    
    </div>
     
        
          <p  className="text-gray-600 text-sm">
            {enterprise.site}
          </p>
     
    </div>

    {/* Boutons de contact */}
    <div className="w-full mt-4 space-x-2 flex justify-around">
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