import { useState } from "react"
import { Link } from "react-router-dom"

// This is a slightly modified version of the code presented in Connor obriens video "7-React-typeahead-search-example" (Accessed: 01 October 2024).

function SearchBar({ products = [] }) {
  const [searchTerm, setSearchTerm] = useState("")

  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  )

  return (
    <div className="w-full flex items-center flex-col justify-center m-5 relative ms-0">
      <label htmlFor="search" className="w-2/4 text-md font-bold text-gray-800">
        Looking for something ?
      </label>

      <input
        autoComplete="off"
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

export default SearchBar
