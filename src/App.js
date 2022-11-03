import "./App.scss"
import { useState } from 'react';
import { Routes, Route, } from "react-router-dom";
import Head from "./components/Head";
import Header from './components/Header';
import Footer from './components/Footer';
import Service from './pages/Service';
import LandingPageImg from "./components/LandingPageImg";
// import Carts from "./components/Cart";

// <div className="App">
//   <ProductDisplay />
//   {/* <button onClick={handleClick}>Services</button>
//   {
//     buttonClick
//       ? <ProductDisplay />
//       : null
//   } */}
//   <Footer />
// </div>

function App() {

  return (
    <>
      <Head />
      <Header />
      <Routes>
        <Route path="/" element={ <LandingPageImg /> } />
        <Route path="/pages/Service.js" element={ <Service />} />
        {/* <Route path="/pages/Service.js" element={ <Service />} />
        <Route path="/pages/Service.js" element={ <Service />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App;

