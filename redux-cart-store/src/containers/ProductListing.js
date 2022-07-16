import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ProductsComponents } from './ProductsComponents'
import axios from 'axios'
import { fetchProducts } from '../redux/actions/action'
export const ProductListing = () => {
    const product=useSelector((state)=>state)
    const dispatch=useDispatch()
useEffect(()=>{
 dispatch(fetchProducts())
},[])

  return (
    <div className='prabhat'>
    <ProductsComponents/>
    </div>
  )
}
