import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { FaRegStar } from "react-icons/fa6"

export const CalcRatings = ({ rating }) => {
  const fullStar = <FaStar />
  const halfStar = <FaStarHalfAlt />
  const hollowStar = <FaRegStar />

  const stars = []
  const integerPart = Math.floor(rating)
  const decimalPart = rating - integerPart

  for (let i = 0; i < integerPart; i++) {
    stars.push(<span key={i}>{fullStar}</span>)
  }

  if (decimalPart >= 0.5) {
    stars.push(<span key={integerPart}>{halfStar}</span>)
  }

  const totalStars = decimalPart >= 0.5 ? integerPart + 1 : integerPart
  for (let i = totalStars; i < 5; i++) {
    stars.push(<span key={i}>{hollowStar}</span>)
  }

  return (
    <div className="flex flex-row items-start justify-start mb-2 mt-2">
      {stars}
    </div>
  )
}
