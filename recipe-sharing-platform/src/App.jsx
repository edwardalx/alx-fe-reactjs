import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {Routes, Route,BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="*" element = {<p>Page Not Found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
