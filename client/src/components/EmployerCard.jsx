import React from "react";
import team4 from "../assets/images/team4.jpg";
import { FaMapMarkerAlt, FaEnvelope, FaGlobe, FaUsers } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
const EmployerCard = ({ item1 }) => {
  const navigate = useNavigate();
  return (
    <div class="flex w-[80%] justify-center items-center ">
      <div class="w-full testi-main relative m-2 ">
        <div className="bg-white w-[90%] absolute h-[80%]  rounded-2xl -z-50  m-2"></div>

        <a href={`/employeurs/${item1.name}`}>
          <div class="testi-grids row cursor-pointer  ">
            <div class="col-md-9 col-sm-9 col-xs-9 clients-info-text">
              <h6>{item1.name}</h6>
              <h>{item1.activite}</h>
              <div className="row-span-1 d-flex flex-column flex-lg-row justify-content-between align-items-start h-100 gap-3">
                <div className="flex-fill mb-2 mb-lg-0">
                  <p className="text-truncate">{item1.description}</p>
                </div>
                <div className="d-flex flex-column gap-2 flex-lg-row flex-lg-wrap justify-content-lg-end">
                  <div className="d-flex align-items-center">
                    <FaMapMarkerAlt className="me-2 text-muted flex-shrink-0" />
                    <p className="mb-0 small">{item1.adresse}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaEnvelope className="me-2 text-muted flex-shrink-0" />
                    <p className="mb-0 small">{item1.email}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaGlobe className="me-2 text-muted flex-shrink-0" />
                    <p className="mb-0 small">{item1.site}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaUsers className="me-2 text-muted flex-shrink-0" />
                    <p className="mb-0 small">{item1.nb_employees} Employées</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3 img-testi">
              <img class="img-fluid" src={team4} alt="" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default EmployerCard;
