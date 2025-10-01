import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <header className='flex  justify-between'>
            <Link to="/"className=''><div>Home</div></Link>
            <Link to="/add" className=''><div>Add Recipe</div></Link>
        </header>
    </div>
  )
}
