import React from 'react'
import s1 from '../assets/images/s1.jpg'
import s2 from '../assets/images/s2.jpg'
import s3 from '../assets/images/s3.jpg'
import s4 from '../assets/images/s4.jpg'
import s5 from '../assets/images/s5.jpg'
import s6 from '../assets/images/s6.jpg'
import s7 from '../assets/images/s7.jpg'
import s8 from '../assets/images/s8.jpg'

const ProcessCard = () => {
  return (
            <div className="inner-sec-w3ls py-lg-5  py-3">
               
                <h3 className="tittle text-center mb-lg-5 mb-3">
                    <span>Astuces</span>Processus de recrutement
                </h3>

                <div className="mid-info text-center mt-5">
                    <div className="parent-chart">
                        <div className="level lev-one top-level">
                            <div className="flow-position">
                                <img src={s1} alt=" " className="img-fluid rounded-circle" />
                                <br />
                                <strong> Domaines d'expertise</strong>
                                
                            </div>
                        </div>
                        <div className="flow-chart">
                            <div className="level lev-two last-lev">
                                <div className="flow-position">
                                    <img src={s2} alt=" " className="img-fluid rounded-circle" />
                                    <br />
                                    <strong>Recrutement</strong>
                                    <br /> Lorem ipsum
                                </div>
                           
                                <div className="flow-position">
                                    <img src={s3} alt=" " className="img-fluid rounded-circle" />
                                    <br />
                                    <strong>Formation
                                    </strong>
                                    <br /> Lorem ipsum
                                </div>
                          
                                <div className="flow-position">
                                    <img src={s4} alt=" " className="img-fluid rounded-circle"/>
                                    <br/>
                                    <strong>Conseil
                                    </strong>
                                    <br/> Lorem ipsum
                                </div>
                          
                                <div className="flow-position">
                                    <img src={s5} alt=" " className="img-fluid rounded-circle"/>
                                    <br/>
                                    <strong>4.Screening </strong>
                                    <br/> Lorem ipsum
                                </div>
                        
                                <div className="flow-position">
                                    <img src={s6} alt=" " className="img-fluid rounded-circle" />
                                    <br />
                                    <strong>5.Entretien avec les candidats
                                    </strong>
                                    <br /> Lorem ipsum
                                </div>
                           
                                <div className="flow-position">
                                    <img src={s7} alt=" " className="img-fluid rounded-circle"/>
                                    <br />
                                    <strong>6.Selection</strong>
                                    <br /> Lorem ipsum
                                </div>
                          
                                <div className="flow-position">
                                    <img src={s8} alt=" " className="img-fluid rounded-circle" />
                                    <br />
                                    <strong>7.Evaluation de l'Employée 
                                    </strong>
                                    <br /> Lorem ipsum
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
  )
}

export default ProcessCard
