
import { useState, useEffect } from "react";
import { useFetch } from "./../../Hooks/useFetch";
import { Row } from "react-bootstrap";

import Loading from "./../Loading/Loading";
import Character from "./Character";
import Paginate from "./../Paginate";

const BASE_ENDPOINT = "character";


const Characters = ({ search }) => {
  const [url, setUrl] = useState(BASE_ENDPOINT);

  useEffect(() => {
    const newUrl = !search ? BASE_ENDPOINT : `${BASE_ENDPOINT}?name=${search}`;
    setUrl(newUrl);
  }, [search]);

  const [data, fetching] = useFetch(url); 
  const { info, results: characters } = data;

  const handlePages = (newUrl) => {
    setUrl(`${BASE_ENDPOINT}?${newUrl}`);
  };

  return (
    <>
      <Row>
        {fetching ? (
          <Loading />
        ) : (
          characters.map((character) => (
            <Character key={character.id} {...character} />
          ))
        )}
      </Row>

      <Paginate {...info} handlePages={handlePages} />
    </>
  );
};

export default Characters;