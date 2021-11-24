import {BrowserRouter, Routes, Route } from 'react-router-dom'

// componentes
import Login from "./Components/Login/Login"
import Home from "./Components/Home/Home"



function App() {
  
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

// el title en Header es un ejemplo de prop !!!!
// redirect para redireccionar en caso de que las rutas no funcionen
