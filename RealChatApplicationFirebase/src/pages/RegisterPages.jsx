import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


import { auth, storage} from "../firebase";
const RegisterPages = () => {
  const [err,setErr]=useState(false)
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const displayName=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    const file=e.target[3].files[0];


    try{
      const res=await createUserWithEmailAndPassword(auth, email, password)

   


      const storageRef = ref(storage, displayName);
      
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
      
        (error) => {
          setErr(true)
        }, 
        () => {
          
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
           await updateProfile(res.user,{
            displayName,
            photoURL:downloadURL
           })
          });
        }
      );
    }
    catch(err){
    setErr(true)

    }





  }
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'>Prabhat ki Gossips</span>
        <span className='title'>Register</span>
        <form  onSubmit={handleSubmit}>
        <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input  style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
    <img src={Add} alt="" />
    <span>Add an avatar</span>
          </label>
          <button type='submit'>Sign Up</button>
          {err&&<span>Something went Wrong</span>}
        </form>
        <p>You have an account ? Login</p>

      </div>
    </div>
  )
}

export default RegisterPages