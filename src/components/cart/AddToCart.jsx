import Popup from "reactjs-popup"
import { useCart } from "/src/components/cart/CartContext.jsx"

const AddToCart = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <Popup
      trigger={
        <button className="py-2 bg-teal-700 text-white m-5 w-32 block mx-auto rounded-lg hover:bg-green-800 hover:shadow-slate-600 shadow-md text-center font-semibold">
          ADD TO CART
        </button>
      }
      position="right center"
      onOpen={() => addToCart(product)}
    >
      <div className="border-theme1 border-4 rounded-e-lg shadow-lg p-5 bg-white text-sm text-black w-4/5">
        {product.title} added to cart! Click outside this window to close
        overlay!
      </div>
    </Popup>
  )
}

export default AddToCart
