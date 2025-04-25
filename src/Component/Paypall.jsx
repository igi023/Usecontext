import React, { useContext } from 'react';
import { currencyContext } from "../App";
import { amountContext } from "../App";

const Paypall = () => {
    const { currency, changeCurrency } = useContext(currencyContext); 
    const { amount, changeAmount } = useContext(amountContext);
    
    return (
        <>
            <p>Currency is: {currency}</p>
            <button onClick={changeCurrency}>Change it from Paypall</button>
            <p>Amount is: {amount}</p>
        </>
    );
};

export default Paypall;
