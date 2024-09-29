import React from "react"
import { useCart } from "/src/components/cart/CartContext.jsx"

const AddToCart = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <button
      className=" py-2 bg-theme2 text-white m-5  rounded-lg hover:bg-green-800 hover:shadow-slate-600 shadow-md text-center font-semibold"
      onClick={() => addToCart(product)}
    >
      ADD TO CART
    </button>
  )
}

export default AddToCart
