import CartWidget from "../CartWidget/CartWidget"
import './Navbar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    
    return (
        <header className="header-navbar">
            <Link to='/' className="logo"><h1>Viggo Tech Informatica</h1></Link>
            
            
            <nav>
                <ul className="menu">
                    <li>
                        <NavLink className='menu-link' to={'/'}> Inicio </NavLink>
                    </li>
                    <li>
                        <NavLink className='menu-link' to={`/categoria/2`}> Monitores </NavLink>
                    </li>
                    <li>
                        <NavLink className='menu-link' to={`/categoria/3`}> Perifericos </NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar