function SkeletonProduct() {
  return (
    <>
      <div className=" animate-pulse grid grid-cols-2 items-start m-16 border-t-4 border-gray-300 border-opacity-40">
        <h2 className="text-center m-10 text-3xl font-extrabold border-gray-300"></h2>
        <div className="text-left font-medium m-10 rounded-s-2xl bg-gray-300 bg-opacity-20 p-4"></div>
        <div className="block object-cover aspect-square w-60 m-auto bg-gray-400 rounded-e-2xl shadow-2xl" />
      </div>
      <div className="relative w-8/12 m-auto">
        <div className="w-10 h-10 border-gray-300"></div>

        <div className="w-20 h-20 border-gray-300"></div>
      </div>
      <div className="block m-auto bg-slate-300">
        <div className="border-solid border-x-2 p-2 text-pretty">
          <div className="w-52 h-52 border-gray-300"></div>
        </div>
      </div>
    </>
  )
}

export default SkeletonProduct
