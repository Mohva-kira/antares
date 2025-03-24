import React from 'react'
import Container from '../components/Container'
import Steps from '../components/Steps'
import CategoryCard from '../components/CategoryCard'
import p1 from "../assets/images/p1.jpg"
import p2 from "../assets/images/p2.jpg"
import p3 from "../assets/images/p3.jpg"
import p4 from "../assets/images/p4.jpg"
import { FaBullhorn, FaGraduationCap, FaAccusoft, FaUsers } from "react-icons/fa6";
import ProcessCard from '../components/ProcessCard'

const How = () => {

  const categories = [
    {
      title : "Multimedia",
      nb : "15",
       img : p1,
       icon: <FaBullhorn />
        },
    {
      title : "Education",
      nb : "22",
      img : p2,
      icon: <FaGraduationCap />
        },
    {
      title : "Comptabilité",
      nb : "16",
      img : p3,
      icon: <FaAccusoft />
        },

    {
      title : "Rssources Humaine",
      nb : "4",
      img : p4,
      icon: <FaUsers />
        },
    {
      title : "Ingenieur",
      nb : "8",
      img : p4,
      icon: <FaUsers />
        },
    {
      title : "Construction",
      nb : "18",
      img : p4,
      icon: <FaUsers />
        },

  ]


  return (
    <Container>
    <ol class="breadcrumb justify-content-left">
        <li class="breadcrumb-item">
            <a href="index.html">Accueil</a>
        </li>
        <li class="breadcrumb-item active">Comment ça marche</li>
    </ol>

    <section class="banner-bottom-wthree py-lg-5 py-md-5 py-3">
        <div class="container">
            <div class="inner-sec-w3ls py-lg-5  py-3">
		
                <h3 class="tittle text-center mb-lg-4 mb-3">
                    <span>Some Info</span>Comment ça marche</h3>
			
                  {<Steps />}
          
            </div>
          </div>
      </section>

      <section class="banner-bottom-wthree pb-lg-5 py-3">
        <div class="container">
            <div class="inner-sec-w3ls pb-lg-5 py-3">
			
			
                <h3 class="tittle text-center mb-lg-4 mb-3">
                    <span>Notre Mission</span>Categories populaires</h3>

                    <div class="row populor_category_grids mt-5">
                                  {categories.map((item, index) => (
                                      <CategoryCard title={item.title} nb={item.nb} img={item.img} index={index} icon={item.icon} />
                                  ))

                                  }
                                   
    
                            
                              </div>
            </div>
        </div>
      </section>

      <section class="banner-bottom-wthree mid py-lg-5 py-3">
        <div class="container">
            <div class="inner-sec-w3ls py-lg-5   py-md-3 py-3">
                <div class="mid-info text-center pt-3">
                    <h3 class="tittle text-center cen mb-lg-5 mb-3">
                        <span>Vers la reussite</span>Faites la difference avec votre cv en ligne!</h3>
                    <p></p>
                    <div class="resume">
                        <a href="#" data-toggle="modal" data-target="#exampleModalCenter2">
                            <i class="far fa-user"></i> Créer un compte</a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="banner-bottom-wthree py-lg-5 py-md-5 py-3">
                    <div class="container">
                      <ProcessCard />
                    </div>
      </section>

    </Container>    
  )
}

export default How
