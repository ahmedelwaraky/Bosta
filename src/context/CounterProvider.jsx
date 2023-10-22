import React, { useEffect, useState } from 'react'
import { CounterContext } from './counterContext'; // Correct the import statement
import axios from 'axios';

export default function CounterProvider(props) {

    let [userInput , setUserInput]=useState('')
    let [data , setData] = useState('')

    let handleInputChange =(event)=>{
        setUserInput(event.target.value)
    }


    useEffect(() => {
        // Only make the API request if userInput is not empty
            const fetchData = async () => {
                try {
                    const response = await axios.get(`https://tracking.bosta.co/shipments/track/${userInput}`);
                    console.log(response.data);
                    setData(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
            if (userInput) {
                fetchData();
            }
    }, [userInput]);    



    let test ="ali"
    return (
        <CounterContext.Provider value={{data , handleInputChange ,setUserInput ,userInput}}>
            {props.children}
        </CounterContext.Provider>
    )
}
