import React from 'react'
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFileInvoiceDollar,
  FaCalendarCheck,
} from "react-icons/fa";
import Breadcumb from '../components/Breadcumb'
import Container from '../components/Container'
import Headers from '../components/Headers'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { useNavigate } from 'react-router-dom'
import { styles } from '../config/colors'

const Contact = () => {
  const navigate = useNavigate();
  
  return (
    <>
      
      <Container>
      <section className="bg-white" id="contact">
        <Breadcumb title={'Contact'} />
          <div className="mx-auto max-w-7xl px-4 bg-white my-4 rounded-lg py-16 sm:px-6 lg:px-8 lg:py-20">
              <div className="mb-4">
                  <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                      <p className="text-[#2529d8] text-center font-semibold uppercase tracking-wide text-sm mb-2">
                          Contact
                      </p>
                      <h2
                          className="font-heading mb-4 font-bold tracking-tight text-[#2529d8] text-center text-3xl sm:text-5xl">
                          Restons en contact
                      </h2>
                     
                  </div>
              </div>
              <div className="flex items-stretch justify-center">
                  <div className="grid md:grid-cols-2 gap-6">
                      <div className="h-full pr-6">
                          <p className="mt-3 mb-12 text-lg text-gray-600">
                          Une question, un projet ou simplement besoin d’informations ?
                           N’hésitez pas à nous contacter ! Notre équipe est à votre écoute pour répondre à vos besoins 
                           et vous accompagner dans vos démarches. Remplissez le formulaire ci-dessous ou écrivez-nous directement, 
                           nous reviendrons vers vous dans les plus brefs délais.

                           </p>
                          <ul className="mb-6 md:mb-0">
                              <li className="flex mb-6">
                                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#2529d8] text-white flex-shrink-0">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round" className="h-6 w-6">
                                          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                          <path
                                              d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                          </path>
                                      </svg>
                                  </div>
                                  <div className="ml-4">
                                      <h3 className="mb-2 text-lg font-semibold leading-6 text-gray-900">Notre adresse
                                      </h3>
                                      <p className="text-gray-600">Hamdallaye ACI 2000</p>
                                      <p className="text-gray-600">Immeuble Kanté</p>
                                      <p className="text-gray-600">Bamako, Mali</p>
                                  </div>
                              </li>
                              <li className="flex mb-6">
                                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#2529d8] text-white flex-shrink-0">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round" className="h-6 w-6">
                                          <path
                                              d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                          </path>
                                          <path d="M15 7a2 2 0 0 1 2 2"></path>
                                          <path d="M15 3a6 6 0 0 1 6 6"></path>
                                      </svg>
                                  </div>
                                  <div className="ml-4">
                                      <h3 className="mb-2 text-lg font-semibold leading-6 text-gray-900">Contact
                                      </h3>
                                      <p className="text-gray-600">Téléphone: +223 20 29 20 40</p>
                                      <p className="text-gray-600">Email: antares.ml@gmail.com</p>
                                      <p className="text-gray-600">Site web: www.antares-rh.com</p>
                                  </div>
                              </li>
                              <li className="flex mb-6">
                                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#2529d8] text-white flex-shrink-0">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round" className="h-6 w-6">
                                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                          <path d="M12 7v5l3 3"></path>
                                      </svg>
                                  </div>
                                  <div className="ml-4">
                                      <h3 className="mb-2 text-lg font-semibold leading-6 text-gray-900">Heure d'ouvertures</h3>
                                      <p className="text-gray-600">Lundi - Vendredi: 08:00 - 17:00</p>
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <div className={`${styles.form.container} h-fit`} id="form">
                          <h2 className="mb-6 text-2xl font-bold text-gray-800">Rédiger votre message</h2>
                          <form id="contactForm">
                              <div className="mb-6">
                                  <div className="mx-0 mb-4 sm:mb-4">
                                      <div className="mx-0 mb-4">
                                          <input
                                            type="text"
                                            id="name"
                                            autoComplete="given-name"
                                            placeholder="Nom complet"
                                            className={styles.input.base}
                                            name="name"/>
                                      </div>
                                      <div className="mx-0 mb-4">
                                          <input
                                            type="email"
                                            id="email"
                                            autoComplete="email"
                                            placeholder="Votre email"
                                            className={styles.input.base}
                                            name="email"/>
                                      </div>
                                  </div>
                                  <div className="mx-0 mb-4">
                                      <textarea
                                        id="textarea"
                                        name="textarea"
                                        cols="30"
                                        rows="5"
                                        placeholder="Écrivez votre message..."
                                        className={styles.input.base}
                                        style={{ resize: 'vertical' }}></textarea>
                                  </div>
                              </div>
                              <div className="text-center">
                                  <button type="submit" className={styles.button.primary + " w-full py-3"}>
                                    Envoyer le message
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
              
              {/* CTA Section */}
              <div className="mt-8 mb-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className={`${styles.button.primary} flex items-center justify-center space-x-3 py-4`}
                  >
                    <FaFileInvoiceDollar className="text-xl" />
                    <span>Demander un devis</span>
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className={`${styles.button.secondary} flex items-center justify-center space-x-3 py-4`}
                  >
                    <FaCalendarCheck className="text-xl" />
                    <span>Prendre rendez-vous</span>
                  </button>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mt-8 mb-4">
                <h3 className="text-2xl font-bold mb-4 text-center">Notre localisation</h3>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.4774354146757!2d-7.971574284735792!3d12.638899489143437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM4JzIwLjAiTiA3wrA1OCcxNy42Ilc!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Antarès RH - Hamdallaye ACI 2000, Immeuble Kanté, Bamako, Mali"
                  ></iframe>
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

export default Contact
