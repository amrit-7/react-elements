import React from "react";
import SideBar from "../components/sidebar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 bg-white">
      <SideBar />
      <div className="col-span-5 pt-3 m-0 pe-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
