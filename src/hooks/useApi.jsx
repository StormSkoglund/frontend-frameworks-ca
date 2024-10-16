import { useEffect, useState } from "react"
// I am using the custom API Hook exmple from module 4 lesson 6.

function useApi(url) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true)
        setIsError(false)
        const fetchedData = await fetch(url)
        const json = await fetchedData.json()
        setData(json)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [url])
  return { data, isLoading, isError }
}

export default useApi
