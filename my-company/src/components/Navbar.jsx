import { Link } from "react-router-dom"
export default  function NavBar(){
    return(
        <>
        <header>
            <div className="navbar" style={{"backgroundColor":"blue", "display":"flex", "justifyContent":"space-evenly"}}>
                <ul className="nav-list">
                    <li> <Link to = "/about">About</Link></li>
                    <li> <Link to = "/contact">Contacts</Link></li>
                    <li> <Link to = "/">Home</Link></li>
                    <li> <Link to = "/services">Services</Link></li>
                </ul>
            </div>
        </header>
        </>
    )
}