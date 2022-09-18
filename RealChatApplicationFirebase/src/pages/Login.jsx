import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";
const LoginPages = () => {

  const [errrr,setErr]=useState(false)
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()

    const email=e.target[0].value;
    const password=e.target[1].value;



    try{
     await signInWithEmailAndPassword(auth, email, password)
     navigate("/")

    }
    catch(err){
    setErr(true)

    }





  }




  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Prabhat ki Gossips</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button type="submit">Login Up</button>
          {errrr&&<span>Something went Wrong</span>}
        </form>
        <p>You don't have an account ?<Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default LoginPages;
