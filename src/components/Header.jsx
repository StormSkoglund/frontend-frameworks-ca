import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <img
            src="src/assets/logo.png"
            alt="The logo of the company, it's an uppercase b"
          />
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    </header>
  );
}

export default Header;
