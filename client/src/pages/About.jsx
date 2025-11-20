import React from 'react'
import {
  FaUsers,
  FaBullhorn,
  FaGraduationCap,
  FaFile,
  FaUserTie,
  FaIndustry,
} from "react-icons/fa6";
import {
  FaCheckCircle,
  FaHandshake,
  FaLock,
} from "react-icons/fa";
import Breadcumb from '../components/Breadcumb'
import Container from '../components/Container'
import Headers from '../components/Headers'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

// Variable pour activer/désactiver la section équipe
const SHOW_TEAM_SECTION = false; // Mettre à true quand les données sont disponibles
const TEAM_MEMBERS = []; // Remplir avec les données réelles

const About = () => {
  return (
    <>
      
      <Container>
        <section className="py-lg-5 py-md-5 py-3 bg-white">
          <Breadcumb title={'À propos'} />
          
          {/* Section Introduction - Version moyenne */}
          <div className="container py-lg-5 py-md-4 py-3">
            <div className="inner-sec-w3ls py-lg-5 py-3">
              <div className="text-center mb-5">
                <h3 className="tittle text-center mb-lg-4 mb-3">
                  <span className="text-[#2529d8]">À propos</span>Qui sommes-nous ?
                </h3>
              </div>
              
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div className="mb-5">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Depuis 2007, Antarès RH accompagne entreprises locales et multinationales en Afrique de l'Ouest dans la gestion et le développement de leurs ressources humaines.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Au-delà du recrutement, nous construisons des ponts durables entre organisations et talents, apportons des solutions concrètes aux défis RH, transformons des environnements informels en cadres structurés, conformes et performants.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Notre mission : <strong>recruter, fournir, conseiller et accompagner</strong> pour donner aux organisations les moyens de réussir avec des équipes solides et des processus fiables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Notre Mission */}
          <div className="banner-bottom-wthree bg-light py-lg-5 py-md-4 py-3">
            <div className="container">
              <div className="inner-sec-w3ls py-lg-5 py-3">
              <div className="text-center mb-5">
                <h3 className="tittle text-center mb-lg-4 mb-3">
                  <span className="text-[#2529d8]">Notre mission</span>Excellence et engagement
                </h3>
              </div>
                
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <p className="text-lg text-gray-700 leading-relaxed text-center">
                        Nos consultants allient une fine connaissance du contexte local à la maîtrise des meilleures pratiques internationales.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed text-center mt-3">
                        <strong>Leur mission :</strong> bâtir des ponts solides entre talents et organisations, et donner à nos clients les moyens de réussir dans la durée.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Notre Histoire - Version longue */}
          <div className="container py-lg-5 py-md-4 py-3">
            <div className="inner-sec-w3ls py-lg-5 py-3">
              <div className="text-center mb-5">
                <h3 className="tittle text-center mb-lg-4 mb-3">
                  <span className="text-[#2529d8]">Notre histoire</span>Près de 20 ans d'expertise
                </h3>
              </div>
              
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div className="mb-4">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Fondée en 2007, Antarès RH croit que <strong>le capital humain est le premier levier de performance organisationnelle</strong>.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Depuis près de 20 ans, nous accompagnons entreprises locales et grands groupes internationaux en Afrique de l'Ouest.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Notre rôle va au-delà du recrutement : nous fournissons des personnels qualifiés, conseillons, formons, aidons nos partenaires à renforcer leurs pratiques RH.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Nous contribuons à un cadre structurant et durable dans des environnements parfois marqués par l'informalité, <strong>transformant les contraintes en opportunités de croissance</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Interview Jeune Afrique */}
          <div className="banner-bottom-wthree bg-light py-lg-5 py-md-4 py-3">
            <div className="container">
              <div className="inner-sec-w3ls py-lg-5 py-3">
              <div className="text-center mb-5">
                <h3 className="tittle text-center mb-lg-4 mb-3">
                  <span className="text-[#2529d8]">Notre engagement</span>Interview Jeune Afrique
                </h3>
              </div>
                
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    <div className="bg-white p-5 rounded-lg shadow-sm mb-4">
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        <strong>Nos consultants allient la connaissance fine du contexte local à la maîtrise des techniques de gestion des ressources humaines.</strong>
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Le cabinet Antarès emploie une trentaine de consultants permanents. Nous intervenons à l'échelle de l'ensemble du territoire malien. Au cours des années passées, nous avons acquis une bonne connaissance des problématiques de ressources humaines dans une large gamme de secteurs, notamment les mines, l'industrie manufacturière et la distribution.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Nos consultants ont une connaissance fine du tissu économique local et de ses contraintes, notamment juridiques et réglementaires. Ils maîtrisent parfaitement les techniques performantes de la gestion des ressources humaines mais ils ont également des compétences dans d'autres domaines (droit, ingénierie, finance, stratégie commerciale, entrepreneuriat, etc.). Leur moyenne d'âge est de 35 ans.
                      </p>
                      <div className="text-center mt-4">
                        <a 
                          href="/assets/docs/interview-jeune-afrique.md" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-[#2529d8] text-white rounded-lg hover:bg-[#1d20b0] transition-colors duration-200"
                        >
                          <FaFile className="mr-2" />
                          Lire l'interview complète avec M. Mary Moussa Coulibaly
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Valeurs et Engagements */}
          <div className="container py-lg-5 py-md-4 py-3">
            <div className="inner-sec-w3ls py-lg-5 py-3">
              <div className="text-center mb-5">
                <h3 className="tittle text-center mb-lg-5 mb-3">
                  <span className="text-[#2529d8]">Nos valeurs</span>Valeurs et engagements
                </h3>
              </div>
              
              <div className="row mt-5">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm h-100 border-t-4 border-[#2529d8]">
                    <div className="mb-3">
                      <FaCheckCircle className="text-4xl text-[#2529d8] mx-auto" />
                    </div>
                    <h4 className="mb-3 font-bold text-lg">Transparence</h4>
                    <p className="text-gray-600">
                      Nous prônons une communication claire et transparente dans toutes nos relations avec nos clients et partenaires.
                    </p>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm h-100 border-t-4 border-[#2529d8]">
                    <div className="mb-3">
                      <FaLock className="text-4xl text-[#2529d8] mx-auto" />
                    </div>
                    <h4 className="mb-3 font-bold text-lg">Conformité</h4>
                    <p className="text-gray-600">
                      Respect absolu des règles en matière de droit et de fiscalité, ainsi que des termes d'un contrat signé avec un client.
                    </p>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm h-100 border-t-4 border-[#2529d8]">
                    <div className="mb-3">
                      <FaHandshake className="text-4xl text-[#2529d8] mx-auto" />
                    </div>
                    <h4 className="mb-3 font-bold text-lg">Éthique</h4>
                    <p className="text-gray-600">
                      L'alignement sur les valeurs est un principe fondamental de management au sein d'Antarès. Ces valeurs guident nos décisions quotidiennes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Équipe Dirigeante & Consultants - Désactivable */}
          {SHOW_TEAM_SECTION && TEAM_MEMBERS.length > 0 && (
            <div className="banner-bottom-wthree bg-light py-lg-5 py-md-4 py-3">
              <div className="container">
                <div className="inner-sec-w3ls py-lg-5 py-3">
                  <div className="text-center mb-5">
                    <h3 className="tittle text-center mb-lg-5 mb-3">
                      <span className="text-[#2529d8]">Notre équipe</span>Équipe dirigeante & Consultants
                    </h3>
                  </div>
                  
                  <div className="row mt-5">
                    {TEAM_MEMBERS.map((member, index) => (
                      <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm h-100">
                          <div className="mb-3">
                            <img 
                              src={member.photo || '/default-avatar.png'} 
                              alt={member.name}
                              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#2529d8]"
                            />
                          </div>
                          <h4 className="mb-2 font-bold text-lg">{member.name}</h4>
                          <p className="text-sm text-[#2529d8] mb-2">{member.position}</p>
                          <p className="text-sm text-gray-600">{member.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section Références Clients / Secteurs d'activité */}
          <div className="container py-lg-5 py-md-4 py-3">
            <div className="inner-sec-w3ls py-lg-5 py-3">
              <div className="text-center mb-5">
                <h3 className="tittle text-center mb-lg-5 mb-3">
                  <span className="text-[#2529d8]">Notre expertise</span>Références clients & Secteurs d'activité
                </h3>
              </div>
              
              <div className="row mt-5">
                <div className="col-lg-12 mb-4">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center">
                    Au cours des années passées, nous avons acquis une bonne connaissance des problématiques de ressources humaines dans une large gamme de secteurs.
                  </p>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="text-center p-5 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm h-100 border-l-4 border-[#2529d8]">
                    <div className="mb-3">
                      <FaIndustry className="text-5xl text-[#2529d8] mx-auto" />
                    </div>
                    <h4 className="mb-3 font-bold text-xl">Mines</h4>
                    <p className="text-gray-600">
                      Expertise dans le secteur minier avec une spécialisation en sous-traitance pour compagnies minières.
                    </p>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="text-center p-5 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm h-100 border-l-4 border-[#2529d8]">
                    <div className="mb-3">
                      <FaUsers className="text-5xl text-[#2529d8] mx-auto" />
                    </div>
                    <h4 className="mb-3 font-bold text-xl">Industrie Manufacturière</h4>
                    <p className="text-gray-600">
                      Accompagnement des entreprises manufacturières dans la gestion et le développement de leurs ressources humaines.
                    </p>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="text-center p-5 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm h-100 border-l-4 border-[#2529d8]">
                    <div className="mb-3">
                      <FaBullhorn className="text-5xl text-[#2529d8] mx-auto" />
                    </div>
                    <h4 className="mb-3 font-bold text-xl">Distribution</h4>
                    <p className="text-gray-600">
                      Solutions RH adaptées aux défis du secteur de la distribution et du commerce.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-5 text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nous disposons de très solides références qui sont un encouragement à poursuivre notre activité et témoignent de la confiance que nos clients nous accordent.
                </p>
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

export default About
