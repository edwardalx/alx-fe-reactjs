import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import HomePage from './pages/Home'
import RecipeDetails from './components/RecipeDetails'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

import { Routes, Route, BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
    <Routes>
      <Route path = "/" element = {<HomePage/>} />
      <Route path='/detail/:id' element = {<RecipeDetails />}/>
      <Route path= '/favorite' element={<FavoritesList />} />
      <Route path='/recommended' element={<RecommendationsList />} />
    </Routes>
    </>
  )
}

export default App
