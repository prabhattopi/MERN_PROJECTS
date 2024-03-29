import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { TextField } from '../../components/TextField'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { addUser } from './UserSlice'
import {v4 as uuidv4} from "uuid"
export const Adduser = () => {
  const dispatch=useDispatch()
    const navigate=useNavigate()
    const [value,seVaue]=useState({
        name:'',
        email:""
    })
    const handleClick=()=>{

  dispatch(addUser({
    id:uuidv4(),
    name:value.name,
    email:value.email
  }))
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
