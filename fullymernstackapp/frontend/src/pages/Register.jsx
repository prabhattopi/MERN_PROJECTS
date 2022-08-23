import React from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const onChange = (e) => {
    let {name,value}=e.target
    setFormData({
        ...formData,
        [name]:value
    })
  };
const handleSubmit=(e)=>{
    e.preventDefault()
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
