

import React from 'react'
import {FaSignInAlt,FaSignOutAlt,FaUser} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import { logout,reset } from '../features/auth/authSlice'
const Header = () => {
    const  dispatch=useDispatch()
    const navigate=useNavigate()
    const {user}=useSelector(state=>state.auth)
    const onLogotu=()=>{
        dispatch(logout())
        dispatch(reset())
        navigate("/")

    }
  return (
    <header className='header'>
        <div className="logo">
            <Link to="/">GoalSetter</Link>

        </div>
        <ul>
            {user?(
                <li>
                <button className='btn' onClick={onLogotu}>
                    <FaSignOutAlt/> Logout
                </button>
            </li>

            ):(
                <>
                <li>
                <Link to="/login">
                    <FaSignInAlt/> Login
                </Link>
            </li>
            <li>
                <Link to="/register">
                    <FaUser/> Register
                </Link>
            </li>
            </>
            )
        }
            
        </ul>
    </header>
  )
}

export default Header