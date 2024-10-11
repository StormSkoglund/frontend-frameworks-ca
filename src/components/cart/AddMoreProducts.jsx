import { useCart } from "/src/components/cart/CartContext.jsx"
// I use this component when I increment the number of products inside my cart.
const AddMoreProducts = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <button
      aria-label="Add item"
      className="w-6 m-2 text-lg font-bold border-solid border-2 rounded-md shadow-md hover:shadow-2xl z-40 bg-white"
      onClick={() => addToCart(product)}
    >
      +
    </button>
  )
}

export default AddMoreProducts
