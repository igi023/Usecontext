import React, { useContext } from 'react';
import { currencyContext } from "../App";
import { amountContext } from "../App";
import { CURRENCIES } from '../Utils/CurrencyUtils';
import 'bootstrap/dist/css/bootstrap.min.css';

const Paypall = () => {
    const { currency } = useContext(currencyContext); 
    const { amount } = useContext(amountContext);

    const rate = CURRENCIES[currency];

    return (
        <div className="text-center mt-4">
        <p className="fw-semibold fs-5">
          {currency}, {amount} ={" "}
          {rate ? (amount * rate).toFixed(2) : "Invalid currency"} RSD
        </p>
        </div>
    );
};

export default Paypall;
