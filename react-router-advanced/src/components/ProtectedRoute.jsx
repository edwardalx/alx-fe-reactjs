import React from "react";
import { Navigate } from "react-router-dom";

// Simple function to check if the user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

export default function PrivateRoute({ children }) {
  if (!isAuthenticated()) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  // Render the protected component if authenticated
  return children;
}
