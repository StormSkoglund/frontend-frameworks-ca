import { Helmet } from "react-helmet-async"
import UniqueProduct from "../api/UniqueProduct"

function ProductPage() {
  return (
    <>
      <Helmet>
        <title>BuyThat | Product Details</title>
        <meta
          name="description"
          content="Product details page, with description with reviews."
        />
      </Helmet>
      <h1 className="text-center mt-3 font-medium">PRODUCT PAGE</h1>
      <UniqueProduct />
    </>
  )
}

export default ProductPage
