function CalcPrice({ price, discountedPrice }) {
  if (discountedPrice < price) {
    return (
      <>
        <div className="flex flex-row w-fit">
          <div className="p-2 bg-red-500 opacity-85 text-white rounded-lg shadow-lg">
            <div className="text-xs font-bold">
              On sale: {discountedPrice},-
            </div>
          </div>
          <h3 className="font-bold text-md text-yellow-300 line-through bg-white rounded-lg shadow-lg pe-3 ps-3 pt-1 pb-1">
            {price},-
          </h3>
        </div>
      </>
    )
  } else {
    return (
      <div className="p-2 bg-white rounded-lg shadow-lg">
        <h3 className="font-bold text-xs text-black">{price},-</h3>
      </div>
    )
  }
}

export default CalcPrice
