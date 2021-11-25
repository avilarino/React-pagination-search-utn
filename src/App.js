import {BrowserRouter, Routes, Route } from 'react-router-dom'

// componentes
import Home from "./Components/Home/Home"
import Rick from "./Components/Rick/Rick"



function App() {
  
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Rick />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

// el title en Header es un ejemplo de prop !!!!
// redirect para redireccionar en caso de que las rutas no funcionen
