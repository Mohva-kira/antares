import React from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const ArticlesCard = ({ article }) => {
  const { title, description, bgImage } = article;
  const navigate = useNavigate();
  return (
    <div className="lg:w-1/3 w-full lg:h-40 h-40  pb-10 items-end  justify-end m-2 p-2 rounded-2xl bg-white">
      <div
        onClick={() => navigate("/article/1")}
        style={{
          backgroundImage: "url(" + bgImage + ")",
          backgroundSize: "cover ",
          backgroundRepeat: "no-repeat",
        }}
        className=" contain w-full h-full py-7 px-4 rounded-2xl">
        <div className="w-full text-white flex h-full    items-end">
          <span>
            <h1 className="text-lg font-bold line-clamp-1"> {title} :</h1>{" "}
            <p className="text-sm line-clamp-1 ">{description}</p>
          </span>
        </div>
        <div className="w-full text-black mb-5 space-x-4  flex h-full items-end">
          <div>
            <HiPencilSquare />
          </div>
          <div className="text-red-500">
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
