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
      <p className="text-center">Go Back</p>
      <NavLink to="/" className="text-center">
        <div className="text-gray-900 mx-auto flex flex-row justify-center align-middle bg-theme2">
          <TiArrowBack />
        </div>
      </NavLink>
    </div>
  )
}
