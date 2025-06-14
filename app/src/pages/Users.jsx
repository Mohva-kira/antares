import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import React from "react";
import { CiUser } from "react-icons/ci";
import { GrUserAdmin } from "react-icons/gr";
import Layout from "../components/Layout";
import UserForm from "./../components/UserForm";
import { useGetUsersQuery } from "../redux/usersService";
import { useSendMessageMutation } from "../redux/whatsappService";

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

  // Supposons que tu utilises la variable data récupérée de l'API
  const users = data || []; // adapte selon la structure de ta réponse

  const [sendMessage] = useSendMessageMutation();
  const admins = users.filter((user) => user.role.name === "Admin");
  const editeurs = users.filter((user) => user.role.name === "Authenticated");

  // Pour compter :
  const adminCount = admins.length;
  const editeurCount = editeurs.length;

  const send = (message) => {
    sendMessage(message)
      .then((response) => {
        console.log("Message sent successfully:", response);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  }
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
        <div className="transition-opacity  lg:w-[1080px] duration-500 ease-in-out">
          <UserForm />
        </div>
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
