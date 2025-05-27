import React from 'react'
import Breadcumb from '../components/Breadcumb'
import Container from '../components/Container'

const Contact = () => {
  return (
    <Container>
      <section class=" dark:bg-slate-800" id="contact">
        <Breadcumb title={'Contact'} />
          <div class="mx-auto max-w-7xl px-4 bg-blue-50 my-4 rounded-lg py-16 sm:px-6 lg:px-8 lg:py-20">
              <div class="mb-4">
                  <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                      <p class="title text-center font-semibold uppercase tracking-wide ">
                          Contact
                      </p>
                      <h2
                          class="font-heading mb-4 font-bold tracking-tight tittle text-centertext-3xl sm:text-5xl">
                          Restons en contact
                      </h2>
                     
                  </div>
              </div>
              <div class="flex items-stretch justify-center">
                  <div class="grid md:grid-cols-2">
                      <div class="h-full pr-6">
                          <p class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                          Une question, un projet ou simplement besoin d’informations ?
                           N’hésitez pas à nous contacter ! Notre équipe est à votre écoute pour répondre à vos besoins 
                           et vous accompagner dans vos démarches. Remplissez le formulaire ci-dessous ou écrivez-nous directement, 
                           nous reviendrons vers vous dans les plus brefs délais.

                           </p>
                          <ul class="mb-6 md:mb-0">
                              <li class="flex">
                                  <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round" class="h-6 w-6">
                                          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                          <path
                                              d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                          </path>
                                      </svg>
                                  </div>
                                  <div class="ml-4 mb-4">
                                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-black">Notre adresse
                                      </h3>
                                      <p class="text-gray-600 dark:text-slate-400">ACI 2000  pres de Bougie ba</p>
                                      <p class="text-gray-600 dark:text-slate-400">Bamako, Mali</p>
                                  </div>
                              </li>
                              <li class="flex">
                                  <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-black">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round" class="h-6 w-6">
                                          <path
                                              d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                          </path>
                                          <path d="M15 7a2 2 0 0 1 2 2"></path>
                                          <path d="M15 3a6 6 0 0 1 6 6"></path>
                                      </svg>
                                  </div>
                                  <div class="ml-4 mb-4">
                                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-black">Contact
                                      </h3>
                                      <p class="text-gray-600 dark:text-slate-400">Mobile: +223 20 29 20 40</p>
                                      <p class="text-gray-600 dark:text-slate-400">Mail: info@antares-rh.com</p>
                                  </div>
                              </li>
                              <li class="flex">
                                  <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round" class="h-6 w-6">
                                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                          <path d="M12 7v5l3 3"></path>
                                      </svg>
                                  </div>
                                  <div class="ml-4 mb-4">
                                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-black">Working
                                          hours</h3>
                                      <p class="text-gray-600 dark:text-slate-400">Lundi - Vendredi: 08:00 - 17:00</p>
                                      {/* <p class="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p> */}
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                          <h2 class="mb-4 text-2xl font-bold dark:text-white">Rediger votre message</h2>
                          <form id="contactForm">
                              <div class="mb-6">
                                  <div class="mx-0 mb-1 sm:mb-4">
                                      <div class="mx-0 mb-1 sm:mb-4">
                                          <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Nom complet" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                      </div>
                                      <div class="mx-0 mb-1 sm:mb-4">
                                          <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="votre email" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                      </div>
                                  </div>
                                  <div class="mx-0 mb-1 sm:mb-4">
                                      <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Ecrivez votre message..." class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                                  </div>
                              </div>
                              <div class="text-center">
                                  <button type="submit" class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Evnoyer le Message</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
  </section>
</Container>
  )
}

export default Contact
