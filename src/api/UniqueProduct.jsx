import useApi from "../hooks/useApi"
import { Link, useParams } from "react-router-dom"
import CalcPrice from "../components/calculators/CalcPrice"
import AddToCart from "../components/cart/AddToCart"
import CalcDiscount from "../components/calculators/CalcDiscount"
import SkeletonProduct from "../components/loaders/SkeletonProduct"
import { CalcRatings } from "../components/calculators/CalcRatings"

function UniqueProduct() {
  let { id } = useParams()
  const apiUrl = import.meta.env.VITE_API_URL

  const { data, isLoading, isError } = useApi(`${apiUrl}/${id}`)
  if (isLoading) {
    return <SkeletonProduct />
  }
  if (isError) {
    return (
      <div className="animate-pulse text-red-600 text-center bg-slate-600 rounded-md shadow-sm w-20">
        There was an error loading the product, please try again later!
      </div>
    )
  }
  if (data.data) {
    const product = {
      id: data.data.id,
      title: data.data.title,
      price: data.data.price,
      discountedPrice: data.data.discountedPrice,
      image: {
        url: data.data.image.url,
        alt: data.data.image.alt,
      },
    }

    let reviewContent
    if (data.data.reviews && data.data.reviews.length > 0) {
      reviewContent = data.data.reviews.map((review) => (
        <div
          key={review.id}
          className="p-4 text-sm bg-gray-100 rounded-md shadow-md mb-4"
        >
          <p className="font-bold">{review.username}</p>
          <div className="text-md">
            Rating: <CalcRatings rating={review.rating} />{" "}
          </div>
          <p>{review.description}</p>
        </div>
      ))
    } else {
      reviewContent = <p>There are no reviews for this specific product.</p>
    }

    return (
      <>
        <div className="flex flex-col justify-evenly items-center sm:grid sm:grid-cols-2 sm:items-start  sm: m-16 mb-5 border-t-4 border-theme2 border-opacity-40 bg-theme1 bg-opacity-15 w-11/12 mx-auto xl:w-6/12 2xl:w-8/12 ;">
          <h2 className="text-center m-2 text-3xl font-extrabold text-slate-700">
            {data.data.title}
          </h2>
          <p className="text-left font-medium text-sm m-2 md:m-5 rounded-s-2xl bg-theme1 bg-opacity-20 p-2 md:p-4">
            {data.data.description}
          </p>
          <img
            src={data.data.image.url}
            alt={data.data.image.alt}
            className="block object-cover aspect-square w-60 m-auto rounded-e-2xl shadow-2xl 2xl:w-80"
          />
          <div className="relative w-8/12 block mx-auto mb-20 sm:mb-0">
            Price:
            <CalcPrice
              price={data.data.price}
              discountedPrice={data.data.discountedPrice}
            />
            <div className="relative">
              <CalcDiscount
                price={data.data.price}
                discountedPrice={data.data.discountedPrice}
              />
            </div>
          </div>
          <AddToCart product={product} />
          <div className="block m-auto">
            <div className="border-solid border-x-2 p-2 text-pretty">
              <p className="text-lg text-slate-900 font-bold mb-2">
                Customer Reviews
              </p>
              {reviewContent}
            </div>
          </div>
        </div>
        <div>
          <Link to="/checkout" className="text-center">
            <div className="text-gray-900 block mx-auto w-50 rounded-lg border-2 w-64 shadow-sm hover:shadow-lg p-5 mt-2 mb-2">
              <p className="text-center">Proceed to Checkout</p>
            </div>
          </Link>
        </div>
        <div>
          <p className="text-lg text-center">Or </p>
        </div>
        <Link to="/" className="text-center">
          <div className="text-gray-900 block mx-auto w-50 rounded-lg border-2 w-64 shadow-sm hover:shadow-lg p-5 mt-2 mb-2">
            <p className="text-center">Return Back to Home & Keep Shopping</p>
          </div>
        </Link>
      </>
    )
  }
}

export default UniqueProduct
