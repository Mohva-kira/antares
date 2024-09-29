import React from "react";
import { useNavigate } from "react-router-dom";

const ArticlesCard = ({article}) => {

    const {title, description, bgImage} = article
    const navigate = useNavigate()
  return (
    <div className="w-1/3 h-1/3 m-2 p-2 rounded-2xl bg-white">
      <div onClick={() => navigate('/article/1') } style={{backgroundImage: "url(" + bgImage +")", backgroundSize: "cover ", backgroundRepeat: 'no-repeat',}} className="  w-full p-4 rounded-2xl">
        <div className="w-full text-white flex    items-end">
          <span>
            <h1 className="text-lg font-bold"> {title} :</h1>{" "}
            <p className="text-sm">
              {description}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
