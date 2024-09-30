import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex h-full w-full bg-slate-400 mt-20 ">{children}</div>
    </>
  );
};

export default Layout;
