import { useCart } from "../components/cart/CartContext"
import CalcDiscount from "../components/calculators/CalcDiscount.jsx"
import { FaRegTrashCan } from "react-icons/fa6"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"

function Checkout() {
  const { cart, removeItem, clearCart, addToCart } = useCart()
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
      <Helmet>
        <title>BuyThat | Checkout</title>
        <meta
          name="description"
          content="Review your order, add or remove products."
        />
      </Helmet>
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
                    <button
                      aria-label="Remove item"
                      className="w-4 m-2 text-lg font-bold border-solid border-2 rounded-md shadow-md hover:shadow-2xl"
                      onClick={() => removeItem(item.id)}
                    >
                      -
                    </button>
                    <button
                      aria-label="Add item"
                      className="w-4 m-2 text-lg font-bold border-solid border-2 rounded-md shadow-md hover:shadow-2xl"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                  <img
                    className="block object-cover aspect-square mt-3 mb-3 w-28 rounded-e-2xl shadow-2xl"
                    src={item.image.url}
                    alt={item.image.alt}
                  />
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center justify-between mx-auto border-solid border-2 p-5 m-4 w-fit">
              <p className="text-md font-bold text-red-700">Empty Cart:</p>
              <button aria-label="Clear cart" onClick={() => clearCart()}>
                <FaRegTrashCan />
              </button>
            </div>
            <div className="text-center m-5 border-t-4 w-2/4 mx-auto border-b-4">
              <p className="text-lg font-bold">
                Total: NOK {total.toFixed(2)},-
              </p>
            </div>
            <div className="mx-auto block w-2/4 text-center">
              <button
                aria-label="Check out"
                className="hover:cursor-pointer px-4 py-2 bg-teal-700 text-white m-5 text-large rounded-lg hover:bg-green-800 hover:shadow-slate-600 shadow-md font-semibold"
                onClick={checkOutButton}
              >
                Place Your Order
              </button>
              <div className="mx-auto w-50 text-lg "> Or </div>
              <Link to="/" className="text-center">
                <div className="text-gray-900 mx-auto w-50 flex rounded-lg flex-row justify-center border-2 align-middle shadow-sm hover:shadow-lg p-5 mt-2 mb-2">
                  <p className="text-center">
                    Return Back to Home & Keep Shopping
                  </p>
                  <span className="sr-only">Return to homepage</span>
                </div>
              </Link>
            </div>
          </>
        ) : (
          <p>YOUR CART IS EMPTY.</p>
        )}
      </div>
    </>
  )
}

export default Checkout
