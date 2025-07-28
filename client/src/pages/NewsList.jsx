import React from 'react'
import Breadcumb from '../components/Breadcumb'
import Container from '../components/Container'
import ArticleCard from '../components/ArticleCard'
import { useGetActualitesQuery } from '../redux/actualite'

const NewsList = () => {

      const {
        data: actualiteData,
        isLoading: actualiteIsLoading,
        isFetching: actualiteIsFetching,
      } = useGetActualitesQuery({ page: 1, size: 10 });


  return (
    <Container>
      <Breadcumb title={'Actualités'} />
        <section className="banner-bottom-wthree py-lg-5 py-md-5 py-3">
             <div className="container">
               <div className="inner-sec-w3ls py-lg-5  py-3">
                 <h3 className="tittle text-center mb-lg-5 mb-3">
                   <span> Info</span> Astuces pour ta carrière
                 </h3>
                 <div className="row mt-5">
                   <div className="card-deck">
                     {actualiteData?.data.map((item) => (
                       <ArticleCard item={item} />
                     ))}
                   </div>
                 </div>
               </div>
             </div>
           </section>
   </Container>
  )
}

export default NewsList
