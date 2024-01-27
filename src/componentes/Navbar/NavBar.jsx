import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className="brand-logo" src="../img/brandlogo.svg" alt="brand" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/categoria/2">Chemicals</NavLink>
          </li>

          <li>
            <NavLink to="/categoria/3">Services</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/4">Accesories</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/5">Equipment</NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
