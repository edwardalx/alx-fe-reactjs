import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <div className="nav-links">
            <Link to="/">My Logo</Link>
            <Link to="/"style={{marginLeft:"auto"}}>Home</Link>
            <Link to="/">Login</Link>
        </div>
    </div>
  )
}
