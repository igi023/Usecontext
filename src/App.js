
import { createContext } from "react";
import Payments from "./Component/Payments";
import React, { useState } from "react";


export const currencyContext = createContext('usd');
export const amountContext = createContext(0);

function App() {

    const [currency, setCurrency] = useState('usd'); 
    const[amount, setAmount] = useState(0);

    const changeCurrency = () => {
      setCurrency('eur');
      
    };

    const changeAmount = (value) => {
      setAmount(value);
      console.log(value);
    };


  


  return (
   <>
    <currencyContext.Provider value={{currency, changeCurrency}}>
      <amountContext.Provider value={{amount, changeAmount}}>
        <Payments />
        

      </amountContext.Provider>

    </currencyContext.Provider>
  
    <button onClick={changeCurrency}>Change currency</button>
  <div>    
    <input onInput={e => changeAmount(e.target.value)} />
  </div>  
    
   </> 
  )
};

export default App;
