import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<AddTodoForm />} />
      <Route path='/list' element={<TodoList />}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
