


import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import Spinner from "../components/Spinner";
import { login,reset} from "../features/auth/authSlice";
const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {user,isLoading,isError,isSuccess,message}=useSelector(state=>state.auth)
  const [formData, setFormData] = useState({

    email: "",
    password: "",

  });
  const { email, password } = formData;
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
    const userData={
      email,
      password
    }
    dispatch(login(userData))
    

}
if(isLoading){
  return <Spinner/>
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
