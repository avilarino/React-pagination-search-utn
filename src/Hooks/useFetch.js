
import { useEffect, useState } from "react";

const BASE_URL = "https://rickandmortyapi.com/api"

export const useFetch = (endpoint, initialState = []) => {
  const [data, setData] = useState(initialState); 
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const result = await fetch(`${BASE_URL}/${endpoint}`, {
        method: "GET",
        headers: {
          Authorization: "",
        },
      });
      const data = await result.json();
      console.log(data)
      setData(data)
      setFetching(false);
        } catch (e) {
      setData(initialState)
      setFetching(false)
      setError(true)
    }
  };
  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return [data, fetching, error];
};


export default useFetch