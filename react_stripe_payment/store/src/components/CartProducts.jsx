import React, { useContext } from 'react'
import Button from "react-bootstrap/Button"
import { CartContext } from '../context/CartContext'
import { getProductData } from '../productStore'
const CartProducts = ({product}) => {
    const cart=useContext(CartContext)
    const {id,quantity}=product
    const productData=getProductData(id)
    

  return (
    <>
    <h3>{productData.title}</h3>
    <p>{quantity} total</p>
    <p>${(quantity*productData.price).toFixed(2)}</p>
    <Button size="sm" onClick={()=>cart.deleteFromCart(id)}>Remove</Button>
    <hr />
    


    </>
  )
}

export default CartProducts