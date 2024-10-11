import { Helmet } from "react-helmet-async"
import GetProducts from "../api/GetProducts"

function Home() {
  return (
    <>
      <Helmet>
        <title>BuyThat | Home</title>
        <meta
          name="description"
          content="Welcome to BuyThat, your ultimate destination for handpicked items tailored for everyone. Discover unique selections for him, her, and everyone in between."
        />
      </Helmet>
      <div className="relative w-10/12 md:w-8/12 h-auto m-auto mt-3">
        <img
          src="/assets/shop2.svg"
          alt="A drawing of happy people. They are carrying shopping bags"
          className="block m-auto w-full h-auto"
        />
        <h1 className="absolute inset-0 flex items-center z-50 justify-center text-center font-bold text-white text-xl md:text-4xl animate-pulse">
          Welcome To BuyThat.
        </h1>
        <h2 className="text-center mt-3 font-semibold bg-theme-1 bg-opacity-55 text-xl text-theme1">
          Unique Finds for Him and Especially Her!!
        </h2>
      </div>
      <GetProducts />
    </>
  )
}

export default Home
