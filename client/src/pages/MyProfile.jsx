import React, { useState } from "react";
import {
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineProfile,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Breadcumb from "../components/Breadcumb";
import Container from "../components/Container";
import Form from "../components/Form";
import Modal1 from "../components/Modal1";
import { candidatField } from "../constant/candidatField";
import {
  useGetProfileQuery,
  usePostProfileMutation,
} from "../redux/profileServices";

const MyProfile = () => {
  const user = JSON.parse(localStorage.getItem("auth"));
  const [isVisible, setIsVisible] = useState();
  const [postProfile] = usePostProfileMutation();
  const {
    data: profile,
    isLoading,
    isSuccess,
    isFetching,
    isError,
  } = useGetProfileQuery(user?.user?.id);
  const data = {
    nom: "Coulibaly Aissata",
    ville: "Bamako",
    pays: "Mali",
    diplome: "Ingenieur informatique",
    university: "Techno Lab",
    candidatures: 13,
    profilView: 120,
  };

  console.log("user", profile);
  const navigate = useNavigate();

  const send = (data) => {
    console.log("Données à envoyée", data);
    data.user = user?.user?.id;

    postProfile({ data }).then((rep) => console.log("la reponses", rep));
  };

  return (
    <Container>
      <Breadcumb title={`Profile`} />

      <div class="p-16">
        <div class="p-8 bg-white shadow mt-24">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p class="font-bold text-gray-700 text-xl">
                  {data.candidatures}
                </p>
                <p class="text-gray-400">Candidatures</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">{data.profilView}</p>
                <p class="text-gray-400">Vue du profile</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">89</p>
                <p class="text-gray-400">Comments</p>
              </div>
            </div>
            <div class="relative flex flex-col justify-center items-center space-y-4">
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl  -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsVisible(true)}
                  class="text-white p-2 rounded-full  uppercase  bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  {" "}
                  <AiOutlineUserAdd size={25} />
                </button>
                <button
                  onClick={() => navigate("/cv/1")}
                  class="text-white p-2 rounded-full uppercase rouned bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  {" "}
                  <AiOutlineEdit size={25} />
                </button>
              </div>
            </div>

            <div class="space-x-8 flex flex-col justify-center items-center mt-32 md:mt-0 md:justify-center">
              <div className="ml-4">
                <AiOutlineProfile size={75} color="" />
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => navigate("/cv/1")}
                  class="text-white p-2 rounded-full  uppercase  bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  {" "}
                  <AiOutlineEye size={25} />
                </button>
                <button
                  onClick={() => navigate("/cv/1")}
                  class="text-white p-2 rounded-full uppercase rouned bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  {" "}
                  <AiOutlineEdit size={25} />
                </button>
              </div>

              {/* <button  class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Message</button>    */}
            </div>
          </div>

          {profile ? (
            <div class="mt-20 text-center border-b pb-12">
              <h1 class="text-4xl font-medium text-gray-700">
                {`${profile?.data[0]?.attributes?.nom} ${profile?.data[0]?.attributes?.prenom} `}
                {/* , <span class="font-light text-gray-500">27</span> */}
              </h1>
              <p class="font-light text-gray-600 mt-3 ">
                {`${profile?.data[0]?.attributes?.phone}, ${profile?.data[0]?.attributes?.email}   `}
              </p>
              <p class="font-light text-gray-600 mt-3 capitalize">
                {` ${profile?.data[0]?.attributes?.ville}, ${profile?.data[0]?.attributes?.pays}`}
              </p>
              <p class="mt-8 text-gray-500">
                {`${profile?.data[0]?.attributes?.role} - ${profile?.data[0]?.attributes?.university}`}
              </p>
            </div>
          ) : (
            <div>
              <p> Veuillez renseigner votre profile </p>
            </div>
          )}

          <div class="mt-12 flex flex-col justify-center">
            {/* <p class="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p> */}
            {/* <button  class="text-indigo-500 py-2 px-4  font-medium mt-4">  Show more</button>   */}
          </div>
        </div>
      </div>
      <Modal1 isVisible={isVisible} setIsVisible={setIsVisible}>
        <Form
          fields={candidatField}
          setIsVisible={setIsVisible}
          title={"Creer mon profil"}
          post={send}
        />
      </Modal1>
    </Container>
  );
};

export default MyProfile;
