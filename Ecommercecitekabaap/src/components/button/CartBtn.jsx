import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const CartBtn = () => {
  const data=useSelector((state)=>state.addItem)
  return (
    <>
    <NavLink className="btn btn-outline-primary ms-2" to="/cart">
      <span className='fa fa-shopping-cart me-1'>Cart ({data.length})</span>
    </NavLink>
    
    
    </>
  )
}
