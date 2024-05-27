import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import PrLayoutDashboard from "./pages/PrLayoutDashboard";
import ContactDetails from "./components/ContactDetails";
import ConsentForm from "./components/ConsentForm";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index path="home" element={<div>Home</div>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
        <Route
          path="/pr"
          element={
            <PrivateRoute>
              <PrLayoutDashboard />
            </PrivateRoute>
          }
        >
          <Route index path="contact-details" element={<ContactDetails />} />
          <Route path="consent-form" element={<ConsentForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
