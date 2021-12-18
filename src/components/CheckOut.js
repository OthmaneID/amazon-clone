import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckOut.css";
import Item from "./Items";
import Subtotal from "./Subtotal";
import SmoothList from "react-smooth-list";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
        <div>
          <h3>Hello, {user?.email.replace("@gmail.com", "")} </h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <h3 className="TXT">
            {" "}
            <p> {basket?.length === 0 ? "Your Basket is Empty" : ""}</p>{" "}
          </h3>
          {/* the Basket Items  */}
          <div className="checkout__items">
            <SmoothList>
              {Array(basket.length)
                .fill()
                .map((_, i) => (
                  <div>
                    <Item buttons={true} key={i} id={basket[i].id} title={basket[i].title} image={basket[i].image} price={basket[i].price} rating={basket[i].rating} count={basket[i].count} />
                  </div>
                ))}
            </SmoothList>
          </div>

          {/* --items-- */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal key={0} />
      </div>
    </div>
  );
};

export default Checkout;
