import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ProductsComponents } from './ProductsComponents'
import { fetchProducts } from '../redux/actions/action'
export const ProductListing = () => {
   
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
