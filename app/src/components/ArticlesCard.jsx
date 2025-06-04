import React from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const ArticlesCard = ({ article, setSelected, setIsVisible, setIsUpdating }) => {
  const { title, content, images } = article.attributes || {};
  const navigate = useNavigate();
  return (
    <div className="lg:w-1/3 w-full lg:h-40 h-40  pb-10 items-end shadow-xl justify-end m-2 p-2 rounded-2xl bg-white">
      <div
        style={{
          backgroundImage: "url(https://api.antares-rh.net" +   images?.data[0]?.attributes?.url   + ")",
          backgroundSize: "cover ",
          backgroundRepeat: "no-repeat",
        }}
        className=" contain w-full h-full py-7 px-4 rounded-2xl">
        <div className="w-full text-white flex h-full    items-end"
                onClick={() => {navigate("/article/"+ article.id)}}

        >
          <span>
            <h1 className="text-lg font-bold line-clamp-1"> {title} :</h1>{" "}
            <p className="text-sm line-clamp-1 ">{content[0]?.descriptionContent}</p>
          </span>
        </div>
        <div className="w-full text-black mb-5 space-x-4  flex h-full items-end">
          <div onClick={() => {setSelected(article), setIsVisible(true), setIsUpdating(true)}} className="text-blue-500 cursor-pointer">
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
