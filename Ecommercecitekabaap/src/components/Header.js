import React from "react";
import {Link} from "react-router-dom"
import { CartBtn } from "./button/CartBtn";
import {Login} from "./button/Login"
import { Signup } from "./button/Signup";
export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid py-2">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            </ul>
          
        
         <Link className="navbar-brand mx-auto fw-bold" to="/">Mobile Tobile</Link>
         <Login/>
         <Signup/>
         <CartBtn/>
         </div>
         </div>
      

    
      </nav>
     
    </>
  );
};
