import React from "react";
import { MdLocationPin, MdWork } from "react-icons/md";
import edm from "../assets/edm.jpeg";
const DaoCard = ({ item, applied}) => {
  const {
    name,
    titre,
    company,
    ville,
    lieu,
    contratType,
    category,
    date_limite_depot,
    job,
    date_candidature,
  } = item?.attributes || {};



  return (
    <div className="job-post-main row">
      <div className="col-md-9 job-post-info text-left">
        <div className="job-post-icon">
          <img src={edm} />
        </div>
        <div className="job-single-sec">
          <h4>
            <a href="#">{titre}</a>
          </h4>
          <div className='flex space-x-2 my-2"'>
            <p className="">{company?.data?.attributes?.name} -</p>{" "}
            <p>{company?.data?.attributes?.activite} - </p>{" "}
            <p> jusqu'au {date_limite_depot} </p>
          </div>
          <ul className="job-list-info d-flex">
            <li className="flex space-x-2 justify-start items-center">
              <div>
                <MdLocationPin />
              </div>
              <div>{company?.data?.attributes?.adresse}</div>
            </li>

            <li className="flex space-x-2 justify-start items-center">
              <div>
                <MdLocationPin />
              </div>

              <div>{"Mali"}</div>
            </li>
            {/* <li>
                                        <span className="devise">FCFA</span> 300000 - 500000 / Mois
                                    </li> */}
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="col-md-3 job-single-time text-right justify-center items-end flex flex-col">
        <span className="flex items-center justify-end space-x-2 mb-2">
          <div className="text-blue-500 font-bold">
            <MdWork />
          </div>
          <div className="text-blue-500 font-bold">{contratType}</div>
        </span>
        <a
          href={`/appels-offre/${titre}`}
          className={
            applied
              ? "bg-green-500 px-2 py-0.5 rounded-lg text-white font-medium"
              : "aply-btn  "
          }>
          {" "}
          {applied ? "candidature envoyé" : "Postuler"}
        </a>
        {applied ? (
          <div className="text-slate-500 mt-2 font-semibold text-xs">
            {new Date(applied.attributes.date_candidature).toLocaleDateString()}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DaoCard;
