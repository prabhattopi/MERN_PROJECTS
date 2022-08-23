


import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({

    email: "",
    password: "",

  });
  const { email, password } = formData;
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
          <FaSignInAlt /> Login
        </h1>
        <p>Please Login</p>
      </section>
      <form action="" onSubmit={handleSubmit}>
        
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
            <button type="submit" className="btn btn-block">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Login;
