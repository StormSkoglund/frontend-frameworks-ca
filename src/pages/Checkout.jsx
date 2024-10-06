import { useCart } from "../components/cart/CartContext"
import CalcDiscount from "../components/calculators/CalcDiscount.jsx"
import { NavLink } from "react-router-dom"
import { TiArrowBack } from "react-icons/ti"

function Checkout() {
  const { cart } = useCart()

  return (
    <>
      <h1 className="text-center m-5 font-medium">CHECKOUT</h1>
      <div className="m-5">
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="border-b p-2">
                <p className="text-md font-bold">{item.title}</p>
                <div className="relative w-full lg:w-2/6 m-auto">
                  <p>Regular Price: NOK {item.price},-</p>
                  <p className="font-semibold">
                    With Discounts: NOK {item.discountedPrice},-
                  </p>

                  <CalcDiscount
                    price={item.price}
                    discountedPrice={item.discountedPrice}
                  />
                </div>
                <img
                  className="block object-cover aspect-square  mt-3 mb-3 w-40 rounded-e-2xl shadow-2xl"
                  src={item.image.url}
                  alt={item.title}
                />
              </li>
            ))}
          </ul>
        ) : (
          <>
            <p className="text-center text-4xl font-semibold mt-10">
              Your cart is empty.
            </p>

            <NavLink to="/" className="text-center">
              <div className="text-gray-900 mx-auto w-20 flex rounded-lg flex-row justify-center align-middle bg-theme2 shadow-sm hover:shadow-lg hover:bg-theme1 p-5 mt-2 mb-2">
                <TiArrowBack />
              </div>
              <p className="text-center text-lg italic mt-1">Go Back</p>
            </NavLink>
          </>
        )}
      </div>
    </>
  )
}

export default Checkout
