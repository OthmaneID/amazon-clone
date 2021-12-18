import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "./login.css";

const Login = () => {

  const navigate = useNavigate()
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const SignIn = (e) => {
    e.preventDefault();
    // Some FireBase Login ...

    auth.signInWithEmailAndPassword(Email, Password)
      .then((auth) => {
        navigate('/')

      }).catch(error => alert(error.message))
  };
  const Register = (e) => {
    e.preventDefault();

    // Some fireBase Register ... 
    auth.createUserWithEmailAndPassword(Email, Password)
      .then((auth) => {
        // it's Succefully Created a New User with email and password
        console.log(auth);

        if (auth) {
          navigate('/')
        }
      })
      .catch(error => alert(error.message))
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} />

          <button className="login__signInButton" onClick={SignIn} type="submit">
            Sign In
          </button>

          <p>By Signing-In you agree to the AMAZON-FAKE-CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice </p>

          <button className="login__registerButton" onClick={Register}>
            Creacte Your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
