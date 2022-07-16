import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { fetchSelectedProducts, removeSelectedProdcut, selectedProduct } from '../redux/actions/action'
export const ProductDetials = () => {
  const product=useSelector(state=>state.oneprod)
const dispatch=useDispatch()
const {productId}=useParams()

useEffect(()=>{
    if(productId&&productId!=""){
      dispatch(fetchSelectedProducts(productId))
    }
    return ()=>dispatch(removeSelectedProdcut())
  
 
  },[productId])
  return (
    <div>
     {
    Object.keys(product).length===0
    ?<div style={{fontSize:"40px",marginTop:"40px"}}>...loading</div>
    :<div>
      <div>
        <img width="200px" src={product.image} alt="" />
      
      </div>
      <div>
        <p>
          {product.description}
        </p>
      </div>
      <div>
        <h1>
          ${product.price}
        </h1>
      </div>
      <div>
      {product.category}
      </div>
      <Link to="/">Go Back</Link>
      </div>
     }
    </div>
  )
}
