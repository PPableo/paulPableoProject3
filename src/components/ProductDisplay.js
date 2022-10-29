import firebaseConfig from "../firebase";
import { useState, useEffect } from 'react';
import { getDatabase, push, ref, onValue, remove, } from 'firebase/database';

const ProductDisplay = () => {
    // this state will track the books from our db
    const [services, setServices] = useState();
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
            // loop through the returned object
            for (let key in data) {
                // we're coming back to this in a bit
                // console.log(key)
                // console.log(response.val());
                newState.push({ 
                    key: key, 
                    name: data[key] })
                //  {key: , name:}

            }
            setServices(newState)
            // console.log(response.val)
        });
    }, []);
    // return (
    //     <div>
    //         <ul>
    //             {services.map((services) => {
    //                 return (
    //                     <li key={services.key}>
    //                         <p>{services.name}</p>
    //                     </li>
    //                 )
    //             })}
    //         </ul>
    //     </div>
    // )
}

export default ProductDisplay;