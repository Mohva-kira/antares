import React from "react";

const Footer = () => {
  return (
    <footer class="footer-emp-w3layouts bg-dark dotts py-lg-5 py-3">
      <div class="container-fluid px-lg-5 px-3">
        <div class="row footer-top">
          <div class="col-lg-3 footer-grid-wthree-w3ls">
            <div class="footer-title">
              <h3>À propos</h3>
            </div>
            <div class="footer-text">
              <p>
                Antarès RH connecte talents et organisations en Afrique de l'Ouest depuis près de 20 ans. Recrutement, conseil et structuration RH : nous aidons entreprises locales et multinationales à construire des équipes solides et des pratiques fiables.
              </p>
              <ul class="footer-social text-left mt-lg-4 mt-3">
                <li class="mx-2">
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <span class="fab fa-linkedin-in"></span>
                  </a>
                </li>
                <li class="mx-2">
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <span class="fab fa-facebook-f"></span>
                  </a>
                </li>
                <li class="mx-2">
                  <a href="https://wa.me/22320292040" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <span class="fab fa-whatsapp"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 footer-grid-wthree-w3ls">
            <div class="footer-title">
              <h3>Restons en contact</h3>
            </div>
            <div class="contact-info">
              <h4>Adresse :</h4>
              <p>
                Hamdallaye ACI 2000 - Immeuble Kanté - Bamako, Mali
              </p>
              <div class="phone">
                <h4>Contact :</h4>
                <p>
                  <a href="tel:+22320292040">Téléphone : +223 20 29 20 40</a>
                </p>
                <p>
                  Email :
                  <a href="mailto:antares.ml@gmail.com">antares.ml@gmail.com</a>
                </p>
                <p>
                  Site web :
                  <a href="https://www.antares-rh.com" target="_blank" rel="noopener noreferrer">www.antares-rh.com</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 footer-grid-wthree-w3ls">
            <div class="footer-title">
              <h3>Raccourcis</h3>
            </div>
            <ul class="links">
              <li>
                <a href="/offres">Offres d'emploi</a>
              </li>
              <li>
                <a href="/candidats">Déposer CV</a>
              </li>
              <li>
                <a href="/news">Alertes</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>

            <div class="clearfix"></div>
          </div>
        </div>
        <div class="copyright mt-4">
          <div class="row">
            <div class="col-lg-12">
              <p class="copy-right text-center mb-2">
                &copy; 2024 Antarès RH. Tous droits réservés | Design par
                <a href="https://flyentreprise.com/" target="_blank" rel="noopener noreferrer"> Fly </a>
              </p>
              <p class="text-center">
                <a href="/mentions-legales" class="text-white mr-3">Mentions légales</a>
                <span class="text-white">|</span>
                <a href="/politique-confidentialite" class="text-white ml-3">Politique de confidentialité</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

