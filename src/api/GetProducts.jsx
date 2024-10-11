import { Link } from "react-router-dom"
import useApi from "../hooks/useApi"
import CalcPrice from "../components/calculators/CalcPrice"
import CalcDiscount from "../components/calculators/CalcDiscount"
import SkeletonHome from "../components/loaders/SkeletonHome"
import SearchBar from "../components/search/SearchBar"

function GetProducts() {
  const apiUrl = import.meta.env.VITE_API_URL
  const { data, isLoading, isError } = useApi(`${apiUrl}`)

  if (isLoading) {
    return <SkeletonHome />
  }
  if (isError) {
    return (
      <div className="animate-pulse text-red-600 bg-white text-center p-20 rounded-md shadow-sm w-20">
        There was an error loading our products!
      </div>
    )
  }
  if (data.data) {
    console.log(data)
    return (
      <div className="flex flex-row items-end justify-evenly m-2 p-5 overflow-x-auto flex-wrap bg-theme2 bg-opacity-15 border-solid border-t-4">
        <div className="text-center font-bold text-2xl mx-auto text-orange-700 animate-ping-slow">
          AUTUMN SALE!
        </div>
        <div className="w-full">
          <SearchBar products={data.data} />
        </div>
        {data.data.map((item) => (
          <Link key={item.id} to={`/productpage/${item.id}`}>
            <div className="cursor-pointer rounded-e-2xl m-5 overflow-hidden shadow-2xl hover:shadow-black hover:animate-bounce-once hover:transition hover:opacity-80 relative mb-12">
              <img
                className="block object-cover aspect-square w-full sm:w-60"
                src={item.image.url}
                alt={item.image.alt}
              />
              <div className="flex items-start justify-center bg-slate-800 bg-opacity-25 text-white text-center absolute inset-0 font-bold text-2xl">
                {item.title}
                <button className="font-bold text-sm text-white absolute bottom-3 border-solid rounded-e-2xl border-2 border-white p-2 opacity-90 hover:border-4 duration-200">
                  Show details
                </button>
                <CalcDiscount
                  price={item.price}
                  discountedPrice={item.discountedPrice}
                />
              </div>
            </div>
            <span className="absolute flex flex-row justify-between items-end mt-margminus">
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

export default GetProducts
