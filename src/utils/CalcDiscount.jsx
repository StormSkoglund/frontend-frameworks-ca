function CalcDiscount({ price, discountedPrice }) {
  if (discountedPrice < price) {
    let discount = ((price - discountedPrice) / price) * 100
    return (
      <div className="transform-gpu bg-red-700 opacity-75">
        discount.toFixed(2)
      </div>
    )
  } else {
    return <div>none</div>
  }
}
