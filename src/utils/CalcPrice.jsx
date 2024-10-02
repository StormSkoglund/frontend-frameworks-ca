function CalcPrice({ price, discountedPrice }) {
  if (discountedPrice < price) {
    return (
      <>
        <div className="flex flex-row w-fit">
          <div className="p-2 bg-red-500 opacity-85 text-white rounded-lg shadow-lg">
            <div className="text-xs font-bold">
              On sale: NOK {discountedPrice}
            </div>
          </div>
          <h3 className="font-bold text-md text-yellow-300 line-through bg-white rounded-lg shadow-lg pe-3 ps-3 pt-1 pb-1">
            NOK {price}
          </h3>
        </div>
      </>
    )
  } else {
    return (
      <div className=" flex flex-row w-fit p-2 bg-white rounded-lg shadow-lg">
        <h3 className="font-bold text-xs text-black">NOK {price}</h3>
      </div>
    )
  }
}

export default CalcPrice
