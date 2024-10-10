import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { router } from "./routes/Index.jsx"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
)
