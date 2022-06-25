import { signOut } from 'firebase/auth'
import React from 'react'
import Button from "react-bootstrap/Button"
import { UseUserAuth } from '../context/UserAuthContext'
export const Home = () => {
  const {user,Logout}=UseUserAuth()
  const handleClick=async()=>{
    try{
    await Logout()
    }
    catch(err){
      console.log(err)
    }

  }
  return (
    <div>
      {user&&user.email}
      <h1 style={{display:"flex"}}>
      I love you Nancy 
      <Button onClick={handleClick} variant="primary">Logout</Button>
      </h1>
     
    </div>
  )
}
