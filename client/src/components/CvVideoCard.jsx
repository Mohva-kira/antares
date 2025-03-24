import React, { useCallback, useState } from "react";
import aziz from "../assets/images/aziz_diarra.png";
import Modal from "./Modal";

const CvVideoCard = ({ item }) => {
  const { title, img, summary, user } = item?.attributes;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="col-lg-3 member-main text-center bg-light m-2 rounded-lg p-2">
      <div
        className="card cv__card"
        data-toggle="modal"
        data-target="#exampleModalCenter3">
        <div className="card-body ">
          <div className="member-img">
            <img
              src={aziz}
              alt=" "
              onClick={() => useCallback(setIsVisible(!isVisible))}
              className="img-fluid
                                     rounded-circle"
            />
          </div>
          <div className="member-info text-center py-lg-4 py-2">
            <h4>
              {" "}
              <a href="candidates_single.html"> {title}</a>
            </h4>

            <p className="my-4"> {summary}</p>
            <div className="mt-3 team-social text-center">
              <ul className="social-icons text-center">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="mx-3">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title={title}
        poste={summary}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        video={aziz}
        id={user?.data.id}
      />
    </div>
  );
};

export default CvVideoCard;
