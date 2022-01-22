import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
        {basket.map((el) => (
          <div className="checkout__item ">
            {" "}
            <img src={el.image} alt={el.title} />
            <div className="product__info">
              <p>{el.title}</p>
              <p className="product__price">
                <small>$</small>
                <strong>{el.price}</strong>
              </p>
              <div className="product__rating">
                {Array(el.rating)
                  .fill()
                  .map((_, i) => (
                    <p>⭐</p>
                  ))}
              </div>{" "}
              <button>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
