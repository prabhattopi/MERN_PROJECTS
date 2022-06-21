import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import { fetchAsyncMovies, fetchAsyncShows } from '../../Feautures/movies/movieSlice'
import user from "../../Images/User.jpg"
import "./Header.scss"
export const Header = () => {
  const dispatch=useDispatch()
  const [term,setterm]=useState("")
  const submitHandler=(e)=>{
    e.preventDefault()

    dispatch(fetchAsyncMovies(term))
     dispatch(fetchAsyncShows(term))
     setterm("")



  }
  return (
    <div className="header">

    
    <div className="logo">
    <Link to="/"> 
      MoVieApp
      </Link>
    </div>
   <div className="search-bar">
    <form onSubmit={submitHandler}>
      <input type="text" value={term} placeholder="SearchMOvies......" onChange={(e)=>setterm(e.target.value)} />
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
   </div>
    <div className='user-image'>
      <img src={user} alt="user" />
    </div>

   </div>
  )
}
