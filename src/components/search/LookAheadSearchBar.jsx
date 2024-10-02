import { useState } from "react"
import { Link } from "react-router-dom"

// This is a slightly modified version of the code presented in Connor obriens video "7-React-typeahead-search-example" (Accessed: 01 October 2024).

function LookAheadSearchBar({ products = [] }) {
  const [searchTerm, setSearchTerm] = useState("")

  console.log("searchTerm", searchTerm)

  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  )

  console.log("filterProducts", filterProducts)

  return (
    <div className="w-full flex items-center flex-col justify-center m-5 relative">
      <div className="w-full">
        <label
          htmlFor="search"
          className="text-lg font-bold float text-gray-800"
        >
          Looking for something ?
        </label>
      </div>
      <input
        className="border-solid border-2 border-theme1 rounded-md p-2 w-6/12 relative"
        value={searchTerm}
        id="search"
        placeholder="Search"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {filterProducts.length > 0 && searchTerm.length > 0 && (
        <ul className="border-solid rounded-lg p-2 w-6/12 absolute top-full mt-2 z-50 bg-theme1 opacity-95 shadow-lg text-lg text-white">
          {filterProducts.map((product) => (
            <li key={product.id}>
              <Link
                to={`productPage/${product.id}`}
                className="block p-4 hover:bg-gray-500"
              >
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LookAheadSearchBar
