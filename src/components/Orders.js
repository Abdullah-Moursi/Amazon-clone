import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Order from "./Order";
import "./Orders.css";

const Orders = ({nightMode}) => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className={`orders ${nightMode ? 'orders_night' : ''}`}>
      <h1>Your Orders</h1>
      {orders.length === 0 && <h2 className="orders__empty">You don't have any orders!</h2>}
      <div className="orders__order">
        {orders?.map((order) => (
          <Order nightMode={nightMode} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
