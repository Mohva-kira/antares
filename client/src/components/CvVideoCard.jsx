import React, { useCallback, useState } from "react";
import aziz from "../assets/images/aziz_diarra.png";
import Modal from "./Modal";
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const CvVideoCard = ({ item }) => {
  const { title, img, summary, user, linkedin } = item?.attributes;

  console.log('CvVideoCard', item);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="col-lg-3 member-main text-center shadow-md hover:shadow-2xl  bg-light m-2 rounded-2xl p-2">
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

            <p className="my-4 truncate"> {summary}</p>
            <div className="mt-3 team-social text-center">
              <ul className="social-icons text-center">
                <li>
                  <a href="#">
                  <CiFacebook size={35} />
                  </a>
                </li>
                <li className="mx-3">
                  <a href={linkedin}>
                    <TiSocialLinkedinCircular size={35} />
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li> */}
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
        id={user?.data}
      />
    </div>
  );
};

export default CvVideoCard;
