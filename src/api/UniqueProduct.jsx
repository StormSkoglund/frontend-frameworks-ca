import useApi from "../hooks/useApi"
import { useParams } from "react-router-dom"
import CalcPrice from "../utils/CalcPrice"
import AddToCart from "../components/cart/AddToCart"
import CalcDiscount from "../utils/CalcDiscount"
import SkeletonProduct from "../components/loaders/SkeletonProduct"

function UniqueProduct() {
  let { id } = useParams()
  console.log(id)

  const { data, isLoading, isError } = useApi(
    `https://v2.api.noroff.dev/online-shop/${id}`
  )
  if (isLoading) {
    return <SkeletonProduct />
  }
  if (isError) {
    return (
      <>
        <div className="animate-pulse text-red-600 bg-slate-600 rounded-md shadow-sm w-20">
          There was an error loading the product, please try again later!
        </div>
      </>
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
          <p className="text-md">Rating: {review.rating}</p>
          <p>{review.description}</p>
        </div>
      ))
    } else {
      reviewContent = <p>There are no reviews for this specific product.</p>
    }

    return (
      <>
        <div className="grid grid-cols-2 items-start m-16 border-t-4 border-theme2 border-opacity-40 bg-theme1 bg-opacity-15">
          <h2 className="text-center m-10 text-3xl font-extrabold text-slate-700">
            {data.data.title}
          </h2>
          <p className="text-left font-medium m-10 rounded-s-2xl bg-theme1 bg-opacity-20 p-4">
            {data.data.description}
          </p>
          <img
            src={data.data.image.url}
            alt={data.data.image.alt}
            className="block object-cover aspect-square w-60 m-auto rounded-e-2xl shadow-2xl"
          />
          <div className="relative w-8/12 m-auto">
            Price:
            <CalcPrice
              price={data.data.price}
              discountedPrice={data.data.discountedPrice}
            />
            <CalcDiscount
              price={data.data.price}
              discountedPrice={data.data.discountedPrice}
            />
          </div>
          <AddToCart product={product} />
          <div className="block m-auto">
            <div className="border-solid border-x-2 p-2 text-pretty">
              {reviewContent}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default UniqueProduct
