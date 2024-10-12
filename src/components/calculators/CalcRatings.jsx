import { FaStarHalfAlt } from "react-icons/fa"
import { FaStar } from "react-icons/fa6"
import { ImStarEmpty } from "react-icons/im"

export const CalcRatings = ({ rating }) => {
  const fullStar = <FaStar />
  const halfStar = <FaStarHalfAlt />
  const hollowStar = <ImStarEmpty />

  const stars = []

  if (rating % 1 !== 0) {
    const integerPart = Math.floor(rating)
    const decimalPart = rating - integerPart

    for (let i = 0; i < integerPart; i++) {
      stars.push(<span key={i}>{fullStar}</span>)
    }

    if (decimalPart >= 0.5) {
      stars.push(<span key={integerPart}>{halfStar}</span>)
    }

    for (let i = integerPart + 1; i < 5; i++) {
      stars.push(<span key={i + integerPart}>{hollowStar}</span>)
    }
  } else {
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>{fullStar}</span>)
    }

    for (let i = rating; i < 5; i++) {
      stars.push(<span key={i + rating}>{hollowStar}</span>)
    }
  }

  return (
    <div className="flex flex-row items-start justify-start mb-2 mt-2">
      {stars}
    </div>
  )
}
