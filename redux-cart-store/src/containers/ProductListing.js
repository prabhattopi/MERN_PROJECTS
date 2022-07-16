import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ProductsComponents } from './ProductsComponents'
import axios from 'axios'
import { setProducts } from '../redux/actions/action'
export const ProductListing = () => {
    const product=useSelector((state)=>state)
    const dispatch=useDispatch()
    // console.log(product)
    const fetchProducts=async()=>{
        try{
            const r=await axios.get(`https://fakestoreapi.com/products`)
          dispatch(setProducts(r.data))
        }
        catch(err){
            console.log(err)
        }
        
        
      


}
useEffect(()=>{
 fetchProducts()
},[])

  return (
    <div className='prabhat'>
    <ProductsComponents/>
    </div>
  )
}
