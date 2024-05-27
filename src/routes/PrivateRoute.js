import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('token'); // Replace with actual authentication check logic

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
