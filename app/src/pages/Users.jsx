import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { GrUserAdmin } from "react-icons/gr";
import Layout from "../components/Layout";
import UserForm from "./../components/UserForm";
import { useGetUsersQuery, usePostUsersMutation } from "../redux/usersService";
import { useSendMessageMutation } from "../redux/whatsappService";
import Modal from "../components/Modal";
import Form from "../components/Form";
import { userFields } from "../constants";

let data = [
  {
    ID: 10248,
    Name: "Samba Lamine Diarra",
    Adress: "Lafiabougou",
    Role: "Admin",
    Date: "29-09-2024",
  },
  {
    ID: 10249,
    Name: "Issa Tangara",
    Adress: "Niarela",
    Role: "Admin",
    Date: "29-09-2024",
  },
  {
    ID: 10250,
    Name: "Fatoumata Sylla",
    Adress: "Missira",
    Role: "Admin",
    Date: "29-09-2024",
  },
  {
    ID: 10251,
    Name: "Issa Sidibé",
    Adress: "Niamana",
    Role: "Admin",
    Date: "29-09-2024",
  },
];

const Users = () => {
  const { data, isLoading, error } = useGetUsersQuery();
  const [showForm, setShowForm] = useState(false);

  // Supposons que tu utilises la variable data récupérée de l'API
  const users = data || []; // adapte selon la structure de ta réponse

  const [sendMessage] = useSendMessageMutation();
  const admins = users.filter((user) => user.role.name === "Admin");
  const editeurs = users.filter((user) => user.role.name === "Authenticated");

  const [createUser] = usePostUsersMutation();
  // Pour compter :
  const adminCount = admins.length;
  const editeurCount = editeurs.length;

  const post = (data) => {  
    console.log("Données à envoyer :", data);
    createUser(data)
      .then(() => {
        console.log("Utilisateur créé avec succès");
        setShowForm(false); // Ferme le formulaire après l'envoi
      })
      .catch((error) => {
        console.error("Erreur lors de la création de l'utilisateur :", error);
      });
  };
  // Fonction pour envoyer un message WhatsApp


  const send = (message) => {
    sendMessage(message)
      .then((response) => {
        console.log("Message sent successfully:", response);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };
  return (
    <Layout>
      <div className="flex w-full flex-col justify-center items-center">
        <div className="w-full max-w-xl bg-white mb-2 rounded-2xl  shadow-lg p-2 animate-fade-in">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Gestion des utilisateurs
          </h1>
        </div>
        <div className="flex w-full flex-col lg:flex-row justify-center lg:w-[1080px] p-2 lg:space-x-2 ">
          <div className="bg-white p-2 h-32 lg:w-1/4 w-full rounded-2xl flex mb-4 justify-between items-center ">
            <div className="text-lg font-bold flex space-x-2">
              <GrUserAdmin className="text-3xl text-orange-500" />
              <h2> Administrateurs : </h2>
            </div>
            <p className="text-lg font-bold"> {adminCount} </p>
          </div>
          <div className="bg-white p-2 h-32  lg:w-1/4 w-full mb-4 rounded-2xl flex justify-between items-center">
            <div className="text-lg font-bold flex space-x-2">
              <CiUser className="text-3xl text-orange-500" />
              <h2> Editeurs : </h2>
            </div>
            <p className="text-lg font-bold"> {editeurCount} </p>
          </div>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white mb-4 px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Créer un utilisateur
        </button>
        <Modal isVisible={showForm} setIsVisible={setShowForm}>
          <div className="transition-opacity flex justify-center items-center   duration-500 ease-in-out">
            <Form fields={userFields} title={'Créer un utilisateur'} setIsVisible={setShowForm} post={post} />
          </div>
        </Modal>
        <div className=" h-full lg:w-[1080px] p-2 bg-white m-0.5 w-10/12 rounded-2xl">
          <GridComponent dataSource={data} className="w-10/12 rounded-2xl">
            <ColumnsDirective>
              <ColumnDirective field="id" headerText="ID" />
              <ColumnDirective field="username" headerText="Nom" />
              <ColumnDirective field="role.name" headerText="Role" />
              <ColumnDirective
                field="createdAt"
                headerText="Date de création"
                type="date"
                format="dd-MM-yyyy"
              />
              <ColumnDirective field="adresse" headerText="Adresse" />
            </ColumnsDirective>
          </GridComponent>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
