import { useCart } from "../components/cart/CartContext"
import CalcDiscount from "../components/calculators/CalcDiscount.jsx"
import { Link, useNavigate } from "react-router-dom"
import { TiArrowBack } from "react-icons/ti"
import { useState, useEffect } from "react"

function Checkout() {
  const { cart, clearCart } = useCart()
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const newTotal = cart.reduce((total, product) => {
      const price = parseFloat(product.discountedPrice)

      if (isNaN(price)) {
        console.error("price is not a number")
        return total
      }

      return total + price
    }, 0)
    setTotal(newTotal)
  }, [cart])

  const checkOutButton = () => {
    clearCart()
    navigate("/checkoutsuccess")
  }

  return (
    <>
      <h1 className="text-center m-5 font-medium">CHECKOUT</h1>
      <div className="mx-5 md:mx-20">
        {cart.length > 0 ? (
          <>
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
                    className="block object-cover aspect-square mt-3 mb-3 w-40 rounded-e-2xl shadow-2xl"
                    src={item.image.url}
                    alt={item.title}
                  />
                </li>
              ))}
            </ul>
            <div className="text-center m-5 border-t-4 w-2/4 mx-auto border-b-4">
              <p className="text-lg font-bold">
                Total: NOK {total.toFixed(2)},-
              </p>
            </div>
            <div className="mx-auto block w-2/4 text-center">
              <button
                className="hover:cursor-pointer px-4 py-2 bg-theme2 text-white m-5 text-large rounded-lg hover:bg-green-800 hover:shadow-slate-600 shadow-md font-semibold"
                onClick={checkOutButton}
              >
                Place Your Order
              </button>
              <div className="mx-auto w-50 text-lg "> Or </div>
              <Link to="/" className="text-center">
                <div className="text-gray-900 mx-auto w-50 flex rounded-lg flex-row justify-center border-2 align-middle shadow-sm hover:shadow-lg p-5 mt-2 mb-2">
                  <p className="text-center text-lg mt-1 font-semibold">
                    Return to Home And Continue Shopping
                  </p>
                </div>
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="text-center text-4xl font-semibold mt-10">
              Your cart is empty.
            </p>
            <Link to="/" className="text-center">
              <div className="text-gray-900 mx-auto w-20 flex rounded-lg flex-row justify-center align-middle bg-theme2 shadow-sm hover:shadow-lg hover:bg-theme1 p-5 mt-2 mb-2">
                <TiArrowBack />
              </div>
              <p className="text-center text-lg italic mt-1">Go Back</p>
            </Link>
          </>
        )}
      </div>
    </>
  )
}

export default Checkout
