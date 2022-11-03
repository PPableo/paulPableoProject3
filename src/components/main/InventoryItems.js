import firebaseConfig from "../../firebase";
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, } from 'firebase/database';
import Cart from "../Cart";

const InventoryItems = () => {
    const [services, setServices] = useState([]);
    const [userInput, setUserInput] = useState("");

    useEffect(() => {
        const database = getDatabase(firebaseConfig);
        const databaseRef = ref(database);
        onValue(databaseRef, (response) => {
            const data = response.val()
            const newState = []
            setServices(data.productItems)
        });
    }, []);

    // const [cartItems, setCartItems] = useState([]);
    // const onAdd = (product) => {
    //     const exist = cartItems.find((x) => x.id === product.id);
    //     if (exist) {
    //         setCartItems(
    //             cartItems.map((x) =>
    //                 x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
    //             )
    //         );
    //     } else {
    //         setCartItems([...cartItems, { ...product, qty: 1 }]);
    //     }
    // };

    // const onRemove = (product) => {
    //     const exist = cartItems.find((x) => x.id === product.id);
    //     if (exist.qty === 1) {
    //         setCartItems(cartItems.filter((x) => x.id !== product.id));
    //     } else {
    //         setCartItems(
    //             cartItems.map((x) =>
    //                 x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
    //             )
    //         );
    //     }
    // };

    return (
        <div className="products">
            {/* <Cart /> */}
            <ul>
                {services.map((service) => {
                    console.log(service)
                    return (
                        <li key={service.id}>
                            <div className='product mtop'>
                                <div className='img'>
                                    <img src={service.cover} alt='' />

                                </div>
                                <div className='product-details'>
                                    <h3>{service.name}</h3>
                                    <div className='price'>
                                        <h4>${service.price}.00 </h4>
                                        {/* <button onClick={() => addToCart(service)}> */}
                                            <button>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default InventoryItems;