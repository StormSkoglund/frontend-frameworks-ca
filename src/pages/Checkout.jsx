import { useCart } from "../components/cart/CartContext"
import CalcDiscount from "../utils/CalcDiscount"

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
                <div className="relative w-2/6 m-auto">
                  <p>Regular Price: {item.price},-</p>
                  <p>With Discounts: {item.discountedPrice},-</p>
                  <p>You Save: </p>
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
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  )
}

export default Checkout
