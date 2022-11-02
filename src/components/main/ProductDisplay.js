import firebaseConfig from "./../../firebase";
import { useState, useEffect } from 'react';
import { getDatabase, push, ref, onValue, remove, } from 'firebase/database';

const ProductDisplay = () => {
    // this state will track the books from our db
    const [services, setServices] = useState([]);
    //   // this will track books we want to add to our db
    const [userInput, setUserInput] = useState("");

    useEffect(() => {
        // create a variable that will hold on to our database values
        const database = getDatabase(firebaseConfig);
        // create a variable that makes reference to our database
        const databaseRef = ref(database);
        // grab the information from our database
        onValue(databaseRef, (response) => {
            // Storing the returned data as a variable
            const data = response.val()
            const newState = []
            console.log(data)
            const productItems = {
                cover: newState.cover,
                name: newState.name,
                price: newState.price
            };

            for (let key in data) {
                newState.push(data[key])
            }
            // console.log(newState);

            // console.log(newState)
            // for (let key in data.brows) {
            //     newState.push({
            //         key: key, 
            //         name: data.brows[key]
            //     })
            //     console.log(data.brows[key])
            // }
            // loop through the returned object
            // for (let key in data) {
            //     // we're coming back to this in a bit
            //     // console.log(key)
            //     // console.log(response.val());
            //     newState.push({ 
            //         key: key, 
            //         name: data[key] })
            //     //  {key: , name:}
            // console.log(data)
            // }
            setServices(newState)
            // console.log(response.val)
            console.log(newState)
        });
    }, []);
    return (
        <div className="products">
            <ul>
                {services.map((service) => {
                    return (
                        // <li key={service.name}>
                        //     <p>{service.price}</p>{service.price}
                        // </li>
                        // // <p>{service.img}</p>
                        // // <li key={service.description}>
                        // //     <p>{service.description}</p>

                        // // </li>
                        <li key="{service.id}">
                                <div className='img'>
                                    <img src={service.cover} alt='' />
                                <div className='product-details'>
                                    <h3>{service.name}</h3>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                    <div className='price'>
                                        <h4>${service.price}.00 </h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProductDisplay;