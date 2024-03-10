import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <header>
                <Link to="/">
                    <h1>Techx</h1>
                </Link>

                <nav>
                    <ul>
                        <li>
                            <Link to="/categoria/Iluminacion">Iluminacion</Link>
                        </li>
                        <li>
                            <Link to="/categoria/Temperatura">Temperatura</Link>
                        </li>
                        <li>
                            <Link to="/categoria/Audio">Audio</Link>
                        </li>
                        <li>
                            <Link to="/categoria/Seguridad">Seguridad</Link>
                        </li>
                    </ul>
                </nav>

                <CartWidget />

            </header>


        </div>
    )
}

export default NavBar

