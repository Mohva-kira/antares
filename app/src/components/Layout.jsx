import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header";
import Breadcumb from "../components/Breadcumb";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      {/* Header fixe */}
      <Header />

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="mt-16"
      />

      {/* Contenu principal avec espace pour le header fixe */}
      <div className="flex flex-col flex-1 pt-20">
        {/* Breadcrumb */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4">
            <Breadcumb />
          </div>
        </div>

        {/* Zone de contenu */}
        <main className="flex flex-1 w-full  mt-0">
          <div className="flex-grow w-full px-4 py-6">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
