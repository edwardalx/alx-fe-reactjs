import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login by saving a token
    localStorage.setItem("authToken", "demo-token");
    navigate("/profile", { replace: true }); // redirect after login
  };

  return <button onClick={handleLogin}>Login</button>;
}
