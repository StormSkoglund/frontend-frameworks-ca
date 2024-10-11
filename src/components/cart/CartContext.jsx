import { createContext, useState, useContext, useEffect } from "react"

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, updateCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })
  // I use the addItem and removeItem to increment and decrement products/items in my cart.
  const addItem = (item) => {
    console.log("Adding item:", item)
    const itemIndex = cart.findIndex((i) => i.id === item.id)
    let newCart = [...cart]
    if (itemIndex === -1) {
      newCart.push({ ...item, quantity: 1 })
    } else {
      const existingItem = newCart[itemIndex]
      existingItem.quantity = (existingItem.quantity || 0) + 1
    }
    console.log("Updated cart:", newCart)
    newCart.forEach((cartItem) =>
      console.log(`Item: ${cartItem.title}, Quantity: ${cartItem.quantity}`)
    )
    updateCart(newCart)
  }

  const removeItem = (itemId) => {
    updateCart((prevCart) => {
      const itemIndex = prevCart.findIndex((i) => i.id === itemId)
      if (itemIndex === -1) return prevCart

      const newCart = [...prevCart]
      const existingItem = newCart[itemIndex]

      if ((existingItem.quantity || 0) > 1) {
        existingItem.quantity -= 1
      } else {
        newCart.splice(itemIndex, 1)
      }

      console.log("Updated cart after removal:", newCart)
      newCart.forEach((cartItem) =>
        console.log(`Item: ${cartItem.title}, Quantity: ${cartItem.quantity}`)
      )

      return newCart
    })
  }

  const addToCart = (product) => {
    updateCart((prevCart) => [...prevCart, product])
  }

  const clearCart = () => {
    updateCart([])
    localStorage.removeItem("cart")
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    console.log("Cart state updated:", cart)
  }, [cart])

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, addToCart, clearCart, updateCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
