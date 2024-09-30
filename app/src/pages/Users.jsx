import React from "react";
import Layout from "../components/Layout";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import { GrUserAdmin } from "react-icons/gr";
import UserForm from "../components/UserForm";
import { CiUser } from "react-icons/ci";

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
  return (
    <Layout>
      <div className="flex w-full flex-col justify-center items-center">
        <div className="w-full max-w-xl rounded-2xl bg-slate-200 mb-3 shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Gestion des utilisateurs
          </h1>

          <div className="transition-opacity mb-10 duration-500 ease-in-out">
            <UserForm />
          </div>
        </div>
        <div className="flex w-full justify-center lg:w-[1080px] p-2 space-x-2 ">
          <div className="bg-white p-2 h-32 w-1/4 rounded-2xl flex justify-between items-center ">
            <div className="text-lg font-bold flex space-x-2">
              <GrUserAdmin className="text-3xl text-orange-500" />
              <h2> Administrateurs : </h2>
            </div>
            <p className="text-lg font-bold"> 2 </p>
          </div>
          <div className="bg-white p-2 h-32 w-1/4 rounded-2xl flex justify-between items-center">
            <div className="text-lg font-bold flex space-x-2">
              <CiUser className="text-3xl text-orange-500" />
              <h2> Editeurs : </h2>
            </div>
            <p className="text-lg font-bold"> 5 </p>
          </div>
        </div>
        <div className=" h-full lg:w-[1080px] p-2 bg-white m-6 w-10/12 rounded-2xl">
          <GridComponent dataSource={data} className="w-10/12 rounded-2xl">
            <ColumnsDirective>
              <ColumnDirective field="ID" headerText="ID" />
              <ColumnDirective field="Name" headerText="Nom" />
              <ColumnDirective field="Role" headerText="Role" />
              <ColumnDirective field="Date" headerText="Date de creation" />
              <ColumnDirective field="Adress" headerText="Adresse" />
            </ColumnsDirective>
          </GridComponent>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
