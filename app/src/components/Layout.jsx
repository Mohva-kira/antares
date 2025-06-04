import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-gray-100">
    <Header />
    <ToastContainer />
    <main className="flex flex-1 w-full bg-slate-200 mt-20">
      <div className="flex-grow w-full px-4 py-6">
        {children}
      </div>
    </main>
  </div>
  );
};

export default Layout;
