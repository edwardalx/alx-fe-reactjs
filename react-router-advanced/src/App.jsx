import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Home from "./components/Home";
import BlogPost from "./components/Posts";
import PostDetails from "./components/PostDetails";
import Login from "./components/Login";
import PrivateRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<BlogPost />} />
          <Route path="/blog/:id" element={<PostDetails />} />
            <Route path="/login" element={<Login />} />

          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
