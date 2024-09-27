import { BsCart2 } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { useCart } from "../utils/CartContext"

function Nav() {
  const { cart } = useCart()
  return (
    <nav className="flex flex-row align-middle items-center justify-between mx-auto w-11/12 shadow-xl bg-boxbg border-2 rounded-md p-3 mt-2">
      <NavLink to="/">
        <img
          className="w-7"
          src="src/assets/logo-svg.svg"
          alt="The logo of the company, it's an uppercase b"
        />
      </NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink className="text-3xl text-theme1" to="/checkout">
        <div className="relative">
          <BsCart2 />
          <div className="absolute bottom-2 left-5 opacity-90 text-center bg-red-500 text-white rounded-full p-1 text-xs">
            {cart.length}
          </div>
        </div>
      </NavLink>
    </nav>
  )
}

export default Nav
