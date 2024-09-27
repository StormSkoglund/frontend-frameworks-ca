import { Link } from "react-router-dom"
import useApi from "../hooks/useApi"
import CalcPrice from "../utils/CalcPrice"

function GetPosts() {
  const { data, isLoading, isError } = useApi(
    "https://v2.api.noroff.dev/online-shop"
  )

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-theme1"></div>
        <p className="animate-pulse">loading...</p>
      </div>
    )
  }
  if (isError) {
    return (
      <>
        <div className="animate-pulse text-red-600 bg-slate-600 rounded-md shadow-sm w-20">
          There was an error loading our products!
        </div>
      </>
    )
  }
  if (data.data) {
    console.log(data)
    return (
      <div className="flex flex-row items-end justify-between m-2 p-5 overflow-x-auto flex-wrap bg-theme2 bg-opacity-15 border-solid border-t-4">
        {data.data.map((item) => (
          <Link key={item.id} to={`/productpage/${item.id}`}>
            <div className="cursor-pointer rounded-e-2xl m-3 overflow-hidden shadow-2xl hover:shadow-black hover:animate-bounce-once hover:transition hover:opacity-80 relative">
              <img
                className="block object-cover aspect-square w-full md:w-72"
                src={item.image.url}
                alt={item.image.alt}
              ></img>
              <div className="flex items-start justify-center bg-slate-800 bg-opacity-25 text-white text-center absolute inset-0 font-bold text-2xl">
                {item.title}
                <button className="font-bold text-sm text-white absolute bottom-3 border-solid rounded-e-2xl border-2 border-white p-2 opacity-85 hover:border-4 duration-200">
                  Show details
                </button>
              </div>
            </div>
            <span className="absolute flex flex-row justify-between items-end mt-margminus mb-2">
              <CalcPrice
                price={item.price}
                discountedPrice={item.discountedPrice}
              />
            </span>
          </Link>
        ))}
      </div>
    )
  } else {
    return <p>No data available</p>
  }
}
export default GetPosts
