import React,{useState} from 'react';
import {Form} from "react-bootstrap";
import {Link, Navigate, useLocation, useNavigate} from "react-router-dom"
import {Button} from "react-bootstrap"
import GoogleButton from 'react-google-button'
import { UseUserAuth } from '../context/UserAuthContext';
import Alert from "react-bootstrap/Alert"
export const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  const {Login,googlesigin}=UseUserAuth()
  
  const navigate=useNavigate()
  const location =useLocation()
  const redirectPath=location.state?.path||"/"
   const HandleSubmit=async(e)=>{
    e.preventDefault()
    setError("")
    try{
      await Login(email,password)
       navigate(redirectPath,{replace:true})
       
    }
    catch(err){
      setError(err.message)

    }



   }
   const HandleGooglesigin=async(e)=>{
    e.preventDefault()
    try{
     await googlesigin()
     navigate(redirectPath,{replace:true})
    }
    catch(err){
      setError(err.message)

    }


   }
  return (
    <>
    <div className="p-4 box">
      <h2 className="mb-3">Firebase Auth Login</h2>
      {error&&<Alert variant="danger">{error}</Alert>}
    <Form onSubmit={HandleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Email Address"
        onChange={(e)=>setEmail(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      
        <Form.Control type="password" placeholder="Password" 
        onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <div className="d-gird gap-2">
    
      <Button variant="primary" type="submit">
        Log In
      </Button>
      </div>
    </Form>
    <hr />
    <div>
      <GoogleButton  onClick={HandleGooglesigin} className='g-btn' type="dark"/>
    </div>
    </div>
    <div className="p-4 box mt-3 text-center">
      Don't Have an Acount? <Link to="/signup">Sign up</Link>
    </div>
   </>
  )
}
