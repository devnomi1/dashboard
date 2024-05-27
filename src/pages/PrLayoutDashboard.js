import React from "react";
import { Link, Outlet } from "react-router-dom";
const PrLayoutDashboard = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 text-white">
        <Link to="contact-details" className="mr-4">
          Contact Details
        </Link>
        <Link to="consent-form" className="mr-4">
          Consent Form
        </Link>
      </nav>
      <p>
        <h1 className="text-2xl font-bold">New Dashboard</h1>
        <Outlet />
      </p>
    </div>
  );
};

export default PrLayoutDashboard;
