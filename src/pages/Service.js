import CategoriesModal from "../components/CategoriesModal"
import InventoryItems from "../components/main/InventoryItems"
import { useState } from "react";

const Service = () => {

  // Cart logic; Code along; Couldn't figure out logic; maybe routing
  //  -- maybe prop fixable, need to look further

  // const [cartItems, setCartItems] = useState([])
  // const onAdd = (props) => {
  //   const exist = cartItems.find((x) => x.id === props.id);
  //   if (exist) {
  //     setCartItems(cartItems.map((x) => x.id === props.id ? { ...exist, qty: + 1 } : x
  //     ));
  //   } else {
  //     setCartItems([...cartItems, { ...props, qty: 1 }]);
  //   }
  // }

  return (
    <div>
      <section className="home">
        <div className="wrapper">
          <div className="banner">
            <p>Services</p>
          </div>
          <div className="serviceContainer">

            {/* Stretch; New Feature - popup modal for categories */}
            {/* <CategoriesModal /> */}

            <InventoryItems />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service
