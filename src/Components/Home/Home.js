import { useState, useCallback } from "react";

import Characters from "./../Characters/Characters";
import Search from "./../Search/Search";
import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"
import Task from "./../Task/Task"
import Nav from "./../common/Nav"

const Home = () => {


  return (
    <>
       <Nav />
      <div className="container">
       
        <Header />
        <Task />
     
      
      </div>
      <Footer />
    </>
  );
};

export default Home;