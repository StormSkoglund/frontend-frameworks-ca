import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { router } from "./routes/index.jsx"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { CartProvider } from "./components/cart/CartContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </HelmetProvider>
  </StrictMode>
)
