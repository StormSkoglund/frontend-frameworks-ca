import { useCart } from "./CartContext.jsx"

const ChangeCartContent = () => {
  const { cart, updateCart } = useCart()

  const addItem = (item) => {
    const itemIndex = cart.findIndex((i) => i.id === item.id)
    let newCart = [...cart]
    if (itemIndex === -1) {
      newCart.push({ ...item, quantity: 1 })
    } else {
      newCart[itemIndex].quantity += 1
    }
    updateCart(newCart)
  }

  const removeItem = (itemId) => {
    const itemIndex = cart.findIndex((i) => i.id === itemId)
    let newCart = [...cart]
    if (itemIndex !== -1) {
      if (newCart[itemIndex].quantity > 1) {
        newCart[itemIndex].quantity -= 1
      } else {
        newCart.splice(itemIndex, 1)
      }
    }
    updateCart(newCart)
  }

  return { addItem, removeItem }
}

export default ChangeCartContent
