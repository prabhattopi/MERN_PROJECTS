import React, { useEffect } from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import Spinner from "../components/Spinner";
import { register,reset} from "../features/auth/authSlice";

const Register = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {user,isLoading,isError,isSuccess,message}=useSelector(state=>state.auth)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  useEffect(()=>{
  if(isError){
    toast.error(message)
  }
  if(isSuccess||user){
    navigate("/")
    
  }
  dispatch(reset())
  },[user,isError,isSuccess,message,navigate,dispatch])
  const onChange = (e) => {
    let {name,value}=e.target
    setFormData({
        ...formData,
        [name]:value
    })
  };
const handleSubmit=(e)=>{
    e.preventDefault()
    if(password!==password2){
      toast.error("Password donot Match")
    }
    else{
      const userData={
        name,email,password
      }
      dispatch(register(userData))
    }
}
if(isLoading){
  return <Spinner/>
}
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please Create an Account</p>
      </section>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-controll"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your Name"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-controll"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your Email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-controll"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-controll"
            id="password2"
            name="password2"
            value={password2}
            placeholder="Confirm password"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Register;
