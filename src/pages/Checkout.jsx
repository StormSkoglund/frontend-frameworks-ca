import { useCart } from "../utils/CartContext"

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
                <p>Regular Price: {item.price},-</p>
                <p>With Discounts: {item.discountedPrice},-</p>
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
