import React from 'react'
import { useGetActualityQuery } from '../redux/actualityService';

const ArticleList = ({page, size}) => {
    const {data, isLoading, isError} = useGetActualityQuery();

    const articles = data?.data || [];

    console.log('articles', articles);
  return (
  
        articles?.map((article, index) => (
             <div
             key={index}
             className="lg:w-1/2 w-full m-2 p-2 rounded-2xl bg-white">
             <div className="bg-blue-900 h-full w-full p-4 rounded-2xl">
               <div className="w-full text-white flex h-full items-end">
                 <span>
                   <h1 className="text-lg font-bold">{article?.attributes?.title} :</h1>
                   <p>
                     {article?.attributes?.content?.[0]?.descriptionContent|| 'Aucune description fournie.'}
                   </p>
                 </span>
               </div>
             </div>
           </div>
        ))

        

  )
}

export default ArticleList
