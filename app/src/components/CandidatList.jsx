import React from 'react'
import { useGetCandidatsQuery } from '../redux/candidatService';
import Layout from './Layout';
import { IoMdPerson } from 'react-icons/io';

const CandidatList = ({page, size}) => {

    const {  data: candidatsData, isLoading, isError } = useGetCandidatsQuery({ page, size });
    const candidats = candidatsData?.data || [];

    console.log('candidats', candidats);
  if (isLoading) return <Layout className='w-full flex-1 '>Loading...</Layout>; 
  if (isError) return <Layout className='w-full flex-1 '>Une erreur c'est produite...</Layout>;  

  console.log('candidats', candidats);
  return (
    <div className='flex flex-wrap w-full items-center justify-center '>
    {candidats?.map((candidat, index) => (
         <div
         key={index}
         className=" w-2/5 m-2 p-2 bg-white h-full rounded-2xl">
         <div className="flex justify-between items-center p-4">
           <span className="w-20 h-20 flex justify-center items-center bg-blue-950 rounded-full">
           {candidat?.attributes?.user?.photo ?
              <img
                src={candidat?.attributes?.user?.photo?.data?.attributes?.url || 'https://via.placeholder.com/150'}
                alt="Candidat"
                className="w-full h-full object-cover rounded-full"
              />: 
              <IoMdPerson className='text-6xl' />
              }
           </span>
           <span className="bg-orange-500 rounded-3xl p-2 h-full text-white">
             12:00
           </span>
         </div>
         <div className="p-4">
           <h1 className="text-lg font-bold text-black">
             {candidat?.attributes?.title}
           </h1>
           <p className="text-black overflow-hidden text-ellipsis whitespace-nowrap w-full">
           {candidat?.attributes?.summary || 'Aucune description fournie.'}
           </p>
         </div>
       </div>
       ))

    }
      
    </div>
  )
}

export default CandidatList
