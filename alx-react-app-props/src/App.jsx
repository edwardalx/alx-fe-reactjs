import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'
import ProfilePage from './drillTestComponents/ProfilePage'
import UserContext from './components/UserContext'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };


  return (
    <>
        <Header />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <UserContext.Provider value={userData}><ProfilePage /></UserContext.Provider> 
        <MainContent />
        <Footer />
        <WelcomeMessage />
    </>
  )
}

export default App
