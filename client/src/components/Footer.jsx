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
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis voluptate exercitationem quidem, maiores ea possimus
                voluptatem accusantium ullam nesciunt mollitia distinctio quod
                tempora doloremque, quas vel rerum repudiandae. Nisi,
                architecto!
              </p>
              <ul class="footer-social text-left mt-lg-4 mt-3">
                <li class="mx-2">
                  <a href="#">
                    <span class="fab fa-facebook-f"></span>
                  </a>
                </li>
                <li class="mx-2">
                  <a href="#">
                    <span class="fab fa-twitter"></span>
                  </a>
                </li>
                <li class="mx-2">
                  <a href="#">
                    <span class="fab fa-google-plus-g"></span>
                  </a>
                </li>
                <li class="mx-2">
                  <a href="#">
                    <span class="fab fa-linkedin-in"></span>
                  </a>
                </li>
                <li class="mx-2">
                  <a href="#">
                    <span class="fas fa-rss"></span>
                  </a>
                </li>
                <li class="mx-2">
                  <a href="#">
                    <span class="fab fa-vk"></span>
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
                HAMDALLAYE ACI - IMMEUBLE BALDE - BLOC 1 - BAMAKO. BP E 4068{" "}
              </p>
              <div class="phone">
                <h4>Contact :</h4>
                <p>
                  <a href="tel:+22366768705">Phone : +223 20 29 20 40</a>{" "}
                </p>
                <p>
                  Email :
                  <a href="mailto:info@example.com">info@antares-rh.com</a>
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
                <a href="/">Accueil</a>
              </li>

              <li>
                <a href="/offres">Offres</a>
              </li>
              <li>
                <a href="/candidats">Candidats</a>
              </li>
            </ul>
            <ul class="links">
              <li>
                <a href="/how">Comment ça marche?</a>
              </li>
              <li>
                <a href="/contact">Assistance</a>
              </li>
              <li>
                <a href="/employeurs">Employeurs</a>
              </li>
            </ul>

            <div class="clearfix"></div>
          </div>
        </div>
        <div class="copyright mt-4">
          <p class="copy-right text-center ">
            &copy; 2024 Antares. All Rights Reserved | Design by
            <a href="https://flyentreprise.com/"> Fly </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
