import React from 'react'
import {
  FaFile,
  FaGraduationCap,
  FaBook,
  FaCalendar,
  FaLightbulb,
  FaUserCheck,
  FaChartLine,
  FaLaptopCode,
} from "react-icons/fa6";
import Breadcumb from '../components/Breadcumb'
import Container from '../components/Container'
import Headers from '../components/Headers'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { useNavigate } from 'react-router-dom'
import { useGetActualitesQuery } from '../redux/actualite'
import ArticleCard from '../components/ArticleCard'

const Resources = () => {
  const navigate = useNavigate();
  const { data: actualiteData } = useGetActualitesQuery();

  return (
    <>
     
      <Container>
        <section className="py-lg-5 py-md-5 py-3">
          <Breadcumb title={'Ressources'} />
          
          {/* Section Hero */}
          <div className="container py-lg-5 py-md-4 py-3">
            <div className="inner-sec-w3ls py-lg-5 py-3">
              <div className="text-center mb-5">
                <h3 className="tittle text-center mb-lg-4 mb-3">
                  <span>Ressources</span>Centre de ressources RH
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Découvrez nos ressources pour vous accompagner dans votre parcours professionnel et vous tenir informé des dernières actualités RH.
                </p>
              </div>
            </div>
          </div>

          {/* Section Blog / Actualités RH */}
          <div className="banner-bottom-wthree bg-light py-lg-5 py-md-4 py-3">
            <div className="container">
              <div className="inner-sec-w3ls py-lg-5 py-3">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="tittle mb-0">
                    <span>Actualités</span>Blog RH & Actualités
                  </h3>
                  <button 
                    onClick={() => navigate('/news')}
                    className="text-[#2529d8] hover:underline font-semibold"
                  >
                    Voir toutes les actualités →
                  </button>
                </div>
                
                <div className="row mt-5">
                  <div className="card-deck">
                    {actualiteData?.data?.slice(0, 3).map((item, index) => (
                      <ArticleCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Conseils Carrière */}
          <div className="container py-lg-5 py-md-4 py-3">
            <div className="inner-sec-w3ls py-lg-5 py-3">
              <div className="text-center mb-5">
                <h3 className="tittle text-center mb-lg-5 mb-3">
                  <span>Conseils</span>Conseils Carrière
                </h3>
              </div>
              
              <div className="row mt-5">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="bg-white p-5 rounded-lg shadow-sm h-100 border-t-4 border-[#2529d8] hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => navigate('/news')}>
                    <div className="mb-4">
                      <FaFile className="text-5xl text-[#2529d8]" />
                    </div>
                    <h4 className="mb-3 font-bold text-xl">Rédaction de CV</h4>
                    <p className="text-gray-600 mb-4">
                      Apprenez à créer un CV percutant qui attire l'attention des recruteurs et met en valeur vos compétences.
                    </p>
                    <a href="#" className="text-[#2529d8] font-semibold hover:underline">
                      En savoir plus →
                    </a>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="bg-white p-5 rounded-lg shadow-sm h-100 border-t-4 border-[#2529d8] hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => navigate('/news')}>
                    <div className="mb-4">
                      <FaUserCheck className="text-5xl text-[#2529d8]" />
                    </div>
                    <h4 className="mb-3 font-bold text-xl">Préparation aux entretiens</h4>
                    <p className="text-gray-600 mb-4">
                      Découvrez les meilleures pratiques pour réussir vos entretiens d'embauche et impressionner les recruteurs.
                    </p>
                    <a href="#" className="text-[#2529d8] font-semibold hover:underline">
                      En savoir plus →
                    </a>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="bg-white p-5 rounded-lg shadow-sm h-100 border-t-4 border-[#2529d8] hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => navigate('/news')}>
                    <div className="mb-4">
                      <FaChartLine className="text-5xl text-[#2529d8]" />
                    </div>
                    <h4 className="mb-3 font-bold text-xl">Gestion de carrière</h4>
                    <p className="text-gray-600 mb-4">
                      Développez votre carrière professionnelle avec nos conseils sur l'évolution professionnelle et le développement des compétences.
                    </p>
                    <a href="#" className="text-[#2529d8] font-semibold hover:underline">
                      En savoir plus →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Publications / Études de cas */}
          <div className="banner-bottom-wthree bg-light py-lg-5 py-md-4 py-3">
            <div className="container">
              <div className="inner-sec-w3ls py-lg-5 py-3">
                <div className="text-center mb-5">
                  <h3 className="tittle text-center mb-lg-5 mb-3">
                    <span>Publications</span>Publications & Études de cas
                  </h3>
                </div>
                
                <div className="row mt-5">
                  <div className="col-lg-6 col-md-6 mb-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm h-100 border-l-4 border-[#2529d8]">
                      <div className="mb-4 flex items-center">
                        <FaBook className="text-4xl text-[#2529d8] mr-3" />
                        <h4 className="font-bold text-xl">Études de cas</h4>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Découvrez comment nous avons accompagné nos clients dans leurs projets RH et les résultats obtenus.
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        Publications disponibles prochainement
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-lg-6 col-md-6 mb-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm h-100 border-l-4 border-[#2529d8]">
                      <div className="mb-4 flex items-center">
                        <FaFile className="text-4xl text-[#2529d8] mr-3" />
                        <h4 className="font-bold text-xl">Guides pratiques</h4>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Téléchargez nos guides pratiques sur la gestion des ressources humaines et le recrutement.
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        Publications disponibles prochainement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Événements */}
          <div className="container py-lg-5 py-md-4 py-3">
            <div className="inner-sec-w3ls py-lg-5 py-3">
              <div className="text-center mb-5">
                <h3 className="tittle text-center mb-lg-5 mb-3">
                  <span>Événements</span>Formations & Séminaires
                </h3>
              </div>
              
              <div className="row mt-5">
                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-lg shadow-sm h-100 border-t-4 border-[#2529d8]">
                    <div className="mb-4 flex items-center">
                      <FaGraduationCap className="text-5xl text-[#2529d8] mr-4" />
                      <div>
                        <h4 className="font-bold text-xl mb-2">Formations professionnelles</h4>
                        <p className="text-sm text-gray-600">Développement des compétences RH</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Participez à nos formations professionnelles conçues pour développer vos compétences en gestion des ressources humaines.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaCalendar className="mr-2" />
                      <span>Programme disponible sur demande</span>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-lg shadow-sm h-100 border-t-4 border-[#2529d8]">
                    <div className="mb-4 flex items-center">
                      <FaLightbulb className="text-5xl text-[#2529d8] mr-4" />
                      <div>
                        <h4 className="font-bold text-xl mb-2">Séminaires & Ateliers</h4>
                        <p className="text-sm text-gray-600">Échanges d'expériences</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Rejoignez nos séminaires et ateliers pour échanger avec des experts RH et découvrir les dernières tendances du secteur.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaCalendar className="mr-2" />
                      <span>Programme disponible sur demande</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-5 text-center">
                <button 
                  onClick={() => navigate('/contact')}
                  className="px-8 py-3 bg-[#2529d8] text-white rounded-lg hover:bg-[#1d20b0] transition-colors duration-200 font-semibold"
                >
                  Demander plus d'informations sur nos événements
                </button>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default Resources

