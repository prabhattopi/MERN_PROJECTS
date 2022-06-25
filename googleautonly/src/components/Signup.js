import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UseUserAuth } from '../context/UserAuthContext';
import Alert from "react-bootstrap/Alert"
import {Link, useLocation, useNavigate} from "react-router-dom"

import GoogleButton from 'react-google-button'
export const Signup = () => {
  const [emai,setEmail]=useState("")
  const [password,setPassword]=useState()
  const [error,setError]=useState("")
  const {signUp,Login}=UseUserAuth()

  const navigate=useNavigate()
  const HandleSubmit= async(e)=>{
    e.preventDefault()
    setError("")
    try{
       await(signUp(emai,password))
   
      navigate("/login")
    }
    catch(err){
    setError(err.message)
    }



  }
  return (
    <>
    <div className="p-4 box">
    <h2 className="mb-3">Firebase Auth Signup</h2>
    {error&&<Alert variant="danger">{error}</Alert>}
  <Form onSubmit={HandleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
     
      <Form.Control type="email" placeholder="Email Address"
      onChange={(e)=>setEmail(e.target.value)} />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    
      <Form.Control type="password" placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)} />
    </Form.Group>
    <div className="d-grid gap-2">
  
    <Button variant="primary" type="submit">
      Sign up
    </Button>
    </div>
  </Form>

 
  </div>
  <div className="p-4 box mt-3 text-center">
    Already Have an Acount? <Link to="/login">Log In</Link>
  </div>
 </>
  )
}
