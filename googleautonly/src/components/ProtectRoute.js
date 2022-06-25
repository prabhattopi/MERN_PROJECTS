import React from 'react'
import { UseUserAuth } from '../context/UserAuthContext'
import { Navigate, useLocation } from 'react-router-dom'

export const ProtectRoute = ({children}) => {
  const {user}=UseUserAuth()
  const location =useLocation()
  if(user) return children
  return <Navigate to="/login" state={{path:location.pathname}}/>

}
