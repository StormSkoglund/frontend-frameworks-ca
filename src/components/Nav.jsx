import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [cartAmount, setCartAmount] = useState(0);

  const addToCart = () => {
    console.log("Product added");
    setCartAmount(cartAmount + 1);
  };
  return (
    <nav className="flex flex-row align-middle items-center justify-between mx-auto w-6/12 border-solid border-frame bg-boxbg border-2 rounded-md p-3 mt-2">
      <NavLink to="/">
        <img
          className="w-7"
          src="src/assets/logo-svg.svg"
          alt="The logo of the company, it's an uppercase b"
        />
      </NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink
        className="text-3xl text-theme1"
        to="/Checkout"
        onClick={addToCart}
      >
        <span className="flex row-auto flex-wrap">
          {cartAmount}
          <BsCart2 />
        </span>
      </NavLink>
    </nav>
  );
}

export default Nav;
