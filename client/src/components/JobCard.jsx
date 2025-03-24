import React from 'react'
import edm from '../assets/edm.jpeg'


const JobCard = ({item}) => {
    const {
        name,
        title,
        adresse,
        ville,
        pays,
        contratType,
        category,
        endDate,
        applied,
        appliedDate

    } = item

    
  return (
                    <div className="job-post-main row">
                        <div className="col-md-9 job-post-info text-left">
                            <div className="job-post-icon">
                               <img src={edm} />
                            </div>
                            <div className="job-single-sec">
                                <h4>
                                    <a href="#">{title}</a>
                                </h4>
                                <div className='flex space-x-2 my-2"'>
                                <p className="">{name} -</p>  <p>{category} - </p> <p> jusqu'au {endDate?.toLocaleDateString()} </p>

                                </div>
                                <ul className="job-list-info d-flex">
                                    <li>
                                        <i className="fas fa-briefcase"></i> {adresse}
                                    </li>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i> {ville}
                                    </li>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i> {pays}
                                    </li>
                                    {/* <li>
                                        <span className="devise">FCFA</span> 300000 - 500000 / Mois
                                    </li> */}
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="col-md-3 job-single-time text-right">
                            <span className="job-time">
                                <i className="far fa-heart"></i> {contratType}</span>
                            <a href={`/job/${name}`} className={applied ? 'bg-green-500 p-2 rounded-lg text-white font-medium' : "aply-btn "}> {applied ? 'candidature envoyé' : 'Postuler'}</a>
                            {
                                applied ? 
                                <div className='text-slate-500 mt-2 font-semibold text-xs'>   
                                        {appliedDate.toLocaleDateString()}
                                </div>
                                : 
                                null
                            }
                        </div>
                    </div>
                  

                   
                  
           

  )
}

export default JobCard
