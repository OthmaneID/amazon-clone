import React from "react";
import "./Order.css";
import moment from "moment";
import Item from "./Items";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p> {moment.unix(order.data.created).format("MMMM Do YYYY , h:mma")} </p>
      <p className="order__id">
        <small> {order.id} </small>
      </p>
      {order.data.basket?.map((item) => (
        <Item buttons={false} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} count={item.count} />
      ))}
    </div>
  );
};

export default Order;
