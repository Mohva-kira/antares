import React from "react";
import Layout from "../components/Layout";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import DynamicForm from "../components/DynamicForm";
import UserForm from "../components/UserForm";

let data = [
  { OrderID: 10248, CustomerID: "VINET", ShipCountry: "France" },
  { OrderID: 10249, CustomerID: "TOMSP", ShipCountry: "Germany" },
  { OrderID: 10250, CustomerID: "HANAR", ShipCountry: "Brazil" },
  { OrderID: 10251, CustomerID: "VICTE", ShipCountry: "France" },
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
        <div className=" p-6 h-full bg-white m-6 w-10/12 rounded-2xl">
          <GridComponent dataSource={data} className="w-10/12 rounded-2xl">
            <ColumnsDirective>
              <ColumnDirective field="OrderID" headerText="ID Candidat" />
              <ColumnDirective field="CustomerID" headerText="Nom" />
              <ColumnDirective field="CustomerID" headerText="Expérience" />
              <ColumnDirective
                field="CustomerID"
                headerText="Niveau d'etudes"
              />
              <ColumnDirective field="ShipCountry" headerText="Adresse" />
            </ColumnsDirective>
          </GridComponent>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
