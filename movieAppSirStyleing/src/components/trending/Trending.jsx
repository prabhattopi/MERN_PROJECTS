import React, { useState } from 'react'
import { Home } from '../Homes/Homes/Home'
import "./treanding.css"
export const Trending = () => {
    const [items,setItems]=useState(trending)
  return (
    <>
   <section className='trending'>
    <Home items={items}/>
   </section>
    
    </>
  )
}
