import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import { CartProvider } from "../components/cart/CartContext"

function Layout() {
  return (
    <div>
      <CartProvider>
        <Header />
        <Outlet />
        <Footer />
      </CartProvider>
    </div>
  )
}

export default Layout
