import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [cartAmount, setCartAmount] = useState(null);

  const addToCart = () => {
    console.log("Product added");
    cartAmount === 0;
    setCartAmount(cartAmount + 1);
  };
  return (
    <nav className="flex flex-row align-middle items-center justify-between mx-auto w-11/12 border-solid border-frame bg-boxbg border-2 rounded-md p-3 mt-2">
      <NavLink to="/">
        <img
          className="w-7"
          src="src/assets/logo-svg.svg"
          alt="The logo of the company, it's an uppercase b"
        />
      </NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink
        className="text-3xl text-theme1"
        to="/checkout"
        onClick={addToCart}
      >
        <div className="flex flex-col flex-wrap">
          <BsCart2 />
          <div className="text-frame text-sm mx-auto">{cartAmount}</div>
        </div>
      </NavLink>
    </nav>
  );
}

export default Nav;
