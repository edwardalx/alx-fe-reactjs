import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import NavBar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
       <Route path = "/about" element = {<About />} />
      <Route path = "/contact" element = {<Contact />} />
      <Route path = "/" element = {<Home />} />
      <Route path = "/service" element = {<Services />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
