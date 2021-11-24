import { useState, useCallback } from "react";

import Characters from "./../Characters/Characters";
import Search from "./../Search/Search";
import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"
import Task from "./../Task/Task"
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
       
        <Header />
        <Task />
        <Search handlerSearch={handlerSearch} />
        <Characters search={search} />
        <Footer />
      </div>
    </>
  );
};

export default Home;