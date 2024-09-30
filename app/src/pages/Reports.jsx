import React, { useState } from "react";
import DynamicForm from "../components/DynamicForm";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Edit,
  CommandColumn,
} from "@syncfusion/ej2-react-grids";
import {
  ChartComponent,
  Category,
  Inject,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Chart3DComponent,
  Chart3DSeriesCollectionDirective,
  Chart3DSeriesDirective,
  Legend3D,
  DataLabel3D,
  Category3D,
  ColumnSeries3D,
  Highlight3D,
} from "@syncfusion/ej2-react-charts";
import { DialogComponent } from "@syncfusion/ej2-react-popups";

import { AccumulationChartComponent } from "@syncfusion/ej2-react-charts";
import Layout from "../components/Layout";
// import CandidatForm from "./CandidatForm"; // Formulaire Candidat
// import EntrepriseForm from "./EntrepriseForm"; // Formulaire Entreprise
// import EntretienForm from "./EntretienForm"; // Formulaire Entretien

const Reports = () => {
  const [formType, setFormType] = useState("candidat");

  //   const renderForm = () => {
  //     switch (formType) {
  //       case "candidat":
  //         return <CandidatForm />;
  //       case "entreprise":
  //         return <EntrepriseForm />;
  //       case "entretien":
  //         return <EntretienForm />;
  //       default:
  //         return null;
  //     }
  //   };

  const [responseMessage, setResponseMessage] = useState("");

  // Fonction pour gérer la soumission des formulaires
  const handleSubmit = async (formType, formData) => {
    let url = "";

    // Définir l'URL de l'API en fonction du type de formulaire soumis
    switch (formType) {
      case "candidat":
        url = "https://api.example.com/candidats";
        break;
      case "entreprise":
        url = "https://api.example.com/entreprises";
        break;
      case "entretien":
        url = "https://api.example.com/entretiens";
        break;
      default:
        break;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Envoi des données du formulaire sous forme JSON
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(`Succès: ${formType} ajouté avec succès!`);
      } else {
        setResponseMessage("Erreur lors de l'ajout de l'entité.");
      }
    } catch (error) {
      setResponseMessage("Erreur de connexion à l'API.");
    }
  };

  let data = [
    {
      ID: 10248,
      Name: "Amidou Thera",
      Exp: "10",
      Degrees: "Master",
      Adress: "Badalabougou",
    },
    {
      ID: 10249,
      Name: "Mamadou Camara",
      Exp: "5",
      Degrees: "BT2",
      Adress: "Missabougou",
    },
    {
      ID: 10250,
      Name: "Moussa Touré",
      Exp: "7",
      Degrees: "Master",
      Adress: "Zerni",
    },
    {
      ID: 10251,
      Name: "Ismael Sidibé",
      Exp: "4",
      Degrees: "Licence",
      Adress: "Magnanbougou",
    },
  ];

  let chartData = [
    { month: "Jan", sales: 35 },
    { month: "Feb", sales: 28 },
    { month: "Mar", sales: 34 },
    { month: "Apr", sales: 32 },
    { month: "May", sales: 40 },
    { month: "Jun", sales: 32 },
    { month: "Jul", sales: 35 },
    { month: "Aug", sales: 55 },
    { month: "Sep", sales: 38 },
    { month: "Oct", sales: 30 },
    { month: "Nov", sales: 25 },
    { month: "Dec", sales: 32 },
  ];

  let pieData = [
    { x: "Tesla", y: 137429 },
    { x: "Aion", y: 80308 },
    { x: "Wuling", y: 76418 },
    { x: "Changan", y: 52849 },
    { x: "Geely", y: 47234 },
    { x: "Nio", y: 31041 },
    { x: "Neta", y: 22449 },
    { x: "BMW", y: 18733 },
  ];
  const primaryxAxis = { valueType: "Category" };

  //Options for action column

  let grid;
  const editOptions = { allowEditing: true, allowDeleting: true };
  let rowData;
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const commands = [
    {
      buttonOption: {
        content: "Details",
        cssClass: "e-flat",
      },
    },
  ];
  const commandClick = (args) => {
    if (grid) {
      rowData = args.rowData;
      if (rowData) {
        setDialogVisible(true);
        setDialogContent(`<p><b>Nom:</b> ${rowData.Name}</p>
      <p><b>Expérience:</b> ${rowData.Exp}</p>
      <p><b>Niveau d'études:</b> ${rowData.Degrees}</p>
      <p><b>Adresse:</b> ${rowData.Adress}</p>`);
      }
    }
  };
  const dialogClose = () => {
    setDialogVisible(false);
  };

  return (
    <Layout>
      <div className="min-h-screen w-full p-2 flex flex-col  items-center ">
        <div className="w-full max-w-xl bg-slate-200 rounded-2xl mb-3 shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Gestion des Entités
          </h1>

          <div className="transition-opacity mb-10 duration-500 ease-in-out">
            <DynamicForm />
          </div>
        </div>
        <div className="w-full lg:w-[1080px] p-2 h-full flex justify-between ">
          <div className="w-1/2 h-full p-2 m-2 rounded-2xl bg-white">
            <ChartComponent id="charts" primaryXAxis={primaryxAxis}>
              <Inject services={[LineSeries, Category]} />
              <SeriesCollectionDirective>
                <SeriesDirective
                  dataSource={chartData}
                  xName="month"
                  yName="sales"
                />
              </SeriesCollectionDirective>
            </ChartComponent>
          </div>
          <div className="w-1/2 h-full p-2 m-2 rounded-2xl bg-white">
            <Chart3DComponent
              id="charts2"
              style={{ textAlign: "center" }}
              primaryXAxis={{
                valueType: "Category",
                labelRotation: -45,
                labelPlacement: "BetweenTicks",
              }}
              wallColor="transparent"
              primaryYAxis={{
                maximum: 150000,
                interval: 50000,
              }}
              enableRotation={true}
              rotation={7}
              tilt={10}
              depth={100}
              legendSettings={{ enableHighlight: true, visible: true }}>
              <Inject
                services={[
                  ColumnSeries3D,
                  Legend3D,
                  Category3D,
                  DataLabel3D,
                  Highlight3D,
                ]}
              />
              <Chart3DSeriesCollectionDirective>
                <Chart3DSeriesDirective
                  dataSource={pieData}
                  dataLabel={{ visible: true }}
                  xName="x"
                  name="Sales"
                  yName="y"
                  type="Column"></Chart3DSeriesDirective>
              </Chart3DSeriesCollectionDirective>
            </Chart3DComponent>
            ;
          </div>
        </div>
        <div className="flex w-full justify-center items-center bg-white rounded-2xl lg:w-[1080px]  mt-4 p-2 bg-slate-200s">
          <div className="lg:w-[1080px] p-2 ">
            <GridComponent
              dataSource={data}
              editSettings={editOptions}
              commandClick={commandClick}
              height={265}
              ref={(g) => (grid = g)}>
              <ColumnsDirective>
                <ColumnDirective field="ID" headerText="ID Candidat" />
                <ColumnDirective field="Name" headerText="Nom" />
                <ColumnDirective field="Exp" headerText="Expérience" />
                <ColumnDirective field="Degrees" headerText="Niveau d'etudes" />
                <ColumnDirective field="Adress" headerText="Adresse" />
                <ColumnDirective
                  headerText="Commands"
                  width="120"
                  commands={commands}
                />
              </ColumnsDirective>
              <Inject services={[Edit, CommandColumn]} />
            </GridComponent>
          </div>
          <div>
            <DialogComponent
              header="Détails"
              width={720}
              close={dialogClose}
              visible={dialogVisible}
              content={dialogContent}
              showCloseIcon={true}></DialogComponent>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
