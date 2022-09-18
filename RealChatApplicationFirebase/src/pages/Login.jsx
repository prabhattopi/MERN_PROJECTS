import React from "react";
import Add from "../img/addAvatar.png";
const LoginPages = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Prabhat ki Gossips</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button type="submit">Login Up</button>
        </form>
        <p>You don't have an account ? Register</p>
      </div>
    </div>
  );
};

export default LoginPages;
