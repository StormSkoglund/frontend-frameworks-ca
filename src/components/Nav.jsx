import { useState } from "react"
import { BsCart2 } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { useCart } from "./cart/CartContext"
import { FaBars, FaTimes } from "react-icons/fa"

function Nav() {
  const { cart } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="flex flex-row align-middle items-center justify-between mx-auto w-11/12 shadow-xl bg-boxbg border-2 rounded-md p-3 mt-2">
      <NavLink to="/">
        <img
          className="w-full"
          src="/assets/logo-full.svg"
          alt="The logo of the company, it's an uppercase b"
        />
      </NavLink>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-3xl text-theme1" />
          ) : (
            <FaBars className="text-3xl text-theme1" />
          )}
        </button>
      </div>
      <div
        aria-label="hamburger-menu"
        className={`flex ${
          isOpen ? "flex-col-reverse items-center" : "flex-col"
        } md:flex md:flex-row justify-end gap-2 ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <NavLink to="/contact">
          <p className="text-bold p-1 w-full text-center rounded-lg text-white text-lg border-solid border-2 bg-teal-700 hover:shadow-xl">
            CONTACT
          </p>
        </NavLink>
        <NavLink className="text-3xl text-theme1" to="/checkout">
          <div className="relative">
            <BsCart2 />
            <div className="absolute bottom-2 left-5 opacity-90 text-center bg-red-500 text-white rounded-full px-1.5 text-xs">
              {totalQuantity}
            </div>
          </div>
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav
