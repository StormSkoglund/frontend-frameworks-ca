import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import { CartProvider } from "../components/cart/CartContext"

function Layout() {
  return (
    <CartProvider>
      <Header />
      <div className="h-screen flex flex-col">
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default Layout
