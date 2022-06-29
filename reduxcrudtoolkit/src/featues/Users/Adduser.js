import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { TextField } from '../../components/TextField'

export const Adduser = () => {
    const navigate=useNavigate()
    const [value,seVaue]=useState({
        name:'',
        email:""
    })
    const handleClick=()=>{
  console.log(value)
  seVaue({name:"",email:""})
  navigate("/")
    }
  return (
    <div className='mt-10 max-w-xl mx-auto'>
        <TextField onChange={(e)=>seVaue({...value,name:e.target.value})} value={value.name} label="Name" inputProps={{type:"text",placeholder:"Prabhat Singh"}}/>
        <br />
        <TextField onChange={(e)=>seVaue({...value,email:e.target.value})} value={value.email}  label="Email" inputProps={{type:"email",placeholder:"google@gmail.com"}}/>

      <Button onClick={handleClick} children="Submit"></Button>
    </div>
  )
}
