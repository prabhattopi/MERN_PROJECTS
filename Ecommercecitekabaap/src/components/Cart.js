import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delItem } from '../redux/actions'
import { NavLink } from 'react-router-dom'
export const Cart = () => {
    const dispatch=useDispatch()
    const state=useSelector((state)=>state.addItem)
  const handleclose=(cardItem)=>{
    dispatch(delItem(cardItem))
  }
   const cartItems=(cardItem)=>{
    return (
        <>
        <div className="px-4 my-5 bg-light rounded-3" key={cardItem.id}>
            <div className="container py-4">
                <button onClick={()=>{handleclose(cardItem)}} className="btn-close float-end" aria-label='Close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cardItem.img} height="200px" alt={cardItem.title} />
                        </div>
                        <div className="col-md-4">

                            <h3>{cardItem.title}</h3>
                            <p className="lead fw-bold">$ {cardItem.price}</p>
                        </div>
                    </div>
              
            </div>
        </div>
        </>
    )

   }
   const emptyCard=()=>{
    return (
        <div className='text-center fw-bold fs-2 py-5 my-4'>
            Your Cart is Empty
        </div>
    )
   }
   const button=()=>{
    return (
        <div className="container">
            <div className="row">
                <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25">Proceed To Checkout</NavLink>
            </div>
        </div>
    )
   }
  return (
    <>
    {state.length===0 && emptyCard()}

    {state.length!==0 && state.map(cartItems)}
    {state.length!==0 && button()}
    
    </>
  )
}
