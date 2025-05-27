
import React from 'react'
import Container from '../components/Container'
import JobCard from '../components/JobCard'
import job2 from "../assets/images/job-2.png"
import Breadcumb from '../components/Breadcumb'
import { useGetApplicationByIdQuery, useGetApplicationByUserIdQuery } from '../redux/application'
const Applications = () => {

    const jobData =[
        {
            name: 'Sotram',
            title: 'Service de transport public et privé',
            adresse: 'Avenue de la Liberté, Hamdallaye ACI 2000',
            ville: 'Bamako',
            pays: 'Mali',
            contratType: 'Prestataire de services',
            category: 'comptabilite',
            endDate: new Date(),
            applied : true,
            appliedDate: new Date()
        },
        {
            name: 'BamaTrans',
            title: 'Transport de marchandises',
            adresse: 'Route de Koulikoro, Quartier du Fleuve',
            ville: 'Bamako',
            pays: 'Mali',
            contratType: 'Prestataire de services',
            category: 'logistique',
            endDate: new Date(),
            applied : true,
            appliedDate: new Date()
        },
        {
            name: 'Africom',
            title: 'Télécommunications et réseaux',
            adresse: 'Rue de la Paix, Badalabougou Est',
            ville: 'Bamako',
            pays: 'Mali',
            contratType: 'Contrat à durée indéterminée',
            category: 'telecommunications',
            endDate: new Date(),
            applied : true,
            appliedDate: new Date()
        },
        {
            name: 'Malitech',
            title: 'Solutions informatiques et réseaux',
            adresse: 'Avenue Cheick Zayed, ACI 2000',
            ville: 'Bamako',
            pays: 'Mali',
            contratType: 'Contrat à durée déterminée',
            category: 'informatique',
            endDate: new Date(),
            applied : true,
            appliedDate: new Date()
        },
        {
            name: 'Agro Mali',
            title: 'Agriculture et agro-industrie',
            adresse: 'Route de Kati, Sogoniko',
            ville: 'Bamako',
            pays: 'Mali',
            contratType: 'Prestataire de services',
            category: 'agriculture',
            endDate: new Date(),
            applied : true,
            appliedDate: new Date()
        },
        {
            name: 'Energie Plus',
            title: 'Production et distribution d\'énergie',
            adresse: 'Boulevard de l\'Indépendance, Magnambougou',
            ville: 'Bamako',
            pays: 'Mali',
            contratType: 'Contrat de sous-traitance',
            category: 'energie',
            endDate: new Date(),
            applied : true,
            appliedDate: new Date()
        },
        {
            name: 'Bamako Finance',
            title: 'Services financiers et bancaires',
            adresse: 'Rue de l\'Hôtel de Ville, Badalabougou',
            ville: 'Bamako',
            pays: 'Mali',
            contratType: 'Contrat à durée indéterminée',
            category: 'finance',
            endDate: new Date(),
            applied : true,
            appliedDate: new Date()
        },
        {
            name: 'Mali Santé',
            title: 'Services de santé et de bien-être',
            adresse: 'Quartier du Fleuve, Médina Coura',
            ville: 'Bamako',
            pays: 'Mali',
            contratType: 'Prestataire de services',
            category: 'sante',
            endDate: new Date(),
            applied : true,
            appliedDate: new Date()
        },
        {
            name: 'EduTech Mali',
            title: 'Technologies pour l\'éducation',
            adresse: 'Avenue Al Qoods, Kalabancoura',
            ville: 'Bamako',
            pays: 'Mali',
            contratType: 'Contrat à durée déterminée',
            category: 'education',
            endDate: new Date(),
            applied : true,
            appliedDate: new Date()
        },
        {
            name: 'Mali Constructions',
            title: 'Bâtiment et travaux publics',
            adresse: 'Rue 325, Sogoniko',
            ville: 'Bamako',
            pays: 'Mali',
            contratType: 'Prestataire de services',
            category: 'construction',
            endDate: new Date(),
            applied : true,
            appliedDate: new Date()
        }
    ]
   const auth = JSON.parse(localStorage.getItem("auth"));
    const user = auth?.user;

    const {data, isLoading, isSuccess, isFetching, isError} = useGetApplicationByUserIdQuery(user?.id);

  return (
    <Container>
      <Breadcumb title="Mes candidatures" />
      <section class="banner-bottom-wthree pb-lg-5 pb-md-4 pb-3">
                    <div class="container">
                        <div class="inner-sec-w3ls py-lg-5  py-3">
                            
                            <h3 class="tittle text-center mb-lg-4 mb-3">

                                <span> Mes candidatures</span>Tous les offres auquel vous avez postuler
                            </h3>
                            
                            <div class="tabs mt-5">
                            <div className='flex space-x-2 bg-white w-fit rounded-lg   p-2'>
                                <h2 className='px-2'>Date : </h2>
                                <label htmlFor="debut" >De : </label>
                                <input className='px-2 border-orange-500 border-y-2 hover:text-white rounded-lg' type='date' id='debut' />   
                                <label htmlFor="debut" > à </label>
                                <input className='px-2 border-orange-500 border-y-2 hover:text-white rounded-lg' type='date' id='debut' />   
                            
                            </div>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                      aria-labelledby="pills-home-tab">
                                      <div class="menu-grids mt-4">
                                          <div class="row t-in">
                                              <div class="col-lg-8 text-info-sec">
                                                      {data?.data?.map(item => 
                                                        
                                                        <JobCard item={item?.attributes?.job?.data} applied={item} />
                                                      )

                                                      }

                                                </div>
                                                <div class="col-lg-4 text-info-sec">
                                                    <img src={job2} alt=" " class="img-fluid" />
                                                </div>
                                   
                                              </div>
                                            </div>
                                        </div>
                                
          
                                 
                              
                                </div>
                            </div>
                        </div>
                    </div>
         </section>

    </Container>
  )
}

export default Applications
