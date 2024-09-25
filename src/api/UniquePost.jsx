import useApi from "../hooks/useApi"
import { useParams } from "react-router-dom"

function UniquePost() {
  let { id } = useParams()
  console.log(id)

  const { data, isLoading, isError } = useApi(
    `https://v2.api.noroff.dev/online-shop/${id}`
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
          There was an error loading the product, please try again later!
        </div>
      </>
    )
  }
  if (data.data) {
    return (
      <>
        <div className="grid grid-cols-2 items-start m-16 border-t-4 border-theme2 border-opacity-40">
          <h2 className="text-center m-10 text-3xl font-extrabold text-slate-700">
            {data.data.title}
          </h2>
          <p className="text-left font-medium m-10 rounded-s-2xl bg-theme1 bg-opacity-20 p-12">
            {data.data.description}
          </p>
          <img
            src={data.data.image.url}
            alt={data.data.image.alt}
            className="block object-cover aspect-square w-full rounded-e-2xl shadow-2xl"
          />
        </div>
      </>
    )
  }
}

export default UniquePost
