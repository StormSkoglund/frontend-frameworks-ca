import { useCart } from "/src/components/cart/CartContext.jsx"

const AddMoreProducts = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <button
      aria-label="Add item"
      className="w-4 m-2 text-lg font-bold border-solid border-2 rounded-md shadow-md hover:shadow-2xl"
      onClick={() => addToCart(product)}
    >
      +
    </button>
  )
}

export default AddMoreProducts
