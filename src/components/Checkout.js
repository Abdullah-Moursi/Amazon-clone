import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = ({ nightMode }) => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className={`checkout ${nightMode ? "checkout_night" : ""}`}>
      <div className="checkout__lift">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />

        <div>
          <h3>Hello, {user?.email} </h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.length === 0 && (
            <h1 className="checkout__empty">You don't have any products!</h1>
          )}
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
      <div className="checkout__right">
        <Subtotal nightMode={nightMode} />
      </div>
    </div>
  );
};

export default Checkout;
