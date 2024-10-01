import React from "react";
import { useNavigate } from "react-router-dom";

const ArticlesCard = ({ article }) => {
  const { title, description, bgImage } = article;
  const navigate = useNavigate();
  return (
    <div className="lg:w-1/4 w-full lg:h-1/4 h-40  items-end  justify-end m-2 p-2 rounded-2xl bg-white">
      <div
        onClick={() => navigate("/article/1")}
        style={{
          backgroundImage: "url(" + bgImage + ")",
          backgroundSize: "cover ",
          backgroundRepeat: "no-repeat",
        }}
        className=" contain w-full h-full p-4 rounded-2xl">
        <div className="w-full text-white flex h-full    items-end">
          <span>
            <h1 className="text-lg font-bold"> {title} :</h1>{" "}
            <p className="text-sm line-clamp-1 ">{description}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
