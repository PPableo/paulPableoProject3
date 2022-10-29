import { useState } from 'react';
import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';
import Footer from './components/Footer';

function App() {
  const [services, setServices] = useState([]);
  const [buttonClick, setButtonClick] = useState(false)
  const handleClick = () => {
    setButtonClick(true)
  }

  return (
    <div className="App">
      <Header />
      <button onClick={handleClick}>Services</button>
      {
        buttonClick
          ? <ProductDisplay />
          : null
      }
      <Footer />
    </div>
  );
}

export default App;
