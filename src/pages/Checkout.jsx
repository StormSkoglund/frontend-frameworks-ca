import { useCart } from "../components/cart/CartContext"
import CalcDiscount from "../components/calculators/CalcDiscount.jsx"
import { FaRegTrashCan } from "react-icons/fa6"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import AddToCart from "../components/cart/AddToCart.jsx"
import AddMoreProducts from "../components/cart/AddMoreProducts.jsx"

function Checkout() {
  const { cart, removeItem, clearCart, addItem } = useCart()
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

  const getUniqueProducts = (cart) => {
    const uniqueProducts = cart.reduce((acc, product) => {
      const existingProduct = acc.find((item) => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 0) + 1
      } else {
        acc.push({ ...product, quantity: 1 })
      }
      return acc
    }, [])
    return uniqueProducts
  }

  const uniqueProducts = getUniqueProducts(cart)

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
      <div className="mx-5 md:mx-40">
        {uniqueProducts.length > 0 ? (
          <>
            <ul>
              {uniqueProducts.map((item, index) => (
                <li key={index} className="border-b  border-t p-2">
                  <p className="text-lg text-center font-bold">{item.title}</p>
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
                    <p>Quantity: {item.quantity}</p>
                    <AddMoreProducts product={item} />
                  </div>
                  <img
                    className="block object-cover aspect-square mt-3 mb-3 w-40 rounded-e-2xl shadow-2xl"
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
                <div className="text-gray-900 mx-auto w-50 flex rounded-lg flex-row justify-center border-2">
                  Continue Shopping
                </div>
              </Link>
            </div>
          </>
        ) : (
          <div className="rounded-e-lg block mx-auto w-fit">
            <p className="text-center p-5 bg-teal-700 text-white rounded-e-lg shadow-lg mb-5">
              Your cart is empty.
            </p>{" "}
            <Link to="/" className="text-center">
              <div className="text-gray-900 mx-auto w-50 flex rounded-lg flex-row justify-center border-2">
                Continue Shopping
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Checkout
