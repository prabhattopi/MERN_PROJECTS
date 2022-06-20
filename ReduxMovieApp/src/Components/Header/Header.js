import React from 'react'
import {Link} from "react-router-dom"
import user from "../../Images/User.jpg"
import "./Header.scss"
export const Header = () => {
  return (
    <div className="header">
    <Link to="/"> 
    <div className="logo">
      MoVieApp
    </div></Link>
  
    <div className='user-image'>
      <img src={user} alt="user" />
    </div>

   </div>
  )
}
