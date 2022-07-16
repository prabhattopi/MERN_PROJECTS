import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { removeSelectedProdcut, selectedProduct } from '../redux/actions/action'
export const ProductDetials = () => {
  const product=useSelector(state=>state.oneprod)
const dispatch=useDispatch()

  const {productId}=useParams()
  const getData=async()=>{
    try{
      const r=await axios.get(`https://fakestoreapi.com/products/${productId}`)
 
   dispatch(selectedProduct(r.data))
   
    }
    catch(err){

    }

  
  }
  console.log(product)
  useEffect(()=>{
    if(productId&&productId!=""){
      getData()
    }
    return ()=>dispatch(removeSelectedProdcut())
  
 
  },[productId])
  return (
    <div>

    </div>
  )
}
