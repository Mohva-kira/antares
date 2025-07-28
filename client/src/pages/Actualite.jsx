import React from "react";
import Container from "../components/Container";
import Breadcumb from "../components/Breadcumb";
import { useParams } from "react-router-dom";
import { useGetActualiteByIdQuery, useGetActualiteByNameQuery } from "../redux/actualite";
// import { RiAccountCircleFill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";

const Actualite = () => {
  const param = useParams();
  const { name } = param;

  const {
    data: actualiteData,
    isLoading: actualiteIsLoading,
    isFetching: actualiteIsFetching,
  } = useGetActualiteByIdQuery(name);

  const { title, images, content, categorie, createdAt, author } = actualiteData?.data.attributes || {};

  console.log("actualiteData", actualiteData);
  return (
    <Container>
      <Breadcumb title="Actualtié details" />
      <main class="mt-10">
        <div
          class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{height: '24em'}}>
          <div
            class="absolute left-0 bottom-0 w-full h-full z-10"
            style={{ backgroundImage: "linear-gradient(180deg, transparent, rgba(0,0,0,0.7))" }}></div>
          <img
            src={`https://api.antares-rh.net${images?.data[0]?.attributes?.url}`}
            class="absolute left-0 top-0 w-full h-full z-0 object-cover"
          />
          <div class="p-4 absolute bottom-0 left-0 z-20">
            <a
              href="#"
              class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
              {categorie}
            </a>
            <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
              {title}
            </h2>
            <div class="flex mt-3">
             <MdAccountCircle  className="text-gray-200 text-5xl mr-2" />
              <div>
                <p class="font-semibold text-gray-200 text-sm">
                  {author}
                </p>
                <p class="font-semibold text-gray-400 text-xs"> {new Date(createdAt).toLocaleDateString()} </p>
              </div>
            </div>
          </div>
        </div>

        <div class="px-4 lg:px-0 mt-12 text-white bg-white rounded-2xl max-w-screen-md mx-auto text-lg leading-relaxed">
         {
          content?.map((paragraph, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg text-black font-semibold">{paragraph.contentTitle}</h3>
              <p className="mb-4">{paragraph.descriptionContent}</p>
            </div>
            
          ))
         }
        </div>
      </main>
    </Container>
  );
};

export default Actualite;
