function CalcDiscount({ price, discountedPrice }) {
  if (discountedPrice < price) {
    let discount = ((price - discountedPrice) / price) * 100
    return (
      <div className=" absolute right-0 top-12 rounded-lg shadow-large bg-red-700 p-2 text-white font-bold text-lg text-center opacity-85">
        -{discount.toFixed(0)}%
      </div>
    )
  }
  return null
}

export default CalcDiscount
