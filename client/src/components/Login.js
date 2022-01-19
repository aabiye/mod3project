import React, { useState } from "react";
import "../App.css";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logo.png";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //stops refresh
  };

  const register = (event) => {
    event.preventDefault(); //stops refresh
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="logo2" src={logo} />

        {/* <h1>Login Page</h1> */}
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <Link to="/songs">
            <button className="login__signInButton"> Login </button>
          </Link>
        </form>
        <p>By signing-in you agree to Selena's Conditions</p>
        <button
          onClick={register}
          type="submit"
          className="login__registerButton"
        >
          Create your Selena Account
        </button>
      </div>
    </div>
  );
}

export default Login;
