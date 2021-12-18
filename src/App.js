import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/CheckOut";
import Login from "./components/login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe("pk_test_51K2LhkGKPU1RRlqT8SipFWZJFN2rMRRnNXPHdqUIN712YHxzZlIzeIrdc3QaRmQwuseQGj5KPLkvOSgUpB53ZfoQ00u2IOnjBd");

function App() {
  const [{ }, dispatch] = useStateValue();

  // Will Run Once when the app component loads...
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // if the User Just Logged in or the user was Logged in
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* if the route is / render the home page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          {/* if the route is /checkout render the checkout Page  */}
          <Route
            path="/Checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          {/* if the Route is /Login render the Login Page */}
          <Route path="/login" element={<Login />} />
          {/* If the  Route is /Payment render the Payment Page */}
          <Route
            path="/Payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          {/* If the Route is /orders render the Orders Page */}
          <Route 
          path='/orders'
          element={
            <>
            <Header/>
            <Orders/>
            </>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
