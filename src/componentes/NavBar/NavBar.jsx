import { Link,NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
        <Link to="/">
            <h1 className="enlaces"> Tienda Urbana </h1>
        </Link>



        <nav>
            <ul>
                <li>
                    <NavLink to="/categoria/ropa" style={{ textDecoration: 'none', color:"white" }}> Ropa </NavLink>
                </li>

                <li>
                    <NavLink to="/categoria/accs" style={{ textDecoration: 'none' , color:"white"}}> Accesorios </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar