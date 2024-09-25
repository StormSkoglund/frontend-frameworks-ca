import useApi from "../hooks/useApi"

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
    return (
      <div className="flex flex-row items-start justify-between m-2 p-5 overflow-x-auto flex-wrap bg-theme2 bg-opacity-15 border-solid border-t-4">
        {data.data.map((item) => (
          <div
            key={item.id}
            data={item.id}
            className="cursor-pointer w-60 max-h-fit object-cover rounded-e-2xl m-3 overflow-hidden shadow-2xl hover:animate-bounce-once hover:transition hover:opacity-80 relative"
          >
            <div className="relative">
              <img
                className="w-full"
                src={item.image.url}
                alt={item.image.alt}
              ></img>
              <div className=" flex items-start justify-center bg-slate-800 bg-opacity-20 text-white text-center absolute inset-0 font-bold text-2xl">
                {item.title}
                <button className="font-bold text-sm text-white absolute bottom-3 border-solid rounded-e-2xl border-2 border-white p-2 opacity-70">
                  Show details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  } else {
    return <p>No data available</p>
  }
}
export default GetPosts
