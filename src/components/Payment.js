import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import "./Payment.css";
import { Link } from "react-router-dom";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        {" "}
        <h1>
          Checkout ({<Link to={"/checkout"}> {basket?.length} items </Link>})
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>NYC</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((el, index) => (
              <CheckoutProduct
                key={index}
                title={el.title}
                image={el.image}
                id={el.id}
                price={el.price}
                rating={el.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
