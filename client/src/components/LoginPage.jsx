import React from "react";
import { Link } from "react-router-dom";
import tlomodernBox from "../Tło_ModernBox.png";

const LoginPage = () => {
  return (
    <div>
      <div className="wrapper">
        <section className="top-nav">
          <h2>
            <Link className="logo" to="/">
              ModernBox
            </Link>
          </h2>
          <Link to="/" className="signin">
            <i className="fa-solid fa-right-to-bracket"></i> Sign In
          </Link>
        </section>
        <div className="line"></div>
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <Link to="/" className="submit-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
