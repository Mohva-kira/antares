import React from 'react'
import Container from '../components/Container'
import Breadcumb from '../components/Breadcumb';
import { useParams } from 'react-router-dom';
import { param } from 'jquery';
import img2 from '../assets/images/b2.jpg'
import { CiLocationOn, CiFacebook, CiTwitter, CiLinkedin, CiViewList} from "react-icons/ci";
import { FaRegEye, FaUsers } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";





const EmployerDetails = () => {
    const {name} = useParams()
    console.log('params', name)

    const data = [
        {
            name: 'Edm',
            adresse: 'Avenue de la Liberté, Bamako',
            nbApplication: 15,
            logo: 'edm-logo.png',
            date: new Date('2024-11-01'),
            nbViews: 3500,
            facebook: 'https://www.facebook.com/EDMSA',
            linkedin: 'https://www.linkedin.com/company/edm-sa',
            twitter: 'https://twitter.com/edm_mali',
            postedJobs: 30,
            category: 'Energie',
            teamSize: 2000,
            description: 'Leader de l\'énergie au Mali, fournissant de l\'électricité à des milliers de foyers.',
        },
        {
            name: 'Orange Mali',
            adresse: 'Quartier du Fleuve, Bamako',
            nbApplication: 20,
            logo: 'orange-mali-logo.png',
            date: new Date('2024-10-15'),
            nbViews: 4500,
            facebook: 'https://www.facebook.com/orange.mali',
            linkedin: 'https://www.linkedin.com/company/orange-mali',
            twitter: 'https://twitter.com/orange_mali',
            postedJobs: 40,
            category: 'Télécommunications',
            teamSize: 300,
            description: 'Opérateur de télécommunication leader au Mali, offrant des services mobiles et internet.',
        },
        {
            name: 'Société Malienne de Gestion de l\'Eau Potable (SOMAGEP)',
            adresse: 'Baco Djicoroni, Bamako',
            nbApplication: 8,
            logo: 'somagep-logo.png',
            date: new Date('2024-09-01'),
            nbViews: 1500,
            facebook: 'https://www.facebook.com/somagep',
            linkedin: 'https://www.linkedin.com/company/somagep',
            twitter: 'https://twitter.com/somagep_mali',
            postedJobs: 12,
            category: 'Eau et assainissement',
            teamSize: 500,
            description: 'Gestionnaire de l\'eau potable au Mali, garantissant l\'accès à une eau de qualité.',
        },
        {
            name: 'Banque Malienne de Solidarité (BMS)',
            adresse: 'Hippodrome, Bamako',
            nbApplication: 10,
            logo: 'bms-logo.png',
            date: new Date('2024-08-20'),
            nbViews: 1800,
            facebook: 'https://www.facebook.com/BMS-SA',
            linkedin: 'https://www.linkedin.com/company/bms-sa',
            twitter: 'https://twitter.com/bms_sa',
            postedJobs: 20,
            category: 'Banque',
            teamSize: 1000,
            description: 'Institution bancaire offrant des services financiers accessibles à tous.',
        },
        {
            name: 'SONATAM (Société Nationale des Tabacs et Allumettes du Mali)',
            adresse: 'ACI 2000, Bamako',
            nbApplication: 5,
            logo: 'sonatam-logo.png',
            date: new Date('2024-07-10'),
            nbViews: 900,
            facebook: 'https://www.facebook.com/sonatam',
            linkedin: 'https://www.linkedin.com/company/sonatam',
            twitter: 'https://twitter.com/sonatam_mali',
            postedJobs: 8,
            category: 'Tabac',
            teamSize: 300,
            description: 'Production et commercialisation de tabac et d\'allumettes au Mali.',
        },
        {
            name: 'Sotelma-Malitel',
            adresse: 'Quartier du Fleuve, Bamako',
            nbApplication: 17,
            logo: 'sotelma-logo.png',
            date: new Date('2024-09-30'),
            nbViews: 2800,
            facebook: 'https://www.facebook.com/sotelma',
            linkedin: 'https://www.linkedin.com/company/sotelma-malitel',
            twitter: 'https://twitter.com/sotelma_mali',
            postedJobs: 35,
            category: 'Télécommunications',
            teamSize: 250,
            description: 'Opérateur historique de téléphonie au Mali, offrant des services variés.',
        },
        {
            name: 'La Poste du Mali',
            adresse: 'Place de la Poste, Bamako',
            nbApplication: 12,
            logo: 'poste-mali-logo.png',
            date: new Date('2024-11-10'),
            nbViews: 1100,
            facebook: 'https://www.facebook.com/lapostedumali',
            linkedin: 'https://www.linkedin.com/company/poste-mali',
            twitter: 'https://twitter.com/poste_mali',
            postedJobs: 15,
            category: 'Logistique et courrier',
            teamSize: 600,
            description: 'Service national de poste, assurant la distribution de courrier et colis au Mali.',
        },
        {
            name: 'Transrail Mali SA',
            adresse: 'Quartier du Fleuve, Bamako',
            nbApplication: 6,
            logo: 'transrail-logo.png',
            date: new Date('2024-06-25'),
            nbViews: 950,
            facebook: 'https://www.facebook.com/transrailmali',
            linkedin: 'https://www.linkedin.com/company/transrail',
            twitter: 'https://twitter.com/transrail_mali',
            postedJobs: 5,
            category: 'Transport ferroviaire',
            teamSize: 200,
            description: 'Société exploitant le réseau ferroviaire pour le transport de personnes et marchandises.',
        },
        {
            name: 'OK Clean',
            adresse: 'ACI 2000, Bamako',
            nbApplication: 3,
            logo: 'ok-clean-logo.png',
            date: new Date('2024-08-05'),
            nbViews: 500,
            facebook: 'https://www.facebook.com/okclean',
            linkedin: 'https://www.linkedin.com/company/ok-clean',
            twitter: 'https://twitter.com/okclean_mali',
            postedJobs: 10,
            category: 'Services de nettoyage',
            teamSize: 80,
            description: 'Entreprise spécialisée dans le nettoyage industriel et domestique.',
        },
        {
            name: 'Azalaï Hotels',
            adresse: 'Quartier du Fleuve, Bamako',
            nbApplication: 9,
            logo: 'azalai-logo.png',
            date: new Date('2024-10-22'),
            nbViews: 2500,
            facebook: 'https://www.facebook.com/azalaihotels',
            linkedin: 'https://www.linkedin.com/company/azalaihotels',
            twitter: 'https://twitter.com/azalaihotels',
            postedJobs: 18,
            category: 'Hôtellerie',
            teamSize: 150,
            description: 'Groupe hôtelier offrant des services d\'hébergement et de restauration de qualité.',
        }
    ]

    const found = data.find(item =>  item.name == name )
   
  return (
    <Container>
        <Breadcumb title={`employeurs / ${name}`} />
        <section className="banner-bottom-wthree py-lg-5 py-md-5 py-3">
            <div className="container">
                <div className="inner-sec-w3ls py-lg-5  py-3 bg-white p-4 rounded-lg    ">
                    <div className="single-user-candidate">
                        <div className="user-detail-info text-center">
                            <div className="user-pic w-full flex items-center justify-center">
                                <img src={img2} className="img-fluid rounded-circle" alt=""/>
                            </div>
                            <div className="user-content-info emply-resume-info text-center mt-4">
                                <h4>
                                    <a href="#">{found?.name}</a>
                                </h4>
                                <p className='w-full flex justify-center space-x-3'>
                                    <CiLocationOn size={25}  /> {found?.adresse}</p>
                                <div className="skills-info my-4">
                                    <span>Candidature {found?.nbApplication}</span>
                                    <span className="mx-3">Date: {found?.date.toLocaleDateString()}</span>
                                    <span>Vues : {found?.nbViews}</span>
                                </div>
                                <ul className="footer-social text-center mt-lg-4 mt-5">

                                    <li className="mx-2">
                                        <a href={found?.facebook}>
                                         <CiFacebook size={25} />
                                        </a>
                                    </li>
                                    <li className="mx-2">
                                        <a href={found?.twitter}>
                                            <CiTwitter size={25} />
                                        </a>
                                    </li>
                                    <li className="mx-2">
                                        <a href={found?.linkedin}>
                                           <CiLinkedin size={25} />
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
    
                    <div className="row qualification-details mt-5">
                        <div className="col-md-3 qual-grid">
                            <div className="qual-icon text-center">
                                <FaRegEye size={45} />
                            </div>
                            <div className="qual-info">
                                <h4>Vues</h4>
                                <p>{found?.nbViews}</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="col-md-3 qual-grid">
                            <div className="qual-icon text-center">
                            <IoIosPaper size={45} />
                            </div>
                            <div className="qual-info">
                                <h4>Offres</h4>
                                <p>{found?.postedJobs}</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="col-md-3 qual-grid">
                            <div className="qual-icon text-center">
                                <CiViewList size={45} className='primary' />
                            </div>
                            <div className="qual-info">
                                <h4>Categories</h4>
                                <p>{found?.category}</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="col-md-3 qual-grid">
                            <div className="qual-icon text-center">
                            <FaUsers size={45} className='text-orange-500' />
                            </div>
                            <div className="qual-info">
                                <h4>Team Size</h4>
                                <p>{found?.teamSize}</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>

                    <div className="candidate-ab-info mt-5">
                        <h5 className="j-b mb-3">A propos {found?.name}</h5>
                        <p>{found?.description}.</p>
                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor incididunt ut labore et dolore .Nam arcu mauris, tincidunt sed convallis non, egestas ut lacus. Cras sapien urna, malesuada ut varius consequat, hendrerit nisl. Aliquam vestibulum, odio non ullamcorper malesuada.</p>
                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor incididunt ut labore et dolore .Nam arcu mauris, tincidunt sed convallis non, egestas ut lacus. Cras sapien urna, malesuada ut varius consequat, hendrerit nisl. Aliquam vestibulum, odio non ullamcorper malesuada.</p>
                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor incididunt ut labore et dolore .Nam arcu mauris, tincidunt sed convallis non, egestas ut lacus. Cras sapien urna, malesuada ut varius consequat, hendrerit nisl. Aliquam vestibulum, odio non ullamcorper malesuada.</p>
                    </div>
                    <div className="candidate-history-info mt-5">
                        <h5 className="j-b mb-5">Les offres de {found?.name}
                        </h5>
                        <div className="candidate-story-grid">

                            {

                            }
                            <div className="job-post-main row">
                                <div className="col-md-9 job-post-info text-left">
                                    <div className="job-post-icon">
                                        <i className="fas fa-briefcase"></i>
                                    </div>
                                    <div className="job-single-sec">
                                        <h4>
                                            <a href="#">User Interface Project Manager</a>
                                        </h4>
                                        <p className="my-2">Technology Management Consulting</p>
                                        <ul className="job-list-info d-flex">
                                            <li>
                                                <i className="fas fa-briefcase"></i> Comera</li>
                                            <li>
                                                <i className="fas fa-map-marker-alt"></i> California</li>
                                            <li>
                                                <i className="fas fa-dollar-sign"></i> 300000 - 500000 / Annum</li>
                                        </ul>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-3 job-single-time text-right">
                                    <span className="job-time">
                                        <i className="far fa-heart"></i> Full Time</span>
                                    <a href="#" className="aply-btn ">Appy Now</a>
                                </div>
                            </div>
            
                            <div className="job-post-main row my-3">
                                <div className="col-md-9 job-post-info text-left">
                                    <div className="job-post-icon">
                                        <i className="fas fa-briefcase"></i>
                                    </div>
                                    <div className="job-single-sec">
                                        <h4>
                                            <a href="#">
                                                Regional Sales Manager</a>
                                        </h4>
                                        <p className="my-2">Company Name goes here</p>
                                        <ul className="job-list-info d-flex">
                                            <li>
                                                <i className="fas fa-briefcase"></i> Comera</li>
                                            <li>
                                                <i className="fas fa-map-marker-alt"></i> California</li>
                                            <li>
                                                <i className="fas fa-dollar-sign"></i> 300000 - 500000 / Annum</li>
                                        </ul>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-3 job-single-time text-right">
                                    <span className="job-time">
                                        <i className="far fa-heart"></i> Part Time</span>
                                    <a href="#" className="aply-btn ">Appy Now</a>
                                </div>
                            </div>


                            <div className="job-post-main row">
                                <div className="col-md-9 job-post-info text-left">
                                    <div className="job-post-icon">
                                        <i className="fas fa-briefcase"></i>
                                    </div>
                                    <div className="job-single-sec">
                                        <h4>
                                            <a href="#">
                                                Web Designer / Developer</a>
                                        </h4>
                                        <p className="my-2">Company Name goes here</p>
                                        <ul className="job-list-info d-flex">
                                            <li>
                                                <i className="fas fa-briefcase"></i> Chicago</li>
                                            <li>
                                                <i className="fas fa-map-marker-alt"></i> California</li>
                                            <li>
                                                <i className="fas fa-dollar-sign"></i> 300000 - 500000 / Annum</li>
                                        </ul>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-3 job-single-time text-right">
                                    <span className="job-time">
                                        <i className="far fa-heart"></i> Full Time</span>
                                    <a href="#" className="aply-btn ">Appy Now</a>
                                </div>
                            </div>
            

                            <div className="job-post-main row mt-3">
                                <div className="col-md-9 job-post-info text-left">
                                    <div className="job-post-icon">
                                        <i className="fas fa-briefcase"></i>
                                    </div>
                                    <div className="job-single-sec">
                                        <h4>
                                            <a href="#">
                                                Marketing Director</a>
                                        </h4>
                                        <p className="my-2">Technology Management Consulting</p>
                                        <ul className="job-list-info d-flex">
                                            <li>
                                                <i className="fas fa-briefcase"></i> Rennes</li>
                                            <li>
                                                <i className="fas fa-map-marker-alt"></i> France</li>
                                            <li>
                                                <i className="fas fa-dollar-sign"></i> 300000 - 500000 / Annum</li>
                                        </ul>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-3 job-single-time text-right">
                                    <span className="job-time">
                                        <i className="far fa-heart"></i> Full Time</span>
                                    <a href="#" className="aply-btn ">Appy Now</a>
                                </div>
                            </div>
        

                            <div className="job-post-main row mt-3">
                                <div className="col-md-9 job-post-info text-left">
                                    <div className="job-post-icon">
                                        <i className="fas fa-briefcase"></i>
                                    </div>
                                    <div className="job-single-sec">
                                        <h4>
                                            <a href="#">Developer for Site Maintenance </a>
                                        </h4>
                                        <p className="my-2">Company nName gose here</p>
                                        <ul className="job-list-info d-flex">
                                            <li>
                                                <i className="fas fa-briefcase"></i> Comera</li>
                                            <li>
                                                <i className="fas fa-map-marker-alt"></i> California</li>
                                            <li>
                                                <i className="fas fa-dollar-sign"></i> 300000 - 500000 / Annum</li>
                                        </ul>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-3 job-single-time text-right">
                                    <span className="job-time">
                                        <i className="far fa-heart"></i> Part Time</span>
                                    <a href="#" className="aply-btn ">Appy Now</a>
                                </div>
                            </div>
                    

                            <div className="job-post-main row my-3">
                                <div className="col-md-9 job-post-info text-left">
                                    <div className="job-post-icon">
                                        <i className="fas fa-briefcase"></i>
                                    </div>
                                    <div className="job-single-sec">
                                        <h4>
                                            <a href="#">
                                                Content Writer and Speaker</a>
                                        </h4>
                                        <p className="my-2">Company Name goes here</p>
                                        <ul className="job-list-info d-flex">
                                            <li>
                                                <i className="fas fa-briefcase"></i> Comera</li>
                                            <li>
                                                <i className="fas fa-map-marker-alt"></i> California</li>
                                            <li>
                                                <i className="fas fa-dollar-sign"></i> 200000 - 100000 / Annum</li>
                                        </ul>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-3 job-single-time text-right">
                                    <span className="job-time">
                                        <i className="far fa-heart"></i> Part Time</span>
                                    <a href="#" className="aply-btn ">Appy Now</a>
                                </div>
                            </div>
                

                            <div className="job-post-main row">
                                <div className="col-md-9 job-post-info text-left">
                                    <div className="job-post-icon">
                                        <i className="fas fa-briefcase"></i>
                                    </div>
                                    <div className="job-single-sec">
                                        <h4>
                                            <a href="#">
                                                Web Designer / Developer</a>
                                        </h4>
                                        <p className="my-2">Company Name goes here</p>
                                        <ul className="job-list-info d-flex">
                                            <li>
                                                <i className="fas fa-briefcase"></i> Chicago</li>
                                            <li>
                                                <i className="fas fa-map-marker-alt"></i> California</li>
                                            <li>
                                                <i className="fas fa-dollar-sign"></i> 300000 - 500000 / Annum</li>
                                        </ul>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-3 job-single-time text-right">
                                    <span className="job-time">
                                        <i className="far fa-heart"></i> Full Time</span>
                                    <a href="#" className="aply-btn ">Appy Now</a>
                                </div>
                            </div>
                    
                            <div className="job-post-main row mt-3">
                                <div className="col-md-9 job-post-info text-left">
                                    <div className="job-post-icon">
                                        <i className="fas fa-briefcase"></i>
                                    </div>
                                    <div className="job-single-sec">
                                        <h4>
                                            <a href="#">
                                                Marketing Director</a>
                                        </h4>
                                        <p className="my-2">Technology Management Consulting</p>
                                        <ul className="job-list-info d-flex">
                                            <li>
                                                <i className="fas fa-briefcase"></i> Rennes</li>
                                            <li>
                                                <i className="fas fa-map-marker-alt"></i> France</li>
                                            <li>
                                                <i className="fas fa-dollar-sign"></i> 300000 - 500000 / Annum</li>
                                        </ul>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-3 job-single-time text-right">
                                    <span className="job-time">
                                        <i className="far fa-heart"></i> Full Time</span>
                                    <a href="#" className="aply-btn ">Appy Now</a>
                                </div>
                            </div>
                        
                        </div>
                    
                    </div>
                    <div className="main_grid_contact emp-single-page mt-5">
                        <div className="form emp-single">
                            <h4 className="mb-4 text-left">Contact Business Network</h4>
                            <form action="#" method="post" className="row">
                                <div className="col-lg-6 emp-single-line">
                                    <div className="form-group">
                                        <label className="my-2">Name</label>
                                        <input className="form-control" type="text" name="Name" placeholder="" required=""/>
                                    </div>
                                    <div className="form-group">
                                        <label className="my-2">Phone Number</label>
                                        <input className="form-control" type="text" name="Phone" placeholder="" required=""/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" type="email" name="Email" placeholder="" required=""/>
                                    </div>

                                </div>
                                <div className="col-lg-6 emp-single-line">
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea id="textarea" placeholder=""></textarea>
                                    </div>
                                    <div className="input-group1">
                                        <input className="form-control" type="submit" value="Submit Mail"/>
                                    </div>
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

export default EmployerDetails
