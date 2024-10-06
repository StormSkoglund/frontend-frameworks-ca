import { TiArrowBack } from "react-icons/ti"
import { NavLink, useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div className="bg- rounded-md shadow-md w-8/12 mx-auto mt-5">
      <h1 className="text-center font-bold text-yellow-600 bg-slate-700">
        Error: {""}
        {error.statusText || error.message}
      </h1>
      <NavLink to="/" className="text-center">
        <div className="text-gray-900 mx-auto w-20 flex rounded-lg flex-row justify-center align-middle bg-theme2 shadow-sm hover:shadow-lg hover:bg-theme1 p-5 mt-2 mb-2">
          <TiArrowBack />
        </div>
        <p className="text-center text-lg italic mt-1">Go Back</p>
      </NavLink>
    </div>
  )
}
