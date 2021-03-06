import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

const Subtotal = ({nightMode}) => {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();

  return (
    <div className={`subtotal ${nightMode ? 'subtotal_night' : ''}`}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix="$"
      />

      <button onClick={e => navigate('/payment') } >Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
