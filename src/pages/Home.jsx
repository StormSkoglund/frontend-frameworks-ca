import GetPosts from "../api/GetPosts"

function Home() {
  return (
    <>
      <h1 className="text-center mt-3 font-medium">WELCOME TO BUYME</h1>;
      <h2 className="text-center mn-3 font-small">
        Unique Finds for Him and Her, Especially Her!!
      </h2>
      <GetPosts />
    </>
  )
}

export default Home
