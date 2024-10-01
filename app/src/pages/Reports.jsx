import React, { useState, useEffect } from "react";
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
import Layout from "../components/Layout";

const Reports = () => {
  const [formType, setFormType] = useState("candidat");
  const [responseMessage, setResponseMessage] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  let grid;
  let rowData;

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

  const handleSubmit = async (formType, formData) => {
    let url = "";
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
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage(`Succès: ${formType} ajouté avec succès!`);
      } else {
        setResponseMessage("Erreur lors de l'ajout de l'entité.");
      }
    } catch (error) {
      setResponseMessage("Erreur de connexion à l'API.");
    }
  };

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
  const dialogClose = () => setDialogVisible(false);

  // Fade-in animation and responsive layout
  return (
    <Layout>
      <div className="min-h-screen w-full p-2 flex flex-col justify-center items-center">
        <div className="w-full max-w-xl bg-slate-200 rounded-2xl mb-3 shadow-lg p-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Gestion des Entités
          </h1>
          <div className="transition-opacity mb-10 duration-500 ease-in-out">
            <DynamicForm />
          </div>
        </div>

        <div className="w-full lg:w-[1080px] lg:flex-row flex-col p-2 h-full space-y-4 flex justify-between">
          <div className="lg:w-1/2 w-full h-full p-2 rounded-2xl bg-white animate-fade-in delay-100">
            <ChartComponent
              id="charts"
              primaryXAxis={{ valueType: "Category" }}>
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

          <div className="lg:w-1/2 w-full h-full p-2 rounded-2xl bg-white  animate-fade-in delay-200">
            <Chart3DComponent
              id="charts2"
              primaryXAxis={{ valueType: "Category", labelRotation: -45 }}
              primaryYAxis={{ maximum: 150000, interval: 50000 }}
              depth={100}
              enableRotation={true}
              rotation={7}
              tilt={10}>
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
                  xName="x"
                  yName="y"
                  type="Column"
                  dataLabel={{ visible: true }}
                />
              </Chart3DSeriesCollectionDirective>
            </Chart3DComponent>
          </div>
        </div>

        <div className="flex w-10/12 justify-center items-center bg-white rounded-2xl lg:w-[1080px] mt-4  animate-fade-in delay-300">
          <div className="lg:w-[1080px] p-2">
            <GridComponent
              dataSource={data}
              editSettings={{ allowEditing: true, allowDeleting: true }}
              commandClick={commandClick}
              height={265}
              ref={(g) => (grid = g)}>
              <ColumnsDirective>
                <ColumnDirective field="ID" headerText="ID Candidat" />
                <ColumnDirective field="Name" headerText="Nom" />
                <ColumnDirective field="Exp" headerText="Expérience" />
                <ColumnDirective field="Degrees" headerText="Niveau d'etudes" />
                <ColumnDirective field="Adress" headerText="Adresse" />
                <ColumnDirective headerText="Commands" width="120" />
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
              showCloseIcon={true}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
