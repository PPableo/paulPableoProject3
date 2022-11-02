import "./App.scss"
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
// import ProductDisplay from './components/ProductDisplay';
import Footer from './components/Footer';
import Service from './components/main/Service';
import LandingPageImg from "./components/LandingPageImg";

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
  // const [services, setServices] = useState([]);
  const [buttonClick, setButtonClick] = useState(false)
  const handleClick = () => {
    setButtonClick(true)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <LandingPageImg /> } />
        <Route path="/main/Service.js" element={ <Service />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;

