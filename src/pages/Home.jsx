import GetProducts from "../api/GetProducts"

function Home() {
  return (
    <>
      <div className="relative w-10/12 md:w-8/12 h-auto m-auto mt-3">
        <img
          src="src/assets/shop2.svg"
          alt="A drawing of happy people. They are carrying shopping bags"
          className="block m-auto w-full h-auto"
        />
        <h1 className="absolute inset-0 flex items-center z-50 justify-center text-center font-bold text-white text-xl md:text-4xl animate-pulse">
          Welcome To BuyMe.
        </h1>
        <h2 className="text-center mt-3 font-small bg-theme-1 bg-opacity-55 text-lg animate-typewriter animate-pulse">
          Unique Finds for Him and Her, Especially Her!!
        </h2>
      </div>
      <GetProducts />
    </>
  )
}

export default Home
