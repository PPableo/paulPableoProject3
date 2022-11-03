import firebaseConfig from "../../firebase";
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, } from 'firebase/database';

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
    return (
        <div className="products">
            <ul>
                {services.map((service) => {
                    console.log(service)
                    return (
                        <li key={service.id}>
                            <div className='product mtop'>
                                <div className='img'>
                                    <img src={service.cover} alt={service.name} />
                                </div>
                                <div className='product-details'>
                                    <h3>{service.name}</h3>
                                    <div className='price'>
                                        <h4>${service.price}.00 </h4>

                                        {/* MVP onclick event to change state and add into cart ++ component */}
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