import React,{useState} from 'react'
import { TextField } from '../../components/TextField'

import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { addUser } from './UserSlice'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { editUser } from './UserSlice'
export const EditUsers = () => {
  const {id}=useParams()
  const users=useSelector(store=>store.users)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const existingUser=users.filter(e=>e.id===id)
    const {name,email}=existingUser[0]
    const [value,seVaue]=useState({
        name,
        email
    })
    const handleEditClick=()=>{
  dispatch(editUser({
    id:id,
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

      <Button onClick={handleEditClick} children="Edit"></Button>
    </div>
  )
}
