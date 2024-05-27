import React from "react";
import SideNavbar from "../components/SideNavbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <SideNavbar />
      <div className="flex-grow p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
