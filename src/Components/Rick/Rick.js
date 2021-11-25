import { useState, useCallback } from "react";

import Characters from "./../Characters/Characters";
import Search from "./../Search/Search";
import Footer from "./../Footer/Footer"
import Nav from "./../common/Nav"

const Home = () => {

  const [search, setSearch] = useState(null);

  const handlerSearch = useCallback(
    (value) => {
      setSearch(value);
    },
    [setSearch]
  );

  return (
    <>
       <Nav />
      <div className="container">
       
       
        <Search handlerSearch={handlerSearch} />
        <Characters search={search} />
      
      </div>
      <Footer />
    </>
  );
};

export default Home;