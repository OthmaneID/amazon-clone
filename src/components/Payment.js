import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import "./Payment.css";
import Item from "./Items";
import SmoothList from "react-smooth-list";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { constants } from "buffer";
import axios from "../axios";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [{ basket, user }, dispatch] = useStateValue();
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows  us to charge the customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  // if the basket is empty rederect the client to checkout page
  useEffect(() => {
    if (basket.length < 1) {
      navigate("/checkout");
    }
  }, []);

  const handleSubmit = async (e) => {
    // do all the stripe stuff
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        navigate("/orders", { replace: true });
      });
  };

  const handleChange = (e) => {
    // Listen for changes in the CardElement
    // display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  function getBasketTotal(basket) {
    var total = 0;
    Array(basket?.length)
      .fill()
      .map((_, i) => (total += basket[i].price * basket[i].count));
    return total.toFixed(2);
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout ( <Link to="/checkout"> {basket?.length} items </Link> ){" "}
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__sections ">
          <div>
            <div className="payment__section payment__1">
              <div className="payment__title">
                <h3>Delivery address</h3>
              </div>
              <div className="payment__adress">
                <p> {user?.email} </p>
                <p>
                  <input onChange={(e) => setAdress(e.target.value)} value={adress} className="input__adress" type="text" placeholder="Adress" required={true} />{" "}
                </p>
                <p>
                  <input onChange={(e) => setCity(e.target.value)} value={city} className="input__city" type="text" placeholder="City" required={true} />
                </p>
              </div>
            </div>
            {/* Payment  section - Review Items */}
            <div className="payment__section payment__2">
              <div className="payment__title">
                <h3>Review Items and delivery </h3>
              </div>
              <div className="payment__items">
                <SmoothList>
                  {Array(basket.length)
                    .fill()
                    .map((_, i) => (
                      <div>
                        <Item buttons={false} key={i} id={basket[i].id} title={basket[i].title} image={basket[i].image} price={basket[i].price} rating={basket[i].rating} count={basket[i].count} />
                      </div>
                    ))}
                </SmoothList>
              </div>
            </div>
          </div>
          {/* Payment section - Payment Method */}
          <div className="payment__section payment__3 ">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payent__details">
              {/* stripe Payment */}

              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className="payment__priceContainer">
                  <CurrencyFormat renderText={(value) => <h3>Order Total : {value} </h3>} decimalScale={2} value={getBasketTotal(basket)} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                  </button>
                </div>
                {/* ERROR */}
                {error && <div>{error}</div>}
              </form>

              {/* Paypal payment */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
