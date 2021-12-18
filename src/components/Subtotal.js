import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {

  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  var total = 0;
  var itemsCount = 0;


  const ItemCountFunct = () => {
    Array(basket.length).fill().map((_, i) => (
      itemsCount += parseInt(basket[i].count)
    ))
    return itemsCount
  }

  const TotalFunct = () => {
    Array(basket?.length).fill().map((_, i) => (
      total += (basket[i].price * basket[i].count)
    ))
    return total.toFixed(2)
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Subtotal ({basket.lenght} items): */}


              Subtotal ( {ItemCountFunct()} items):

              <strong> ${TotalFunct()} </strong>
              {/* <strong> {`${value}`} </strong> */}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <button onClick={e => {
        if (basket?.length > 0) 
        { navigate('/Payment') }
        else {
          alert("basket is empty !")
        }
      }}>Proceed to CheckOut</button>

    </div>
  );
};

export default Subtotal;
