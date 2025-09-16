import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function App() {
  const [count, setCount] = useState([])
  useEffect( ()=>{
    const getData = async() =>{
      const response = await axios.get("https://api.github.com/users/octocat");
     setCount(response.data)
    }
    getData()
  },[])
  
  
  return (
    <>
    <h1>GitHub User</h1>
      {count ? (
        <>
          <p><strong>countname:</strong> {count.login}</p>
          <p><strong>ID:</strong> {count.id}</p>
          <p>
            <strong>Profile URL:</strong>{" "}
            <a href={count.html_url} target="_blank" rel="noreferrer">
              {count.html_url}
            </a>
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      {console.log(count)}
    </>
  )
}

export default App
