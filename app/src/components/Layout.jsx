import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ToastContainer />

      <div className="flex min-h-screen  w-full bg-slate-400 mt-20 ">
        <div className="flex-grow"> {children} </div>
      </div>
    </>
  );
};

export default Layout;
