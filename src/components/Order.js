import moment from "moment";
import React from "react";
import "./Order.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order, nightMode }) => {
  return (
    <div className={`order ${nightMode ? 'order_night' : ''}`}>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket.map((el, index) => (
        <CheckoutProduct
          key={index}
          title={el.title}
          image={el.image}
          id={el.id}
          price={el.price}
          rating={el.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => <h3 className="order__total"> Order Total: {value}</h3>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix="$"
      />
    </div>
  );
};

export default Order;
