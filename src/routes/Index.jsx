import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import Checkout from "../pages/Checkout.jsx";
import CheckoutSuccess from "../pages/CheckoutSuccess.jsx";
import App from "../App.jsx";
import Layout from "../components/Layout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "productpage/:ID",
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
]);

export { router };
