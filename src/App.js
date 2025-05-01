import React, { useState, createContext } from "react";
import Payments from "./Component/Payments";
import { CURRENCIES } from "./Utils/CurrencyUtils";
import "bootstrap/dist/css/bootstrap.min.css";

export const currencyContext = createContext('USD');
export const amountContext = createContext(0);

function App() {
  const [currency, setCurrency] = useState('USD'); 
  const [amount, setAmount] = useState(0);

  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
  };

  const changeAmount = (value) => {
    setAmount(Number(value)); // važno da pretvoriš u broj
  };

  return (
    <>
      <currencyContext.Provider value={{ currency, changeCurrency }}>
        <amountContext.Provider value={{ amount, changeAmount }}>
          <Payments />
        </amountContext.Provider>
      </currencyContext.Provider>

            <div className="container my-4">
              <div className="row justify-content-center">
          <div className="col-md-4">
            <input
              type="number"
              className="form-control mb-3 shadow-sm"
              placeholder="Unesi iznos"
              onInput={(e) => changeAmount(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select shadow-sm"
              onChange={(e) => changeCurrency(e.target.value)}
            >
              {Object.keys(CURRENCIES).map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

    </>
  ); 
}

export default App;
