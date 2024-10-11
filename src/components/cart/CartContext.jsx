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
    console.log("Removing item with ID:", itemId)
    updateCart((prevCart) => {
      const newCart = prevCart
        .map((item) => {
          if (item.id === itemId) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 }
            }
            return null
          }
          return item
        })
        .filter((item) => item !== null)

      console.log("Updated cart after removal:", newCart)
      return newCart
    })
  }

  const addToCart = (product) => {
    updateCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === product.id)
      let newCart = [...prevCart]
      if (itemIndex === -1) {
        newCart.push({ ...product, quantity: 1 })
      } else {
        newCart[itemIndex].quantity += 1
      }
      return newCart
    })
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
