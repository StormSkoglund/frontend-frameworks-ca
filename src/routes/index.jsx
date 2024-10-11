import { createBrowserRouter } from "react-router-dom"
import Contact from "../pages/Contact.jsx"
import ProductPage from "../pages/ProductPage.jsx"
import Checkout from "../pages/Checkout.jsx"
import CheckoutSuccess from "../pages/CheckoutSuccess.jsx"
import Layout from "../components/Layout.jsx"
import ErrorPage from "../pages/ErrorPage.jsx"
import Home from "../pages/Home.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "productPage/:id",
        element: <ProductPage />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "checkoutsuccess",
        element: <CheckoutSuccess />,
      },
    ],
  },
])

export { router }
